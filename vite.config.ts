import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import commonJs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true
  //   }
  // },
  // optimizeDeps: {
  //   include: ['linked-dep']
  // },
})
