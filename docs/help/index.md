---
title: 幫你解決 WorkBuddy 使用場景問題
titleTemplate: false
description: 如果你不知道如何用 WorkBuddy 解決真實工作問題，可以提交場景問卷。我們會評估需求、聯絡溝通，並將具有複用價值的解決方案製作成開源 Case。
breadcrumbTitle: 幫你解決
aside: false
outline: false
pageClass: help-you-page
---

<div class="help-hero">
  <div class="help-hero__copy">
    <p class="help-pixel-label">SCENARIO SUPPORT · OPEN CASES</p>
    <h1>有工作場景，不知道怎麼用 WorkBuddy 解決？</h1>
    <p class="help-hero__lead">把你的真實問題告訴我們。我們會閱讀每一份場景問卷，評估 WorkBuddy 是否能夠解決；如果需要補充資訊，我們會聯絡你進一步溝通。</p>
    <p>具有代表性和複用價值的問題，我們會嘗試做成完整 Case，寫清使用的 Skill、操作過程、任務描述和最終效果，並開源到社群案例集，幫助更多遇到同類問題的人。</p>
    <div class="help-hero__actions">
      <a class="help-button help-button--primary" href="#scenario-survey">掃碼填寫問卷</a>
      <a class="help-button" href="/cases/">檢視開源 Case</a>
    </div>
  </div>

  <div id="scenario-survey" class="help-survey-card">
    <div class="help-survey-card__heading">
      <span>01</span>
      <div>
        <strong>WorkBuddy 場景收集調查問卷</strong>
        <small>掃碼後填寫你的真實需求</small>
      </div>
    </div>
    <a href="/help/workbuddy-scenario-survey.png" target="_blank" rel="noreferrer" aria-label="檢視 WorkBuddy 場景收集調查問卷二維碼大圖">
      <img src="/help/workbuddy-scenario-survey.png" alt="WorkBuddy 場景收集調查問卷二維碼" loading="eager">
    </a>
    <p>使用手機掃碼填寫；如果你正在手機上閱讀，可以點選圖片檢視大圖後長按識別。</p>
  </div>
</div>

<section class="help-process" aria-labelledby="help-process-title">
  <p class="help-pixel-label">HOW IT WORKS</p>
  <h2 id="help-process-title">提交之後，我們會怎麼做</h2>
  <div class="help-process__grid">
    <article>
      <span>01</span>
      <h3>理解你的場景</h3>
      <p>瞭解你現在怎樣工作、卡在哪裡、已有輸入以及希望得到什麼結果。</p>
    </article>
    <article>
      <span>02</span>
      <h3>評估解決路徑</h3>
      <p>判斷 WorkBuddy 是否適合處理，並梳理可能需要的 Skill、許可權和交付方式。</p>
    </article>
    <article>
      <span>03</span>
      <h3>聯絡與驗證</h3>
      <p>如果場景需要更多資訊，我們會通過問卷中留下的聯絡方式與你確認，並驗證方案。</p>
    </article>
    <article>
      <span>04</span>
      <h3>製作開源 Case</h3>
      <p>具有通用價值的解決方案會被整理成可復現 Case，稽核後公開到社群案例集。</p>
    </article>
  </div>
</section>

<section class="help-submit-guide" aria-labelledby="help-submit-title">
  <div>
    <p class="help-pixel-label">WHAT TO PREPARE</p>
    <h2 id="help-submit-title">怎樣描述問題，更容易得到幫助</h2>
  </div>
  <ul>
    <li><strong>真實場景：</strong>你在什麼崗位或任務中遇到了問題。</li>
    <li><strong>當前做法：</strong>現在需要哪些步驟，大概花多少時間。</li>
    <li><strong>輸入資料：</strong>通常會用到哪些檔案、網頁、系統或資料。</li>
    <li><strong>期望結果：</strong>希望 WorkBuddy 最終交付什麼，以及怎樣算完成。</li>
    <li><strong>安全邊界：</strong>是否涉及賬號許可權、敏感資料、檔案修改或對外發布。</li>
  </ul>
</section>

<div class="help-note">
  <strong>關於隱私與聯絡</strong>
  <p>請不要在問卷中提交密碼、金鑰、客戶隱私或不方便公開的內部資料。我們只會在需要補充資訊或可以推進解決方案時，通過你主動留下的聯絡方式與你溝通。</p>
