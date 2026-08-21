# Stitch UI → Subnautica 2 Guide 内容接入计划

**状态：READY FOR UI HANDOFF / 内容证据并行准备**  
**目标：** 把 @tg_sheji_buluke_bot 已取得的 Stitch 视觉设计，落到现有 `subnautica2guide.wiki` 的真实内容、路由和双语页面上；设计是视觉真源，内容审计是事实真源。

## 1. 两条真源不能混用

- **视觉真源：Stitch**
  - 页面层级、导航、卡片、标签、搜索/筛选、移动端布局、空态/来源审查态。
  - 必须拿到实际 Stitch 项目/屏幕截图或导出 HTML，不能只根据描述重画。
- **事实真源：内容证据台账**
  - `docs/content-audit.md`
  - `docs/content-briefs/*.md`
  - `docs/editorial-content-policy.md`
  - 未有官方来源或可重复当前版本验证的玩法细节，不得因为 UI 已设计就当作事实发布。

## 2. 现有网站内容分层

### A. 可先接入设计并保留索引

1. `/` 首页：品牌定位、主题入口、内容状态提示。
2. `/guides` 攻略 Hub：改造成 Stitch 的内容导航/筛选入口，但对 under-review 内容使用明确状态标签。
3. `/info/system-requirements`：已完成来源核验，可作为第一个完整详情页样板。
4. `/guides/multiplayer`：目前是有限范围核验，可作为第二个详情页样板。
5. `/updates/roadmap`：来源有范围限制，必须显示来源、检查日期和“非承诺时间表”提示。
6. 法律与编辑政策页面：保持可访问，不套用游戏内容卡片的误导性状态。

### B. 先接入 UI 外壳，但继续 `Under source review`

- `/guides/beginner-guide`
- `/resources` 与 `/resources/[slug]`
- `/creatures`
- `/base-building`
- `/biomods`
- `/guides/digestive-incompatibility`
- `/guides/angel-comb`
- `/guides/feedback-resonator`
- `/guides/subnautica-2-map-biomes`
- `/guides/subnautica-2-blueprints-crafting-recipes`
- `/guides/subnautica-2-walkthrough-progression`

这些页面可以使用 Stitch 的卡片、表格、标签、目录、FAQ、空态和来源面板，但具体机制、坐标、配方、掉落、剧情顺序等必须显示“来源审查中/当前版本待验证”，不能伪造数据填充。

## 3. Stitch 页面到现有路由的映射

| Stitch 设计模块 | 网站落点 | 接入要求 |
|---|---|---|
| 全局 Header / 主导航 | `src/components/Header.tsx`、layout | 保留英文/中文路径切换、当前路由高亮、移动端菜单；不破坏 canonical/hreflang |
| 首页 Hero | `src/components/HomePage.tsx` | 设计中的标题、CTA、状态徽章只能使用已冻结文案；独立粉丝项目声明保留 |
| Guide Hub / 分类导航 | `src/app/guides/page.tsx` + `src/lib/constants.ts` | 与真实 guide registry 一致；每张卡标明 `Verified` 或 `Under source review` |
| 详情页 Hero / TOC | 各 `src/app/**/page.tsx` | 先抽成共享页面壳，再逐页填充证据内容；标题、摘要、FAQ 与 metadata 必须同步 |
| Resource / Creature 数据卡 | `/resources`、`/creatures` | 先支持空态/审查态/已核验态三种状态，不填无证据的数值和位置 |
| Map / Blueprint / Progression 工作台 | 三个 `subnautica-2-*` guide 路由 | 以“追踪器/框架”呈现，显示 build scope、last checked、source links |
| Sources / Last checked 面板 | 共享 `EvidencePanel` 组件 | 每个可索引详情页必须可见；不只放在 metadata 或页脚 |
| Search / Filter / Sort | 先做页面内客户端交互 | 过滤只能作用于真实 registry；不能暗示未核验数据完整 |
| Empty / Loading / Review states | 共享状态组件 | 统一文案：`Under source review` / `来源核验中`，不能使用 `Verified` |
| Mobile bottom nav / drawer | 共享 layout 组件 | 必须有真实移动端截图证据，避免桌面设计直接缩放 |

## 4. 内容接入顺序

### Phase 0 — UI handoff（前置）

