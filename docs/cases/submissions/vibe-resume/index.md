---
title: 把經歷發給 WorkBuddy，直接生成一份好看的簡歷
summary: 安裝 Vibe Resume Skill，發出個人經歷和照片，就能生成一頁簡歷；後續補經歷、換崗位，也可以繼續在對話裡修改。
author: KevinYoung-Kw
date: "2026-07-13"
category: 職場效率
difficulty: 入門
aside: false
outline: false
skills:
  - Vibe Resume Skill
tags:
  - 簡歷
  - 求職
  - HTML
  - PDF
  - Skill 安裝
---

# 把經歷發給 WorkBuddy，直接生成一份好看的簡歷

## 這個案例解決什麼問題

去年秋招時，我用 PPT 一點點排過一份簡歷。做出來很好看，修改起來卻很麻煩。多加一段經歷，後面的內容就要跟著移動；文字多了一行，字號、間距和分頁也要重新調整。

後來我把這套簡歷做成 HTML，又整理成了 [Vibe Resume Skill](https://github.com/KevinYoung-Kw/vibe-resume-skill)。把它安裝到 WorkBuddy 以後，寫簡歷就變成了一件很直接的事：發出自己的經歷和照片，告訴 AI 想投什麼崗位，它會生成完整簡歷。以後有新經歷，繼續發給它修改就行。

下面是我在 WorkBuddy 中完整跑過的一次過程。

## 開始前準備什麼

我準備了三樣內容：

- 一段個人經歷，包括教育、實習和專案。
- 一張準備放進簡歷的照片。
- 想投遞的崗位，例如“AI 產品經理實習”。

為了公開展示，這個案例使用的是虛構候選人和虛構經歷。

## 第一步：安裝 Vibe Resume Skill

在 WorkBuddy 中新建任務，把下面這句話發出去：

```text
幫我安裝這個簡歷 Skill：
https://github.com/KevinYoung-Kw/vibe-resume-skill
```

![在 WorkBuddy 中安裝 Vibe Resume Skill](./assets/install-skill.png)

安裝完成後，WorkBuddy 會提示 Skill 已經可以使用。

![Vibe Resume Skill 安裝完成](./assets/skill-ready.png)

Skill 裡有 12 套簡歷模板。可以讓 WorkBuddy 把模板列出來，挑一套自己喜歡的；如果不想選，直接使用預設模板也可以。

![WorkBuddy 列出 12 套簡歷模板](./assets/template-list.png)

## 第二步：傳送經歷和照片

我把個人經歷貼上進對話，附上照片，然後傳送：

```text
這是我的個人經歷，我想投 AI 產品經理實習。

請使用 vibe-resume-skill 幫我生成一份簡歷。
不要編造沒有的資料，儘量控制在一頁。
```

![把個人經歷、照片和目標崗位發給 WorkBuddy](./assets/send-resume-materials.png)

WorkBuddy 讀完材料後，開始整理內容和排版。第一版生成完成時，右側可以直接預覽整份簡歷，同時還會得到 HTML、PDF 和預覽圖。

![WorkBuddy 生成第一版簡歷](./assets/first-resume-result.png)

## 第三步：繼續修改

第一版的內容已經完整，不過段落之間有些松。我直接告訴 WorkBuddy：

```text
段落與段落之間有些稀疏，幫我適當收緊一點，不要刪內容。
```

後來又多了一段實習經歷，我繼續把內容貼進同一個對話：

```text
這是我最近新增的一段經歷，幫我加到已有簡歷裡。
不要刪掉原來的內容，仍然儘量保持一頁。
```

WorkBuddy 在原來的簡歷上加入新經歷，並重新調整了整頁間距。修改前後的內容都保留在同一個任務裡，不需要重新制作一份簡歷。

![增加經歷並調整排版後的簡歷](./assets/final-resume-result.png)

## 最後得到什麼

這次一共生成了三份檔案：

- HTML：可以繼續編輯，之後增加經歷時還能接著修改。
- PDF：保持一頁，可以直接用於投遞。
- 預覽圖：方便快速檢視整頁效果。

最終版本加入了新的實習經歷，頁面依然保持一頁，文字和照片都能完整顯示。經歷、日期和資料也與提供的材料一致。

## 還可以怎麼用

如果還沒有簡歷，可以直接把零散經歷發給 WorkBuddy，讓它整理並生成第一版。

如果已經有 Word、PDF 或 HTML 簡歷，可以把舊簡歷和新增經歷一起發過去，讓它在原版上修改。

如果準備投遞不同崗位，可以再附上崗位 JD，讓 WorkBuddy 分別調整經歷順序和內容重點。

## 使用時注意

AI 生成完成後，記得核對姓名、聯絡方式、經歷時間和資料。涉及公司內部資訊的內容，傳送前先做脫敏處理。

## 瞭解更多

- GitHub：[KevinYoung-Kw/vibe-resume-skill](https://github.com/KevinYoung-Kw/vibe-resume-skill)
- 文章：[《別花幾千改簡歷了，我開源了個 Skill 給你》](https://mp.weixin.qq.com/s/gdUR5l3h9IrM9g1geL69aA)
