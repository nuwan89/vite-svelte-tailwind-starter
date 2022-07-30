<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import { onMount } from "svelte";
  // import './app.css'

  let isDark;
  let mainMount

  onMount(() => {
    // applyTheme(DEFAULT_THEME)
  });

  const changeTheme = () => {
    console.log("Change theme..");
    isDark = !isDark;
    // mainMount.style.setProperty('--primary-bg', 'red') //Dynamically set each var
  };
</script>

<style lang="scss">

:global(.theme-light) {
  --text: theme(colors.gray.900);
  --bg-color: theme(colors.white);
  --primary: theme(colors.red.900);
  --primary-light: theme(colors.red.100);
  --primary-bg: #ebece9;
  --text-color: #2c2d28;
}

:global(.theme-dark) {
  --text: theme(colors.gray.100);
  --primary: #40413a;
  --primary-light: #52534b;
  --primary-bg: rgb(33, 37, 43);
  // --text-color: #ebece9;
  --text-color: #cccccc;
}

  .card {
    // background-color: var(--primary-color);
  }

  .super-parent {
    // background-color: var(--bg-color);
  }
</style>

<!-- <main class="super-parent bg-blue-50 h-screen dark:bg-blue-900"> -->
<main bind:this={mainMount}
  class="super-parent theme-light h-screen bg-primary-bg text-text-color"
  class:theme-dark={isDark}>
  <h1 class="text-5xl text-accent font-bold underline">FIX Tester</h1>

  <p class="text-5xl">Form</p>

  <button class="" on:click={changeTheme}>Change Theme</button>

  <div
    class="card bg-slate-500 shadow-md shadow-slate-700 rounded-lg drop-shadow-lg">
  </div>
  <Counter />
</main>
