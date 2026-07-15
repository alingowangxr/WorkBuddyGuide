---
title: WorkBuddy 社群案例集
description: 彙集 WorkBuddy 使用者提交的真實案例，瞭解不同場景使用了哪些 Skills、如何執行以及最終呈現了什麼效果。
breadcrumbTitle: 社群案例集
aside: false
outline: false
pageClass: community-cases-page
---

# WorkBuddy 社群案例集

這裡收錄由 WorkBuddy 使用者提交的真實實踐。每個案例都會說明它解決了什麼場景、使用了哪些 Skills、在 WorkBuddy 中怎樣執行，以及最終交付了什麼結果。

社群案例通過完整性、安全性和可讀性稽核後即可釋出；經過進一步復現和編輯的經典任務，未來可能被收錄進《WorkBuddy 實戰藍皮書》正文。

## 如何提交 Case

1. 先搜尋左側的社群 Case 和[藍皮書目錄](/bluebook/)，確認場景或任務沒有重複。
2. 閱讀[Case 投稿指南](/community/case-contributing)，複製標準模板。
3. 在 `docs/cases/submissions/` 下新增一個 Case 資料夾。
4. 寫清場景、使用的 Skills、操作過程、實際效果和驗收標準。
5. 本地構建通過後提交 Pull Request，稽核合併後會自動出現在左側案例目錄和本頁列表中。

::: warning 提交前請自行檢查
如果已有 Case 使用相同目標和流程，請優先補充原案例；如果使用了不同的 Skill、方法或交付方式，請在 PR 中明確說明差異。
:::

<div class="case-intro-actions">
  <a class="case-intro-button case-intro-button--primary" href="/community/case-contributing">提交你的 Case</a>
  <a class="case-intro-button" href="/bluebook/">閱讀藍皮書</a>
</div>

<section class="case-co-create" aria-labelledby="case-co-create-title">
  <div class="case-co-create__copy">
    <p class="case-co-create__label">CONTRIBUTOR COMMUNITY</p>
    <h2 id="case-co-create-title">提交 PR 後，加入 WorkBuddy 共創群</h2>
    <p>如果你正在準備或已經提交 Case PR，歡迎新增微信。我們會邀請你進入 WorkBuddy 共創群，一起討論案例結構、復現過程、稽核建議和藍皮書後續選題。</p>
    <strong>新增微信時，請備註：workbuddy共創</strong>
    <ul>
      <li>交流 Case 選題，避免重複提交。</li>
      <li>討論 Skill、操作步驟和結果證明。</li>
      <li>獲取 PR 稽核和內容完善建議。</li>
      <li>參與經典 Case 進入藍皮書正文的共創。</li>
    </ul>
  </div>
  <a class="case-co-create__qr" href="/cases/workbuddy-co-create-wechat.png" target="_blank" rel="noreferrer" aria-label="檢視 WorkBuddy 共創聯絡人微信二維碼大圖">
    <img src="/cases/workbuddy-co-create-wechat.png" alt="劉聰NLP 微信二維碼，新增時備註 workbuddy共創" loading="lazy">
    <span>掃碼新增微信 · 備註“workbuddy共創”</span>
  </a>
</section>

<div class="case-editor-note">
  <strong>從社群案例到藍皮書正文</strong>
  <p>我們會持續觀察案例的可復現性、代表性和讀者反饋。通過二次驗證的經典任務，將在保留原作者署名的前提下進入藍皮書正式章節。</p>
</div>

<style>
.community-cases-page .VPDoc .container {
  max-width: 1280px;
}

.community-cases-page .VPDoc .content {
  max-width: none;
}

.case-intro-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 28px 0 8px;
}

.case-intro-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  border: 1px solid var(--vp-c-text-1);
  border-radius: 4px;
  color: var(--vp-c-text-1) !important;
  font-weight: 700;
  text-decoration: none !important;
}

.case-intro-button--primary {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg) !important;
}

.case-editor-note {
  margin-top: 48px;
  padding: 24px;
  border-left: 5px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.case-editor-note strong {
  font-size: 18px;
}

.case-editor-note p {
  margin: 8px 0 0;
}

.case-co-create {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: stretch;
  margin-top: 48px;
  padding: 34px;
  border: 2px solid var(--vp-c-text-1);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  box-shadow: 10px 10px 0 #d8f238;
}

.case-co-create__label {
  margin: 0 0 12px !important;
  color: var(--vp-c-brand-1);
  font-family: "Silkscreen", monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
}

.case-co-create h2 {
  margin: 0 0 18px;
  border: 0;
  padding: 0;
  font-size: clamp(26px, 4vw, 40px);
  line-height: 1.25;
}

.case-co-create__copy > p:not(.case-co-create__label) {
  color: var(--vp-c-text-2);
  line-height: 1.8;
}

.case-co-create__copy > strong {
  display: inline-block;
  margin: 10px 0 14px;
  padding: 8px 12px;
  background: #d8f238;
  color: #0c0f0a;
}

.case-co-create__copy ul {
  margin: 0;
  padding-left: 20px;
  color: var(--vp-c-text-2);
}

.case-co-create__copy li {
  margin: 6px 0;
}

.case-co-create__qr {
  display: grid;
  gap: 12px;
  width: min(100%, 520px);
  margin: 0 auto;
  padding: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: #fff;
  color: #303030 !important;
  text-align: center;
  text-decoration: none !important;
}

.case-co-create__qr img {
  display: block;
  width: 100%;
  max-height: 460px;
  margin: 0;
  object-fit: contain;
}

.case-co-create__qr span {
  font-size: 13px;
  font-weight: 700;
}

@media (max-width: 720px) {
  .case-co-create {
    padding: 24px;
    box-shadow: 7px 7px 0 #d8f238;
  }
}
</style>