从 @tg_sheji_buluke_bot 获取并归档：

- Stitch project name / project ID；
- 每个屏幕的 screen ID、设备类型（desktop/mobile）；
- 首页、Guide Hub、详情页、资源/生物列表、来源审查态的截图或下载 URL；
- 导出的 HTML/CSS（如果有）；
- 字体、颜色、间距、图标和图片资源清单；
- 设计中已出现的英文/中文文案。

**没有这些证据时，不能声明 Stitch 设计已经完成交付，也不能凭空声称实现已与设计一致。**

### Phase 1 — 设计适配层

1. 对照现有组件树，建立 Stitch → React 组件映射。
2. 提取 tokens 到 `globals.css` / 共享组件，避免逐页复制样式。
3. 先实现 Header、Footer、Hero、Card、StatusBadge、EvidencePanel、TOC、FAQ、空态。
4. 保留现有 locale middleware、`l()`、`getAlternates()` 和 Worker indexing policy。
5. 用已核验的 system requirements 页面做第一条完整视觉回归样板。

### Phase 2 — 内容接入

按证据强度推进：

1. system requirements；
2. multiplayer；
3. roadmap（限定范围）；
4. map/biomes、blueprints/crafting、walkthrough/progression 的框架型内容；
5. resources / creatures / base-building / biomods 的逐条证据补录。

每个页面完成前必须有：

- 英文和中文正文；
- title/description/OG/JSON-LD；
- visible Sources / Last checked / Applicable version；
- `content-brief`；
- 内容审查状态；
- internal links；
- sitemap/noindex 决策。

### Phase 3 — QA 和上线

- Stitch 截图 vs 实现截图：桌面和移动端逐屏比对；
- 真实路由、中文前缀、canonical/hreflang；
- under-review 路由仍返回 `X-Robots-Tag: noindex, follow` 且不进 sitemap；
- verified 路由不能被误加 noindex；
- `npm test && npm run lint && npm run build && npx opennextjs-cloudflare build`；
- 生产部署和公开发布动作仍需 owner 确认。

## 5. 第一批实现任务

| ID | 任务 | 依赖 | 状态 |
|---|---|---|---|
| S2G-UI-01 | 归档 Stitch 项目/屏幕证据并建立 design handoff | bot 提供证据 | BLOCKED: UI handoff |
| S2G-UI-02 | 建立 content-fit matrix 与冻结文案 | S2G-UI-01 + content audit | DONE |
| S2G-UI-03 | 实现共享视觉组件和全局壳 | S2G-UI-01 | IN PROGRESS（首轮基础组件已完成，待真实 Stitch 逐屏校准） |
| S2G-UI-04 | 用 system requirements / multiplayer 完成两页视觉接入 | S2G-UI-03 | DONE（首轮壳接入，待截图对齐） |
| S2G-UI-05 | 将 guides hub 与三类 guide tracker 接入状态化 UI | S2G-UI-02/03 | IN PROGRESS（Guides Hub 已完成，tracker 待视觉校准） |
| S2G-UI-06 | 逐条内容证据审查，解除可解除的 noindex | 独立证据 | WAITING |
| S2G-UI-07 | 桌面/移动 QA、构建、生产验收 | S2G-UI-04/05/06 | WAITING |

## 6. 不做的事

- 不把 Stitch 的示例数据当成 Subnautica 2 已确认数据；
- 不复制 Subnautica 1 的生物、资源、配方、坐标、命令到 Subnautica 2；
- 不因页面视觉漂亮就移除 `noindex`；
- 不在没有 mobile Stitch screen 或截图时声称移动端设计已交付；
- 不在没有 owner 确认时做公开发布、批量索引提交、域名/DNS 变更。

## 7. 验收标准

- [ ] Stitch project/screen evidence 已归档；
- [ ] 设计系统与实际组件映射完成；
- [ ] 中英文首页、Guide Hub、详情页状态一致；
- [ ] 每个事实 claim 有证据或明确不确定性标签；
- [ ] sitemap、canonical、hreflang、Worker noindex 与内容状态一致；
- [ ] desktop + mobile 截图验收通过；
- [ ] 测试、lint、Next build、OpenNext build 通过；
- [ ] 生产发布前获得 owner 确认。
