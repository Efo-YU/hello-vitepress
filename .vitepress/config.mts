import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hello Vitepress",
  description: "Vitepress is doukana",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Exapples",
        items: [{ text: "KIJI", link: "/blogs/kiji" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/hello-vitepress/",
});
