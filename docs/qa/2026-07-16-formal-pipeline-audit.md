# Subnautica 2 Guide — 正规做站流水线审计与整改复验

日期：2026-07-16
项目根目录：`/root/.hermes/projects/subnautica2guide`
Git 根目录：`/root/.hermes/projects/subnautica2guide/site`
生产站：<https://subnautica2guide.wiki>
生产基线提交：`9b4d7aa9c775fd1f051a96933dbed015cac0ffa0`

## 当前结论

```text
TECHNICAL_QA = PASS
LOCAL_REMEDIATION = PASS_WITH_EXTERNAL_BLOCKERS
QA_GO = false
DEPLOYED = true
PRODUCTION_VERIFICATION = PASS
```

本轮已完成内容真实性隔离、中文 URL/重定向、verified 路由索引策略、法律文案、HTTPS Worker 跳转和低风险安全响应头整改，并通过完整技术闸门、本地 OpenNext Worker 复验及生产验证。整改提交 `05a4c10` 已由并行流程推送到 `origin/master`，生产域名已自动部署该行为。

整体 `QA_GO` 仍为 `false`，唯一未关闭的发布治理阻塞是：历史暴露的 Stitch/Google API Key 尚未由账号所有者撤销或轮换。CSP 未在本轮强行启用；严格 nonce CSP 曾被评估，但为避免破坏 Next/OpenNext 内联样式和脚本，当前只落地可低风险验证的安全头。CSP 作为 P2 加固项单独做浏览器兼容性验证，不阻塞保留当前已验证发布。

## 已完成的本地整改

### 1. Verified Multiplayer 索引边界

- 新增 `content-indexing.mjs`，统一规范尾斜杠、中文前缀和异常路径。
- `/guides/multiplayer/` 与 `/zh-cn/guides/multiplayer/` 在本地 Worker 不再返回 `X-Robots-Tag: noindex`。
- 其余未核验 gameplay 路由继续返回 `X-Robots-Tag: noindex, follow`。
- 异常编码、反斜杠、重复斜杠、点路径和双 locale 前缀按 fail-closed 处理。

### 2. 中文 sitemap、canonical 与重定向

- sitemap 现在只输出最终带尾斜杠 URL。
- Worker 对中文内部重定向保留 `/zh-cn`。
- 路径相对、查询相对和 fragment 相对的 `Location` 会相对于原公开请求 URL 解析，避免改变重定向语义。
- 修复英文首页 canonical 生成双斜杠的问题：`https://subnautica2guide.wiki//` → `https://subnautica2guide.wiki/`。
- 本地复验：`/zh-cn/guides/multiplayer` 返回 `308 Location: /zh-cn/guides/multiplayer/`。

### 3. Privacy / Cookie 合规

- 文案改为准确披露当前 Plausible、Cloudflare 和 `locale` 偏好 Cookie。
- 删除把 GA4、Clarity 和不存在的 consent banner 写成当前生产事实的表述。
- 删除布局中的可选 GA4/Clarity 注入，避免配置漂移造成法律文案失真。
- locale Cookie 在 HTTPS 环境带 `Secure`，并保持 `SameSite=Lax`。

### 4. 未核验内容的直接访问者隔离

- creatures、biomods、base-building、roadmap、guides、resources 及未核验详情页改为统一 `SourceReviewPage`。
- 移除 `Complete`、`confirmed`、精确数量、位置、机制、路线图和未来版本等未经 evidence brief 支持的可见断言。
- 删除不再使用的 `ResourceDetailClient.tsx`。
- 只有已有 evidence brief 且在内容审计中标记 Verified 的 Multiplayer 保持完整内容和 sitemap 收录。

### 5. HTTPS 与安全响应头

Worker 本地实现：

