# 首頁圖示改為內聯 SVG

## 背景

首頁原先通過一份 25.8 KB 的畫素圖示字型顯示 16 種圖示。字型使用
`font-display: optional`，在首次訪問、慢網或微信內建瀏覽器中可能跳過本次
字型替換。由於圖示是私有區字元，沒有系統字型可回退，頁面會只顯示空白
卡片。

## 決策

保留 HackerNoon Pixel Icon Library 的原始 24×24 路徑和現有視覺樣式，改為
服務端渲染的內聯 SVG Sprite：

- `PixelIconSprite.vue` 在首頁 HTML 中宣告 16 個 `<symbol>`。
- `PixelIcon.vue` 使用 `<use>` 複用對應圖示，並繼承 `currentColor`。
- 原有卡片尺寸、旋轉、顏色和響應式佈局保持不變。
- 刪除圖示字型樣式、字型請求和 npm 依賴。

這樣圖示隨 HTML 到達，不依賴字型下載、JavaScript 執行或客戶端快取。

## 驗收

- 正常載入與停用網頁字型時，首頁所有圖示均可見。
- 構建產物和網路請求中不包含 `iconfont.woff2`。
- 移動端 Lighthouse 連續三次不低於 90，CLS 為 0。
- Accessibility、Best Practices 和 SEO 不發生回退。