</div>

<style>
.help-you-page .VPDoc .container {
  max-width: 1280px;
}

.help-you-page .VPDoc .content,
.help-you-page .VPDoc .content-container {
  max-width: none;
}

.help-hero {
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 34px 0 56px;
}

.help-hero__copy {
  width: 100%;
}

.help-pixel-label {
  margin: 0 0 14px !important;
  color: var(--vp-c-brand-1);
  font-family: "Silkscreen", monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
}

.help-hero h1 {
  max-width: 760px;
  margin: 0 0 28px;
  font-size: clamp(42px, 6vw, 72px);
  line-height: 1.08;
  letter-spacing: -0.04em;
  overflow-wrap: normal;
  word-break: keep-all;
}

.help-hero h1::after {
  display: block;
  width: 92px;
  height: 9px;
  margin-top: 24px;
  background: #d8f238;
  content: "";
}

.help-hero__copy > p:not(.help-pixel-label) {
  max-width: 720px;
  color: var(--vp-c-text-2);
  font-size: 17px;
  line-height: 1.85;
}

.help-hero__lead {
  color: var(--vp-c-text-1) !important;
  font-size: 20px !important;
  font-weight: 700;
}

.help-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.help-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid var(--vp-c-text-1);
  border-radius: 4px;
  color: var(--vp-c-text-1) !important;
  font-weight: 700;
  text-decoration: none !important;
}

.help-button--primary {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg) !important;
}

.help-survey-card {
  width: min(100%, 560px);
  margin: 0 auto;
  padding: 20px;
  border: 2px solid var(--vp-c-text-1);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  box-shadow: 12px 12px 0 #d8f238;
}

.help-survey-card__heading {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.help-survey-card__heading > span {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  flex: 0 0 auto;
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  font-family: "Silkscreen", monospace;
}

.help-survey-card__heading div {
  display: grid;
  gap: 2px;
}

.help-survey-card__heading strong {
  font-size: 16px;
}

.help-survey-card__heading small,
.help-survey-card > p {
  color: var(--vp-c-text-3);
}

.help-survey-card a {
  display: block;
  overflow: hidden;
  border-radius: 10px;
  background: #eef8ff;
}

.help-survey-card img {
  display: block;
  width: 100%;
  max-height: 560px;
  margin: 0;
  object-fit: contain;
}

.help-survey-card > p {
  margin: 14px 2px 0;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
}

.help-process {
  padding: 52px 0;
  border-top: 2px solid var(--vp-c-text-1);
}

.help-process h2,
.help-submit-guide h2 {
  margin: 0 0 30px;
  border: 0;
  padding: 0;
  font-size: clamp(28px, 4vw, 42px);
}

.help-process__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.help-process article {
  min-height: 220px;
  padding: 22px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}

.help-process article > span {
  color: var(--vp-c-brand-1);
  font-family: "Silkscreen", monospace;
  font-size: 13px;
}

.help-process h3 {
  margin: 44px 0 10px;
  font-size: 19px;
}

.help-process article p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}

.help-submit-guide {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 52px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.help-submit-guide > div {
  width: 100%;
}

.help-submit-guide h2 {
  max-width: 760px;
}

.help-submit-guide ul {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.help-submit-guide li {
  padding: 14px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.help-submit-guide li strong {
  color: var(--vp-c-text-1);
}

.help-note {
  margin: 12px 0 36px;
  padding: 24px;
  border-left: 5px solid #d8f238;
  background: var(--vp-c-bg-soft);
}

.help-note p {
  margin: 7px 0 0;
  color: var(--vp-c-text-2);
}

@media (max-width: 900px) {
  .help-process__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .help-hero {
    gap: 36px;
    padding-top: 18px;
  }

  .help-hero h1 {
    font-size: 40px;
  }

  .help-hero__lead {
    font-size: 18px !important;
  }

  .help-process__grid {
    grid-template-columns: 1fr;
  }

  .help-process article {
    min-height: 190px;
  }

  .help-submit-guide {
    gap: 12px;
  }

  .help-survey-card {
    box-shadow: 7px 7px 0 #d8f238;
  }
}
</style>
