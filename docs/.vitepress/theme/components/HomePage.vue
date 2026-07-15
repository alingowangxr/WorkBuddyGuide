<script setup lang="ts">
import PixelIcon from "./PixelIcon.vue";
import PixelIconSprite from "./PixelIconSprite.vue";
</script>

<template>
  <main class="wb-home">
    <PixelIconSprite />
    <section class="wb-hero" aria-labelledby="wb-hero-title">
      <div class="wb-hero__stage">
        <div class="wb-hero__copy">
          <p class="wb-pixel-label">OPEN-SOURCE · 27 CHAPTERS · 2026</p>
          <h1 id="wb-hero-title" class="wb-hero__title--bluebook">WorkBuddy藍皮書</h1>
          <p class="wb-hero__summary">
            WorkBuddy能幹嘛？一套以真實工作為主線的WorkBuddy實踐路徑。帶你從0到1先用起來，再從1到100把每次成功沉澱為可複用的工作系統，真正把AI變成生產力！
          </p>
          <div class="wb-hero__actions">
            <a class="wb-button wb-button--primary" href="/bluebook/">
              <span>開始閱讀</span>
              <PixelIcon name="arrow-right" />
            </a>
            <a class="wb-button wb-button--outline" href="/reading-guide">檢視閱讀路線</a>
          </div>
        </div>

        <div class="wb-hero__art" aria-label="WorkBuddy 畫素圖示組合">
          <span class="wb-hero__monogram">WB_</span>
          <span class="wb-icon-card wb-icon-card--buddy">
            <PixelIcon name="face-grin" />
          </span>
          <span class="wb-icon-card wb-icon-card--book">
            <PixelIcon name="book" />
          </span>
          <span class="wb-icon-card wb-icon-card--flow">
            <PixelIcon name="sitemap" />
          </span>
          <span class="wb-icon-card wb-icon-card--work">
            <PixelIcon name="briefcase" />
          </span>
          <div class="wb-hero__metrics" aria-label="藍皮書內容規模">
            <span><b>27</b> CHAPTERS</span>
            <span><b>4</b> PARTS</span>
            <span><b>∞</b> WORKFLOWS</span>
          </div>
        </div>
      </div>

      <div class="wb-value-strip" aria-label="藍皮書價值">
        <div class="wb-value-strip__item">
          <PixelIcon name="check-box" />
          <span><b>真實任務</b><small>REAL TASKS</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="refresh" />
          <span><b>可復現</b><small>REPRODUCIBLE</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="handshake" />
          <span><b>社群共創</b><small>OPEN SOURCE</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="grid" />
          <span><b>系統沉澱</b><small>WORK SYSTEM</small></span>
        </div>
      </div>
    </section>

    <section class="wb-section wb-reading" aria-labelledby="wb-reading-title">
      <div class="wb-section__heading">
        <div>
          <p class="wb-pixel-label">READING PATH / 01—04</p>
          <h2 id="wb-reading-title">四段路徑，按你的目標進入</h2>
        </div>
        <p>從個人上手到組織落地，循序漸進，構建你的 WorkBuddy 工作系統。</p>
      </div>

      <div class="wb-reading-grid">
        <a class="wb-reading-card" href="/bluebook/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8A%EF%BC%9A%E5%85%88%E6%8A%8A%20WorkBuddy%20%E7%94%A8%E8%B5%B7%E4%BE%86/">
          <span class="wb-reading-card__icon"><PixelIcon name="user" /></span>
          <span class="wb-reading-card__content">
            <small>PART 01 · CH. 01—10</small>
            <strong>從 0 到 1：先把 WorkBuddy 用起來</strong>
            <span>安裝、介面、第一個任務、Skill、聯結器、API 與自動化。</span>
            <em><b>新手推薦</b><b>先完成一項任務</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E5%BE%9E%E4%B8%80%E9%A0%85%E4%BB%BB%E5%8B%99%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9C%98%E9%9A%8A/">
          <span class="wb-reading-card__icon"><PixelIcon name="briefcase" /></span>
          <span class="wb-reading-card__content">
            <small>PART 02 · CH. 11—21</small>
            <strong>進入真實案例：讓任務開始流動</strong>
            <span>辦公、檔案、遠端、資訊、知識、會議、投資和內容增長。</span>
            <em><b>11 個案例</b><b>任務驅動</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="/bluebook/%E7%AC%AC%E4%B8%89%E7%AF%87%20%E9%80%B2%E9%9A%8E%E7%AF%87%EF%BC%9A%E6%8A%8A%E6%A1%88%E4%BE%8B%E8%AE%8A%E6%88%90%E8%87%AA%E5%B7%B1%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%B3%BB%E7%B5%B1/">
          <span class="wb-reading-card__icon"><PixelIcon name="sitemap" /></span>
          <span class="wb-reading-card__content">
            <small>PART 03 · CH. 22—25</small>
            <strong>把案例變成可複用的工作系統</strong>
            <span>打造 Skill、多 Agent 系統設計與可靠的自動化工作流。</span>
            <em><b>系統進階</b><b>可靠自動化</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="/bluebook/%E7%AC%AC%E5%9B%9B%E7%AF%87%20%E5%B4%97%E4%BD%8D%E8%88%87%E8%A1%8C%E6%A5%AD%E8%90%BD%E5%9C%B0/">
          <span class="wb-reading-card__icon"><PixelIcon name="users" /></span>
          <span class="wb-reading-card__content">
            <small>PART 04 · CH. 26—27</small>
            <strong>落到崗位與行業，組建 AI 團隊</strong>
            <span>從通用能力出發，設計適合不同崗位和行業的工作流。</span>
            <em><b>團隊落地</b><b>行業路線</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>
      </div>
    </section>

    <section class="wb-section wb-task-index" aria-labelledby="wb-task-index-title">
      <div class="wb-section__heading wb-section__heading--compact">
        <div>
          <p class="wb-pixel-label">START WITH A REAL TASK</p>
          <h2 id="wb-task-index-title">你現在想讓 AI 幫你做什麼？</h2>
        </div>
        <p>不必從頭讀。帶著問題進來，先跑通一個能驗收的結果。</p>
      </div>

      <div class="wb-task-grid">
        <a href="/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E5%BE%9E%E4%B8%80%E9%A0%85%E4%BB%BB%E5%8B%99%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9C%98%E9%9A%8A/%E7%AC%AC%2011%20%E7%AB%A0%20%E8%BE%A6%E5%85%AC%E4%B8%89%E4%BB%B6%E5%A5%97%EF%BC%9AWord%E3%80%81Excel%E3%80%81PPT/">
          <PixelIcon name="briefcase" /><strong>辦公文件</strong><span>Word · Excel · PPT</span>
        </a>
        <a href="/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E5%BE%9E%E4%B8%80%E9%A0%85%E4%BB%BB%E5%8B%99%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9C%98%E9%9A%8A/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%BE%9E%E6%95%B4%E7%90%86%E6%A1%8C%E9%9D%A2%E6%AA%94%E6%A1%88%E9%80%99%E4%BA%9B%E5%B0%8F%E4%BA%8B%E5%81%9A%E8%B5%B7/">
          <PixelIcon name="folder-open" /><strong>檔案與遠端</strong><span>整理 · 查詢 · 執行</span>
        </a>
        <a href="/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E5%BE%9E%E4%B8%80%E9%A0%85%E4%BB%BB%E5%8B%99%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9C%98%E9%9A%8A/%E7%AC%AC%2015%20%E7%AB%A0%20%E8%B3%87%E8%A8%8A%E6%95%B4%E5%90%88%EF%BC%9A%E6%8A%8A%E8%B3%87%E8%A8%8A%E6%B5%81%E8%AE%8A%E6%88%90%E6%AF%8F%E6%97%A5%E9%80%9A%E7%9F%A5/">
          <PixelIcon name="newspaper" /><strong>資訊與知識</strong><span>收集 · 篩選 · 複用</span>
        </a>
        <a href="/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E5%BE%9E%E4%B8%80%E9%A0%85%E4%BB%BB%E5%8B%99%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9C%98%E9%9A%8A/%E7%AC%AC%2018%20%E7%AB%A0%20%E6%8A%8A%E6%8A%95%E8%B3%87%E5%88%86%E6%9E%90%E8%AE%8A%E6%88%90%E4%BD%A0%E7%9A%84%E6%97%A5%E5%B8%B8/">
          <PixelIcon name="chart-line" /><strong>專業分析</strong><span>投資 · 研究 · 診斷</span>
        </a>
        <a href="/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E5%BE%9E%E4%B8%80%E9%A0%85%E4%BB%BB%E5%8B%99%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9C%98%E9%9A%8A/%E7%AC%AC%2019%20%E7%AB%A0%20%E4%B8%80%E5%8F%A5%E8%A9%B1%E5%8F%AC%E5%96%9A%20AI%20%E5%BD%B1%E7%89%87%E5%9C%98%E9%9A%8A/">
          <PixelIcon name="video-camera" /><strong>內容生產</strong><span>影片 · 自媒體 · GEO</span>
        </a>
        <a href="/bluebook/%E7%AC%AC%E4%B8%89%E7%AF%87%20%E9%80%B2%E9%9A%8E%E7%AF%87%EF%BC%9A%E6%8A%8A%E6%A1%88%E4%BE%8B%E8%AE%8A%E6%88%90%E8%87%AA%E5%B7%B1%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%B3%BB%E7%B5%B1/%E7%AC%AC%2024%20%E7%AB%A0%20%E5%A6%82%E4%BD%95%E9%80%B2%E8%A1%8C%E5%A4%9A%20Agent%20%E7%B3%BB%E7%B5%B1%E8%A8%AD%E8%A8%88/">
          <PixelIcon name="robot" /><strong>AI 工作系統</strong><span>Skill · Agent · 自動化</span>
        </a>
      </div>
    </section>

    <section class="wb-section wb-system" aria-labelledby="wb-system-title">
      <div class="wb-system__intro">
        <p class="wb-pixel-label">FROM TASK TO TEAM</p>
        <h2 id="wb-system-title">一次成功，不該只發生一次。</h2>
        <p>藍皮書真正關心的不是“AI 會什麼”，而是如何把一個結果沉澱成穩定、可協作、可複用的工作系統。</p>
      </div>
      <ol class="wb-system__steps">
        <li><b>01</b><strong>TASK</strong><span>完成一個真實任務</span></li>
        <li><b>02</b><strong>CASE</strong><span>覆盤成可復現案例</span></li>
        <li><b>03</b><strong>WORKFLOW</strong><span>沉澱 Skill 與自動化</span></li>
        <li><b>04</b><strong>AI TEAM</strong><span>組合成協作團隊</span></li>
      </ol>
    </section>

    <section class="wb-community" aria-labelledby="wb-community-title">
      <div>
        <p class="wb-pixel-label">BUILD IN PUBLIC · LEARN IN PUBLIC</p>
        <h2 id="wb-community-title">這本藍皮書，也可以由你繼續寫下去。</h2>
      </div>
      <div class="wb-community__actions">
        <a class="wb-button wb-button--acid" href="/community/contributing">參與共創</a>
        <a class="wb-button wb-button--dark-outline" href="https://github.com/AlephAITech/WorkBuddyGuide">前往 GitHub</a>
      </div>
      <PixelIcon name="book" class="wb-community__icon" />
    </section>
  </main>
</template>
