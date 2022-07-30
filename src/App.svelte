<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import { onMount } from "svelte";
import Form from "./pages/Form.svelte";
  // import './app.css'

  let isDark;
  let mainMount

  $: title = isDark ? "Dark Mode" : "Light Mode";

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
  // --text: theme(colors.gray.900);
  --bg-color: theme(colors.white);
  --primary: #000000;
  --primary-light: #ffffff;
  --primary-bg: #ffffff;
  --primary-btn: var(--primary);
  --primary-btn-txt: var(--primary-bg);
  --text-color: #2c2d28;
}

:global(.theme-dark) {
  // --text: theme(colors.gray.100);
  --primary: #40413a;
  --primary-light: #52534b;
  --primary-bg: rgb(33, 37, 43);
  --primary-btn: var(--primary-light);
  --primary-btn-txt: var(--text-color);
  // --text-color: #ebece9;
  --text-color: #cccccc;
}

  .card {
    // background-color: var(--primary-color);
  }

  .super-parent {
    // background-color: var(--bg-color);
  }

  button { 
        width: 10rem;
        background-color: var(--primary-btn);
        color: var(--primary-btn-txt);
        // margin-left: 0.6em;
        // margin-top: 0.3em;
    }
</style>

<!-- <main class="super-parent bg-blue-50 h-screen dark:bg-blue-900"> -->
<main bind:this={mainMount}
  class="super-parent theme-light h-screen bg-primary-bg text-text-color"
  class:theme-dark={isDark}>
  <h1 class="text-5xl text-accent font-bold underline">{title}</h1>

  <p class="text-3xl m-4">Form</p>

  
  <Form />
  <button class="m-2" on:click={changeTheme}>Change Theme</button>

  <div
    class="card bg-slate-500 shadow-md shadow-slate-700 rounded-lg drop-shadow-lg">
  </div>
  <!-- <Counter /> -->
</main>
