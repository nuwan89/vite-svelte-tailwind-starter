<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<div class="counter bg-primary">
  <button on:click={increment} class="is-primary button">
    count is x {count}
  </button>

  Button wrapped
</div>

<style lang="scss">
  .counter{
    height: 200px;
  }
</style>