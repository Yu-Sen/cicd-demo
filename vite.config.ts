/*
 * @Author: 黄昱森
 * @LastEditors: 黄昱森
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
});
