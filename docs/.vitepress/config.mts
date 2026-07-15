import { defineConfig } from "vitepress";

import { siteSidebar } from "./sidebar";
import { configureMermaidMarkdown } from "./mermaid-markdown";
import { createPageDescription, createSeoHead } from "./seo";

const siteUrl = process.env.VITEPRESS_SITE_URL || "https://workbuddy.homes";

export default defineConfig({
    lang: "zh-TW",
    title: "WorkBuddy 實戰藍皮書",
    titleTemplate: ":title · WorkBuddy 實戰藍皮書",
    description: "從安裝使用到 AI 工作系統：27 章 WorkBuddy 實戰指南與團隊落地方法。",
    cleanUrls: true,
    lastUpdated: true,
    srcExclude: ["**/source.md", "plans/**"],
    sitemap: {
      hostname: siteUrl,
    },
    transformPageData: (pageData, { siteConfig }) => {
      if (pageData.relativePath.startsWith("cases/")) {
        pageData.frontmatter.aside = false;
        pageData.frontmatter.outline = false;
      }

      return {
        description: createPageDescription(siteConfig.srcDir, pageData),
      };
    },
    transformHead: (context) => createSeoHead(siteUrl, context),
    head: [
      ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      ["meta", { name: "theme-color", content: "#d8f238" }],
      ["meta", { name: "author", content: "WorkBuddy Guide Contributors" }],
      [
        "meta",
        {
          name: "baidu-site-verification",
          content: "codeva-RF1ZqL4g90",
        },
      ],
      [
        "meta",
        {
          name: "keywords",
          content:
            "WorkBuddy,WorkBuddy 教程,AI Agent,AI 工作系統,Skills,MCP,自動化,多智慧體,職場 AI",
        },
      ],
    ],
    markdown: {
      config: configureMermaidMarkdown,
      image: {
        lazyLoading: true,
      },
      theme: {
        light: "github-light",
        dark: "github-dark",
      },
    },
    themeConfig: {
      siteTitle: "WorkBuddy Guide",
      nav: [
        { text: "首頁", link: "/" },
        { text: "開始閱讀", link: "/bluebook/" },
        { text: "案例集", link: "/cases/" },
        { text: "幫你解決", link: "/help/" },
        { text: "閱讀指南", link: "/reading-guide" },
        {
          text: "交流群",
          items: [{ component: "GroupQrMenu" }],
        },
      ],
      sidebar: siteSidebar,
      socialLinks: [
        { icon: "github", link: "https://github.com/AlephAITech/WorkBuddyGuide" },
      ],
      search: {
        provider: "local",
      },
      outline: {
        level: [2, 3],
        label: "本頁目錄",
      },
      docFooter: {
        prev: "上一篇",
        next: "下一篇",
      },
      lastUpdated: {
        text: "最後更新",
        formatOptions: {
          dateStyle: "medium",
          timeStyle: "short",
        },
      },
      editLink: {
        pattern: "https://github.com/AlephAITech/WorkBuddyGuide/edit/main/docs/:path",
        text: "在 GitHub 上改進此頁",
      },
      footer: {
        message:
          '以真實任務為主線的 WorkBuddy 社群實戰讀本 · Pixel icons by <a href="https://pixeliconlibrary.com/" target="_blank" rel="noreferrer">HackerNoon</a>',
        copyright: "Copyright © 2026 WorkBuddy Guide Contributors",
      },
    },
  });
