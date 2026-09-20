# Louis Arvor 网站完整交付包

整理日期：2026-09-18（补充Downloads素材）。基线：2026-09-15 已发布版本，包含全大写导航。
当前网址：https://louis-arvor-portfolio.vercel.app/

## 交付内容

- `website/`：可直接运行和部署的完整网站，HTML、CSS、JS、全部运行素材与许可证。与发布目录逐文件核对。
- `development/`：猫咪、LOUIS消散、ASCII背景的可编辑源码，固定依赖版本及可移植构建脚本。普通文案和样式修改不需要构建。
- `model-source/cat-walk-v7.blend`：线上行走GLB对应的Blender源文件。静坐模型以website中的GLB交付，可导入Blender继续编辑。
- `AGENTS.md`：供AI agent阅读的架构、修改入口、约束和验收说明。
- `AI-AGENT-接手提示词.md`：接收人可直接复制给AI agent。
- `线上项目转交.md`：如何取得当前网址的管理权，以及使用自己的账号重新部署。
- `素材与许可.md`、`asset-inventory.csv`：素材清单、已知来源和版权边界。
- `SHA256SUMS.json`：交付文件完整性清单；`live-verification.json`记录线上核心文件核对结果。

## 最快开始

1. 解压整个文件夹，在支持本地文件夹的AI代码工具中打开根目录，要求agent先读AGENTS.md。
2. 使用Python3启动本地服务器：`python3 -m http.server 5198 --directory website`。
3. 浏览器打开 `http://localhost:5198/index.html`。不能仅用file://双击HTML；模型、模块和字体需要HTTP服务器。
4. 项目详情示例：`http://localhost:5198/project.html?collection=china&project=0`。
5. 修改文字、图片、CSS可直接刷新。修改development里的渲染代码，先进入development执行 `npm ci`，再执行 `npm run build`，更新website中的bundle后刷新。

本项目是静态网站，运行现有版本不依赖数据库、后端API或环境密钥。Python只是本地预览方式；任何静态HTTP服务器均可替代。

## 文件交付与线上控制权

此包不含原作者电脑的.vercel绑定、登录状态、密码、Token、Git历史或委托人的私人资料。拿到文件可以修改并创建自己的部署；要直接更新当前网址，还须完成Vercel项目转交并以接收人自己的账号重新关联。不要共享旧账号密码。

当前首页简介、项目内容、照片与法国电话含占位内容。邮箱为目前公开的hanyi.arvor@icloud.com；正式内容由Louis确认。字体和第三方依赖按原许可使用，交付文件不代表取得第三方资产的独占著作权。

## 2026-09-18补充

supplementary-assets/收录已筛选的下载原素材、备选猫模型及动画工程；说明和逐文件清单在该目录。完整包已包括原交付全部内容，无需同时发送9月17日旧包。运行网站仍以website为准，补充素材不会自动发布。
