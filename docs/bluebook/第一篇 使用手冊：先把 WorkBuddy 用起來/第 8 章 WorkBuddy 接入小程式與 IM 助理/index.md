# 第 8 章 WorkBuddy 接入小程式與 IM 助理

## 小程式的兩種模式

![](assets/001_image_Vv5bbtLVBo.png)

| 模式 | 任務在哪裡執行 | 是否依賴電腦線上 | 適合任務 |
|-|-|-|-|
| 本機模式 | 已連線的電腦 | 是 | 本地檔案、本地 Skill、已有工作區 |
| 雲端模式 | 隔離的雲端環境 | 否 | 調研、寫作、臨時分析、並行任務 |

**首次使用**

1. 通過官方入口開啟 WorkBuddy 小程式並登入；
2. 檢視當前處於本機還是雲端模式；
3. 本機模式下確認目標電腦線上且連線正確；



## IM 助理的工作鏈路

```mermaid
sequenceDiagram
    participant U as 手機 IM
    participant B as 應用機器人
    participant W as WorkBuddy 助理
    participant P as 本機工作區
    U->>B: 傳送任務
    B->>W: 回撥或長連線傳遞訊息
    W->>P: 在授權目錄執行
    P-->>W: 產物與狀態
    W-->>B: 返回結果
    B-->>U: 手機檢視與確認
```

## 接入微信助理：掃碼繫結即可

1. 開啟 WorkBuddy，在左側“助理”欄點選齒輪，進入“助理設定”；

![](assets/002_%E5%BE%AE%E4%BF%A1%E5%8A%A9%E7%90%86-%E9%80%B2%E5%85%A5%E5%8A%A9%E7%90%86%E8%A8%AD%E5%AE%9A_NbI2b9v4fo.png)

2. 找到“微信助理整合”，點選“配置”；

![](assets/003_%E5%BE%AE%E4%BF%A1%E5%8A%A9%E7%90%86-%E9%81%B8%E6%93%87%E6%95%B4%E5%90%88_S9HlbaEmdo.png)

3. 等待繫結二維碼生成，用手機微信掃碼；

![](assets/004_%E5%BE%AE%E4%BF%A1%E5%8A%A9%E7%90%86-%E6%8E%83%E7%A2%BC%E7%B9%AB%E7%B5%90_TElmbNPG5o.png)

4. 卡片顯示“已繫結”後，先發送一條只讀測試指令；

![](assets/005_%E5%BE%AE%E4%BF%A1%E5%8A%A9%E7%90%86-%E5%B7%B2%E7%B9%AB%E7%B5%90_ZQtrb6jCmo.png)

5. 需要切換微信賬號時，先解綁當前賬號，再重新掃碼。

二維碼有時效限制。停留在“繫結中”、二維碼過期或掃碼失敗時，關閉配置視窗後重新進入，必要時重啟 WorkBuddy 並重新生成二維碼。

***來源：WorkBuddy 官方指南。***



## 接入飛書

1. WorkBuddy → 設定 → 助理設定 → 選擇飛書；

![](assets/006_image_SbcEbSaoio.png)

2. 在飛書開放平臺建立企業自建應用；

![](assets/007_%E9%A3%9B%E6%9B%B8-%E7%99%BB%E5%85%A5%E9%96%8B%E6%94%BE%E5%B9%B3%E8%87%BA_EUPhblavHo.png)

3. 為應用新增機器人能力；

![](assets/008_%E9%A3%9B%E6%9B%B8-%E6%96%B0%E5%A2%9E%E6%A9%9F%E5%99%A8%E4%BA%BA%E8%83%BD%E5%8A%9B_XFmTb5HGQo.png)

4. 按 WorkBuddy 當前頁面要求開通最小許可權；

![](assets/009_%E9%A3%9B%E6%9B%B8-%E6%89%B9%E6%AC%A1%E5%8C%AF%E5%85%A5%E8%A8%B1%E5%8F%AF%E6%AC%8A_MRdCbm3Dvo.png)

5. 在“憑證與基礎資訊”獲取 App ID 和 App Secret；

![](assets/010_%E9%A3%9B%E6%9B%B8-%E6%87%89%E7%94%A8%E6%86%91%E8%AD%89_CnItbspOUo.png)

6. 將憑證填寫到 WorkBuddy，生成或複製回撥資訊；

![](assets/011_%E9%A3%9B%E6%9B%B8-%E5%8A%A0%E5%AF%86%E8%88%87%E6%A0%A1%E9%A9%97%E9%85%8D%E7%BD%AE_WiAYbwBDKo.png)

7. 在飛書配置事件訂閱與回撥；

![](assets/012_%E9%A3%9B%E6%9B%B8-%E6%96%B0%E5%A2%9E%E6%8E%A5%E6%94%B6%E8%A8%8A%E6%81%AF%E4%BA%8B%E4%BB%B6_X4z6bNPsso.png)

8. 新增接收訊息、卡片互動等當前指南要求的事件；

![](assets/013_%E9%A3%9B%E6%9B%B8-%E5%8D%A1%E7%89%87%E5%9B%9E%E6%92%A5_AvOxbO7M9o.png)

9. 建立版本併發布應用；

![](assets/014_%E9%A3%9B%E6%9B%B8-%E9%87%8B%E5%87%BA%E6%87%89%E7%94%A8_TafwbySxco.png)

10. 在飛書內向機器人傳送只讀測試任務。

***來源：WorkBuddy 官方指南。***

## 接入釘釘

![](assets/015_image_RRhMbPo5uo.png)

1. 建立應用與機器人使用企業管理員賬號登入釘釘開發者後臺；

![](assets/016_%E9%87%98%E9%87%98-%E5%BB%BA%E7%AB%8B%E6%87%89%E7%94%A8_NuNTbdscZo.png)

2. 進入“應用開發”，建立應用；

![](assets/017_%E9%87%98%E9%87%98-%E6%96%B0%E5%A2%9E%E6%A9%9F%E5%99%A8%E4%BA%BA%E8%83%BD%E5%8A%9B_ORRbbZrqgo.png)

3. 為應用新增機器人能力，填寫機器人名稱、描述和頭像並確認釋出；

![](assets/018_%E9%87%98%E9%87%98-%E9%96%8B%E9%80%9A%E8%A8%B1%E5%8F%AF%E6%AC%8A_QG1zbPhcxo.png)

4. 優先在測試組織或測試群完成驗證。

![](assets/019_%E9%87%98%E9%87%98-%E7%8D%B2%E5%8F%96%E6%87%89%E7%94%A8%E6%86%91%E8%AD%89_OI8fbW0JNo.png)

***來源：WorkBuddy 官方指南。***