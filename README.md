<p align="center">
  <a href="https://workbuddy.homes/">
    <img src="./assets/workbuddy-guide-banner.png" alt="WorkBuddy藍皮書：首頁預覽" width="100%">
  </a>
</p>

<h1 align="center">WorkBuddy 實戰藍皮書</h1>

<p align="center"><strong>從第一項任務，到一支 AI 團隊</strong></p>

<p align="center">
  簡體中文 · <a href="./README_en.md">English</a> ·
  <a href="https://workbuddy.homes/">線上閱讀</a> ·
  <a href="https://workbuddy.homes/cases/">社群案例集</a> ·
  <a href="https://workbuddy.homes/help/">幫你解決</a> ·
  <a href="./docs/reading-guide.md">閱讀指南</a> ·
  <a href="./CONTRIBUTING.md">參與共創</a>
</p>

> 這不是官方功能說明書的改寫，而是一本以真實任務為主線的實戰讀本。先完成安裝和第一項工作，再進入移動辦公、知識管理、專業診斷、內容自動化和多 Agent 團隊，最後把一次成功變成團隊可複用的工作系統。

## 線上閱讀

推薦訪問 **[workbuddy.homes](https://workbuddy.homes/)** 閱讀。網站提供完整側邊欄、全文搜尋、章節目錄、深色模式、流程圖和移動端適配。

GitHub 適合瞭解專案和參與貢獻；真正閱讀藍皮書時，網站體驗更完整。

## 你會在這裡看到什麼

| 部分 | 內容 |
| --- | --- |
| 第一篇 · 使用手冊 | 下載、安裝、介面、第一個任務、Skill、聯結器、API 和自動化 |
| 第二篇 · 案例篇 | 辦公、檔案、遠端、資訊、知識、會議、投資、影片、自媒體和 GEO |
| 第三篇 · 進階篇 | 打造 Skill、多 Agent 系統設計、自動化可靠性 |
| 第四篇 · 崗位與行業 | 不同崗位的使用路線和行業工作流 |
| 附錄 | 常用指令模板與場景速查表 |

## 推薦閱讀方式

- **第一次使用**：從[第 1 章](./docs/bluebook/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8A%EF%BC%9A%E5%85%88%E6%8A%8A%20WorkBuddy%20%E7%94%A8%E8%B5%B7%E4%BE%86/%E7%AC%AC%201%20%E7%AB%A0%20%E5%88%9D%E8%AD%98%20WorkBuddy/index.md)開始，按順序完成第一篇。
- **已經有具體任務**：直接進入第二篇對應案例，跑通後再閱讀第三篇。
- **準備團隊落地**：重點閱讀第三、四篇，並記錄許可權邊界、驗收標準和失敗回退。

更完整的路線見[如何閱讀這本藍皮書](./docs/reading-guide.md)。

## 幫你解決

如果你有真實的工作場景，卻不知道怎樣用 WorkBuddy 完成，可以前往 **[幫你解決](https://workbuddy.homes/help/)** 提交場景問卷。

請在問卷中說明你遇到的問題、目前的處理方式、會用到的資料、期望結果和安全邊界。我們會閱讀並評估每一份需求；如果需要補充資訊，會通過你主動留下的聯絡方式與你溝通。

具有代表性和複用價值的問題，我們會嘗試製作成完整的開源 Case，寫清所用 Skill、安裝與使用方法、任務描述、操作過程和最終效果，併發布到[社群案例集](https://workbuddy.homes/cases/)，幫助更多遇到類似問題的人。

## 本地閱讀與開發

需要 Node.js 20～24，推薦 Node.js 22。

```bash
npm install
npm run dev
```

本地構建：

```bash
npm run docs:build
npm run docs:preview
```

## 參與共創

我們優先收集真實、可復現的 WorkBuddy 使用案例。提交 Case 前，請先搜尋[社群案例集](https://workbuddy.homes/cases/)和[藍皮書目錄](https://workbuddy.homes/bluebook/)，確認場景或任務沒有重複。若目標相同但使用了不同的 Skill、方法或交付形式，請在 PR 中說明差異。

每個案例至少需要寫清：

- **場景與問題**：誰在什麼任務中遇到了什麼困難。
- **使用的 Skill**：Skill 的作用、來源、安裝方式和必要配置。
- **任務描述**：在 WorkBuddy 中輸入的提示詞、步驟或自動化設定。
- **執行過程**：關鍵操作、許可權要求、輸入資料和安全邊界。
- **實際效果**：使用截圖或其他結果證明展示最終輸出。
- **驗收標準**：怎樣判斷任務已經正確完成。

投稿時，在 `docs/cases/submissions/` 下為案例新建獨立目錄，使用 [Case 正文模板](./.github/CASE_TEMPLATE.md)編寫內容，並通過 [Case PR 模板](./.github/PULL_REQUEST_TEMPLATE/case.md)提交。稽核合併後，案例會自動出現在網站左側目錄；具有代表性的經典案例經過進一步復現和編輯後，可能進入藍皮書正式章節。

完整流程請閱讀 [Case 投稿指南](https://workbuddy.homes/community/case-contributing)和[貢獻指南](./CONTRIBUTING.md)。準備或提交 PR 後，也可以按網站提示加入 WorkBuddy 共創群，交流選題並獲得內容完善建議。

## 目錄結構

```text
WorkBuddyGuide
├─ .github/
│  ├─ CASE_TEMPLATE.md             # Case 正文模板
│  └─ PULL_REQUEST_TEMPLATE/       # Pull Request 模板
├─ docs/
│  ├─ .vitepress/                  # 網站配置、主題、導航與 SEO
│  ├─ bluebook/                    # 藍皮書正式章節
│  ├─ cases/
│  │  └─ submissions/              # 社群提交的獨立 Case
│  ├─ community/                   # Case 投稿與社群共創指南
│  ├─ help/                        # “幫你解決”場景問卷頁面
│  ├─ public/                      # 網站圖片、二維碼等靜態資源
│  ├─ index.md                     # 網站首頁
│  └─ reading-guide.md             # 閱讀指南
├─ scripts/                        # 內容同步與輔助工具
├─ CONTRIBUTING.md                 # 完整貢獻規範
├─ README.md                       # 中文專案說明
└─ README_en.md                    # English README
```

## 部署

本站使用 **VitePress + Cloudflare Pages + GitHub**。Cloudflare Pages 連線本倉庫的 `main` 分支後，每次推送都會自動構建部署。配置見 [DEPLOYMENT.md](./DEPLOYMENT.md)。

## 作者們

感謝以下作者共同參與《WorkBuddy 藍皮書》的創作與維護。點選名片可檢視原圖並掃描二維碼。

<p align="center">
  <a href="./assets/authors/jia-mu-wei-lai-pai.png"><img src="./assets/authors/jia-mu-wei-lai-pai.png" alt="甲木未來派" width="48%"></a>
  <a href="./assets/authors/mo-yu-xiao-li.png"><img src="./assets/authors/mo-yu-xiao-li.png" alt="摸魚小李" width="48%"></a>
</p>

<p align="center">
  <a href="./assets/authors/dai-shu-di-ai-ke-zhan.png"><img src="./assets/authors/dai-shu-di-ai-ke-zhan.png" alt="袋鼠帝AI客棧" width="48%"></a>
  <a href="./assets/authors/cang-he.png"><img src="./assets/authors/cang-he.png" alt="蒼何" width="48%"></a>
</p>

<p align="center">
  <a href="./assets/authors/liu-cong-nlp.png"><img src="./assets/authors/liu-cong-nlp.png" alt="劉聰NLP" width="48%"></a>
</p>

## 宣告

本專案是社群維護的 WorkBuddy 實戰知識庫。涉及產品功能、介面、價格、可用範圍和安全策略等時效性資訊時，請以 WorkBuddy 官方渠道為準。


## 開源協議

本專案採用 [MIT License](./LICENSE) 開源。你可以自由使用、複製、修改和分發本專案，但需要保留原始版權宣告和許可證文本。
