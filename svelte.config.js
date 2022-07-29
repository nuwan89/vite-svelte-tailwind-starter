import sveltePreprocess from "svelte-preprocess";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    defaults: {
      style: "scss",
    },
    postcss: true
  }),
  onwarn: (warning, handler) => {
    const { code, frame } = warning;
    if (code === "css-unused-selector") return;
    handler(warning);
  },
};
