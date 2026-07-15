import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

import type { DefaultTheme } from "vitepress";

const route = (...segments: string[]): string =>
  encodeURI(`/bluebook/${segments.map((segment) => segment.trim()).join("/")}/`);

const part1 = "第一篇 使用手冊：先把 WorkBuddy 用起來";
const part2 = "第二篇 案例篇：從一項任務到一支 AI 團隊";
const part3 = "第三篇 進階篇：把案例變成自己的工作系統";
const part4 = "第四篇 崗位與行業落地";
const appendix = "附錄";

const item = (directory: string, text = directory): DefaultTheme.SidebarItem => ({
  text,
  link: route(directory),
});

const child = (
  parent: string,
  directory: string,
  text = directory,
): DefaultTheme.SidebarItem => ({
  text,
  link: route(parent, directory),
});

export const bluebookSidebar: DefaultTheme.Sidebar = {
  "/bluebook/": [
    { text: "藍皮書總覽", link: "/bluebook/" },
    {
      text: "第一篇 · 使用手冊",
      collapsed: false,
      items: [
        item(part1, "本篇導讀"),
        child(part1, "第 1 章 初識 WorkBuddy"),
        child(part1, "第 2 章 WorkBuddy的下載、安裝、登入與更新"),
        child(part1, "第 3 章 WorkBuddy 的主介面、任務與工作區"),
        child(part1, "第 4 章 快速完成第一個 WorkBuddy 任務"),
        child(part1, "第 5 章 WorkBuddy載入一個真正用得上的 Skill"),
        child(part1, "第 6 章 WorkBuddy的專家和專家團"),
        child(part1, "第 7 章 WorkBuddy 使用聯結器"),
        child(part1, "第 8 章 WorkBuddy 接入小程式與 IM 助理"),
        child(part1, "第 9 章 如何接入外部 API"),
        child(part1, "第 10 章 WorkBuddy 自動化任務"),
        child(part1, "課外閱讀：一章看懂 AI 工作系統"),
      ],
    },
    {
      text: "第二篇 · 實戰案例",
      collapsed: false,
      items: [
        item(part2, "本篇導讀"),
        child(part2, "第 11 章 辦公三件套：Word、Excel、PPT"),
        child(part2, "第 12 章 從整理桌面檔案這些小事做起"),
        child(part2, "第 13 章 遠端控制你的電腦，不用發愁不在電腦前"),
        child(part2, "第 14 章 生活助手的價值，是減少瑣碎"),
        child(part2, "第 15 章 資訊整合：把資訊流變成每日通知"),
        child(part2, "第 16 章 收藏不是知識管理，能再次用起來才是"),
        child(part2, "第 17 章 會議結束不是終點，工作才剛剛開始"),
        child(part2, "第 18 章 把投資分析變成你的日常"),
        child(part2, "第 19 章 一句話召喚 AI 影片團隊"),
        child(part2, "第 20 章 自媒體不只是靠努力，而是一條增長閉環"),
        child(part2, "第 21 章 WorkBuddy也能做GEO專家"),
      ],
    },
    {
      text: "第三篇 · 進階系統",
      collapsed: false,
      items: [
        item(part3, "本篇導讀"),
        child(part3, "第 22 章 打造skill：將書和影片蒸餾為可執行 Skill"),
        child(part3, "第 23 章 其他用法補充：WorkBuddy 實操案例集"),
        child(part3, "第 24 章 如何進行多 Agent 系統設計"),
        child(part3, "第 25 章 自動化工作流的可靠性"),
      ],
    },
    {
      text: "第四篇 · 崗位與行業",
      collapsed: false,
      items: [
        item(part4, "本篇導讀"),
        child(part4, "第 26 章 崗位路線圖：不同崗位如何把 WorkBuddy 用深"),
        child(part4, "第 27 章 行業路線圖：從通用能力到行業工作流"),
      ],
    },
    {
      text: "附錄",
      collapsed: false,
      items: [
        item(appendix, "附錄導讀"),
        child(appendix, "附錄 A 常用指令模板"),
        child(appendix, "附錄 B 場景速查表"),
      ],
    },
  ],
};

const casesDirectory = fileURLToPath(
  new URL("../cases/submissions/", import.meta.url),
);

const caseItems = readdirSync(casesDirectory, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const markdown = readFileSync(
      new URL(`../cases/submissions/${entry.name}/index.md`, import.meta.url),
      "utf8",
    );
    const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || "";
    const readField = (field: string): string =>
      frontmatter
        .match(new RegExp(`^${field}:\\s*(.+)$`, "m"))?.[1]
        ?.trim()
        .replace(/^['"]|['"]$/g, "") || "";

    return {
      date: readField("date"),
      item: {
        text: readField("title") || entry.name,
        link: encodeURI(`/cases/submissions/${entry.name}/`),
      } satisfies DefaultTheme.SidebarItem,
    };
  })
  .sort((left, right) => right.date.localeCompare(left.date))
  .map(({ item: caseItem }) => caseItem);

const casesSidebar: DefaultTheme.SidebarItem[] = [
  { text: "案例集首頁", link: "/cases/" },
  { text: "如何提交 Case", link: "/community/case-contributing" },
  {
    text: "社群 Case",
    collapsed: false,
    items: caseItems,
  },
];

export const siteSidebar: DefaultTheme.Sidebar = {
  ...bluebookSidebar,
  "/cases/": casesSidebar,
  "/community/case-contributing": casesSidebar,
};
