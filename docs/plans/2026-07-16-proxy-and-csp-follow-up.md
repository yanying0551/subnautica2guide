# Next.js Proxy 与 CSP 后续加固实施计划

> **For Hermes:** 按 TDD 小步执行；共享工作区有并行代理时先等待，不启动重复测试或构建。

**Goal:** 消除 Next.js 16 `middleware` 弃用告警，同时在不破坏 Next/OpenNext 页面脚本、样式和缓存语义的前提下决定是否启用 CSP。

**Architecture:** 将 `src/middleware.ts` 按 Next.js 16 官方约定等价迁移为 `src/proxy.ts`，仅改文件约定和导出名，不改变 locale rewrite、请求头或 Cookie 行为。CSP 作为独立评估项；除非真实 Worker、浏览器关键路径和缓存兼容测试均通过，否则继续保持 deferred，不把实验策略推向生产。

**Tech Stack:** Next.js 16.2.9、TypeScript、Vitest、OpenNext Cloudflare Workers。

---

### Task 1: 锁定 Proxy 迁移契约

**Files:**
- Modify: `tests/DeploymentPolicy.test.ts`
- Modify: `tests/ComplianceCopy.test.ts`

1. 先增加测试：要求 `src/proxy.ts` 存在、`src/middleware.ts` 不存在、导出 `proxy`，且 Secure locale Cookie 行为仍由 Proxy 实现。
2. 只运行这两个测试并确认因 Proxy 尚不存在而失败。

### Task 2: 等价迁移 Middleware

**Files:**
- Rename: `src/middleware.ts` → `src/proxy.ts`
- Modify: `src/proxy.ts`
- Modify: `src/contexts/LocaleContext.tsx`
- Modify: `src/lib/server-locale.ts`

1. 重命名文件并将导出函数 `middleware` 改为 `proxy`。
2. 只更新注释中的旧称，不改变运行逻辑。
3. 运行定向测试，要求转绿。

### Task 3: CSP 可行性闸门

**结论（2026-07-16）：继续 deferred，不在本轮启用。**

- 当前 `response-policy.mjs` 明确只发布低风险安全头；`X-Frame-Options: DENY`、HSTS、nosniff、Referrer-Policy 与 Permissions-Policy 保持启用。
- 根布局包含 Plausible 外部脚本、内联 Plausible bootstrap 与内联 JSON-LD；直接启用严格 `script-src` 会破坏现有页面。
- Next.js 16 官方文档说明，nonce CSP 会强制所有页面动态渲染、禁用静态优化/ISR，并使默认 CDN 缓存不可用；这与当前 OpenNext/Cloudflare 缓存目标存在显著冲突。
- 不采用只为“有一个 CSP”而加入 `'unsafe-inline'` 的宽松策略；SRI 方案仍属实验能力。
- 后续若启用，必须作为独立变更验证 nonce/hash、Plausible allowlist、JSON-LD、Next RSC、OpenNext 缓存、浏览器控制台及视觉关键路径。

**Files:**
- Verify: `response-policy.mjs`
- Verify: `tests/ResponsePolicy.test.ts`
- Verify: `tests/ProductionWorker.test.ts`
- Verify: `tests/DeploymentPolicy.test.ts`

1. 保留现有“无未经验证 CSP”的测试作为安全基线。
2. 检查页面内联脚本、样式、Plausible、Next RSC 与 OpenNext 缓存约束。
3. 若不能同时证明 nonce/hash、缓存和浏览器关键路径兼容，则不启用 CSP，只记录继续 deferred。

### Task 4: 串行验证

1. 定向 Vitest。
2. 全量 Vitest（单 worker）。
3. ESLint。
4. `tsc --noEmit`（空闲窗口、足够 heap）。
5. Next build。
6. OpenNext build。
7. `git diff --check` 和静态代码审查。

### Task 5: 状态记录

- 更新 QA 审计与 `project-control.md`。
- 历史 Stitch/Google API Key 未轮换，P0 与 `QA_GO=false` 保持不变。
- 未获新的发布授权前，不主动部署本轮后续技术债变更。