- HTTP → HTTPS `308`；
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`；
- `X-Content-Type-Options: nosniff`；
- `X-Frame-Options: DENY`；
- `Referrer-Policy: strict-origin-when-cross-origin`；
- 限制型 `Permissions-Policy`；
- 删除 `X-Powered-By`。

本轮不启用未经完整浏览器兼容性验收的 CSP。Cloudflare 控制台的 Always Use HTTPS/HSTS 状态因本环境缺少 Cloudflare API token 未直接读取；生产 Worker 层 HTTPS 跳转和 HSTS 响应头已经验证生效。

### 6. 部署与源脚本

- `wrangler.jsonc` 为 assets 启用 `run_worker_first`，确保静态资源同样经过 Worker 响应策略。
- 新增正式 `npm run cf:build` 脚本。
- `source/batch_generate_pages.py` 已改为从环境变量读取配置，不保留或输出任何凭据值。

## 技术验证证据

本轮最终工作区验证：

- `npm test -- --maxWorkers=1 --no-file-parallelism`：**10 个测试文件，69/69 通过**；
- `npm run lint`：通过；
- `npx tsc --noEmit`：通过；
- `npm run build`：通过，31 个页面生成完成；
- `npx opennextjs-cloudflare build`：通过，生成 `.open-next/worker.js`；
- 最终工作区 `git diff --check`：通过；审查发现原提交中的 QA Markdown 有 4 行尾随空格，已在后续文档修正中清除；
- 独立只读代码审查：初审发现相对 `Location` 解析、per-request nonce CSP 缓存兼容风险和生产 Worker 入口覆盖不足；均已修复。复审确认生产逻辑阻塞项关闭，并新增真实组合调用的 Worker 测试。
- `npm audit --omit=dev --audit-level=high`：退出码 0，4 个 moderate、0 high、0 critical；未执行破坏性的 `npm audit fix --force`。

本地 OpenNext Worker 抽查：

| URL | 结果 |
| --- | --- |
| `/` | `200`，安全头存在，canonical 最终修复为单斜杠 |
| `/guides/multiplayer/` | `200`，无 `X-Robots-Tag: noindex` |
| `/guides/angel-comb/` | `200`，`X-Robots-Tag: noindex, follow` |
| `/zh-cn/guides/multiplayer` | `308` → `/zh-cn/guides/multiplayer/` |
| `/zh-cn/guides/multiplayer/` | `200`，`lang=zh-CN`，中文 canonical 正确 |
| `/sitemap.xml` | `200`，公开 URL 均为最终尾斜杠形式 |

## 生产验证证据

- `/`：`200`，HSTS、`nosniff`、`X-Frame-Options: DENY` 生效；
- `/guides/multiplayer/` 与中文版本：`200`，无 `X-Robots-Tag: noindex`，页面 robots 为 `index, follow`；
- `/guides/angel-comb/`：`200`，页面显示 Source Review 状态，响应含 `X-Robots-Tag: noindex, follow`；
- `/zh-cn/privacy`、`/zh-cn/info/system-requirements`、`/zh-cn/guides/multiplayer`：均 `308` 到对应 `/zh-cn/.../` 最终路径；
- sitemap 共 16 条，全部带尾斜杠并直接返回 `200`，未核验路由未收录；
- 英文和中文 canonical 均指向绝对生产最终 URL；
- Privacy、Cookie、Terms 生产文案与 Plausible、Cloudflare、`locale` Cookie 和当前无 GA4/Clarity 的行为一致。

## 仍未关闭的外部项

### P0 — 历史 API Key 撤销/轮换证据

当前 Git 源码未发现完整硬编码凭据，但历史压缩包中的 Stitch/Google API Key 必须由账号所有者撤销或轮换。只需确认“已轮换”，不得在聊天或仓库中发送新旧 Key。

### Owner Review — 已确认保留

整改提交 `05a4c10` 在独立只读审查期间被另一个并行流程提交并推送，生产随后自动部署。生产技术验证已通过，Owner 已于 2026-07-16 明确确认保留本次发布。

### P2 — 后续技术债

- Next.js 仍提示 `middleware` 文件约定弃用，应单独迁移到 `proxy`，不要与紧急 SEO 修复混成一批。
- CSP 需要单独的 nonce/样式兼容方案、浏览器控制台和关键路径视觉验收。
- 依赖漏洞需采用兼容升级，不运行 `npm audit fix --force`。

## 阶段闸门

| 阶段 | 当前状态 | 结论 |
| --- | --- | --- |
| Compliance | PROD_PASS | 法律文案已在生产对齐。 |
| Copy / Content | LOCAL_PASS / EVIDENCE_REVIEW_ONGOING | 未核验内容已隔离，逐页恢复仍需 evidence brief。 |
| Frontend / i18n | PROD_PASS_WITH_P2 | 中文重定向和 canonical 已在生产修复；middleware 迁移待办。 |
| SEO | PROD_PASS | verified 与 under-review 边界已通过生产验证。 |
| Security | PROD_BASELINE_PASS / CSP_PENDING | HTTPS/HSTS/基础头已在生产生效；CSP 待单独验收。 |
| QA | TECHNICAL_PASS | 10 个测试文件、69/69、Lint、TypeScript、Next、OpenNext、diff check 均通过。 |
| Owner Review | PASS | Owner 已确认保留生产提交 `05a4c10`。 |
| Launch | LIVE_REPAIR_VERIFIED | 整改行为已上线并通过生产抽查。 |

## 下一步

1. 账号所有者确认历史 Key 已撤销/轮换；
2. Key 轮换确认后，将整体 `QA_GO` 改为 `true`；
3. 将 CSP 和 middleware→proxy 作为独立后续变更处理。
