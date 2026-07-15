---
title: 提交 WorkBuddy 社群案例
description: 按統一格式提交真實、可復現的 WorkBuddy Case，合併後自動顯示在社群案例集中。
breadcrumbTitle: Case 投稿指南
aside: false
outline: false
---

# 提交 WorkBuddy 社群案例

社群案例集用於收錄大家已經在 WorkBuddy 中實際跑通過的任務。案例合併後會自動出現在[社群案例集](/cases/)；經過進一步復現和編輯的經典任務，未來可能進入藍皮書正文。

## 一個合格的 Case 必須回答什麼

1. **場景是什麼**：誰在什麼情況下遇到了什麼問題。
2. **使用了哪些 Skills**：每個 Skill 的用途、來源和所需許可權。
3. **在 WorkBuddy 中怎樣執行**：輸入、關鍵步驟和任務指令。
4. **最終呈現了什麼效果**：交付物、截圖、GIF 或其他結果證明。
5. **怎樣判斷任務完成**：明確且可以複查的驗收標準。

::: warning 提交前先檢查是否重複
請先搜尋[社群案例集](/cases/)和[藍皮書目錄](/bluebook/)，自行確認場景或任務是否已經存在。相同目標、相同流程或僅更換輸入資料的內容，建議直接補充現有案例；如果新 Case 使用了明顯不同的 Skill、方法或交付方式，請在 PR 中說明差異。
:::

## 提交步驟

1. 搜尋案例集和藍皮書，確認任務沒有重複。
2. Fork [AlephAITech/WorkBuddyGuide](https://github.com/AlephAITech/WorkBuddyGuide) 倉庫。
3. 複製 `.github/CASE_TEMPLATE.md` 中的案例模板。
4. 新建 `docs/cases/submissions/<case-slug>/index.md`。
5. 將截圖等素材放進同目錄的 `assets/` 資料夾。
6. 本地執行 `npm install` 和 `npm run docs:build`。
7. 提交 Pull Request，並選擇 Case 專用 PR 模板。

推薦使用簡短的英文小寫目錄名，例如：

```text
docs/cases/submissions/daily-ai-news/
├── index.md
└── assets/
    ├── cover.png
    └── workbuddy-result.png
```

你不需要修改案例集合首頁。網站構建時會自動讀取所有 Case 的標題、分類、Skills、作者和簡介。

## Frontmatter 欄位

每個 Case 的 `index.md` 必須以這些欄位開頭：

```yaml
---
title: 用 WorkBuddy 自動整理每日 AI 資訊
summary: 自動收集多個來源的資訊並生成每日簡報
author: your-github-name
date: "2026-07-13"
category: 自動化
difficulty: 中等
skills:
  - 瀏覽器
  - 飛書文件
tags:
  - AI 資訊
  - 資訊整理
---
```

其中 `title`、`summary`、`author`、`date`、`category`、`difficulty` 和 `skills` 是必填項。缺少必填欄位時，網站構建會失敗，避免不完整的案例被髮布。

## 內容結構

正文至少包含：

- 場景描述
- 想要完成的任務
- 使用的 Skill
- 前置條件
- 在 WorkBuddy 中的操作
- 提示詞或任務指令
- 在 WorkBuddy 中的效果
- 驗收標準
- 遇到的問題
- 安全與限制
- 可以怎樣複用

## 圖片和結果證明

- 優先提供 WorkBuddy 執行過程和最終交付物的截圖。
- 圖片使用有意義的英文檔名，避免 `image-1.png`。
- 刪除姓名、手機號、賬號、內部地址、金鑰和其他敏感資訊。
- 不要提交無權公開的客戶資料、企業資料或版權內容。
- 在保證文字清晰的前提下壓縮圖片體積。

## 稽核與收錄

社群案例主要稽核真實性、完整性、安全性和可讀性，不要求一開始就達到藍皮書正式章節的編輯水平。

我們會持續觀察案例的可復現性、代表性和讀者反饋。進入藍皮書正文前，編輯團隊會再次驗證並與原作者溝通，正式章節會保留作者署名和原始 Case 連結。
