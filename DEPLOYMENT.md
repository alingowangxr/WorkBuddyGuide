# Cloudflare Pages 部署

本站採用 VitePress 靜態構建，並通過 Cloudflare Pages 的 GitHub 整合持續部署。

## Cloudflare Pages 設定

在 Cloudflare 控制台選擇 **Workers & Pages → Create application → Pages → Import an existing Git repository**，授權並選擇 `AlephAITech/WorkBuddyGuide`。

使用以下配置：

| 配置項 | 值 |
| --- | --- |
| Project name | `workbuddy-guide` |
| Production branch | `main` |
| Framework preset | `VitePress`（也可選擇 None） |
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | `/` |
| Node.js version | `22` |

在 Cloudflare Pages 的生產環境變數中設定：

```text
VITEPRESS_SITE_URL=https://workbuddy.homes
```

倉庫預設值同樣使用正式域名，避免缺少環境變數時 canonical、Open Graph
和 sitemap 回退到 `pages.dev` 域名。

倉庫中的 `.nvmrc` 會宣告 Node.js 22。依賴通過 `package-lock.json` 固定，Cloudflare 構建時應使用 `npm ci` 安裝。

## 本地使用同一套構建

```bash
npm ci
npm run docs:build
npm run docs:preview
```

## 自動部署行為

- 推送到 `main`：釋出生產版本。
- Pull Request 或其他分支：由 Cloudflare Pages 生成預覽部署。
- 構建輸出是純靜態檔案，不需要資料庫或服務端金鑰。

## 自定義域名

正式自定義域名為 `https://workbuddy.homes`。如未來更換域名，需要同步更新
`VITEPRESS_SITE_URL`、`docs/public/robots.txt`、README 線上閱讀連結和各搜尋引擎站點屬性。

`docs/public/_headers` 會為帶內容指紋的 `/assets/*` 設定一年不可變快取，
併為社群圖片、分享圖和 favicon 設定一個月瀏覽器快取。
