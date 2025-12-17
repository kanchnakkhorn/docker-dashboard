<template>
  <div class="container">
    <div class="wrapper">
      <img src="/icons/immich.svg" alt="">
      <h2>{{ props.name }}</h2>
    </div>

    <div 
      class="state-tag" 
      :class="props.state === 'running' ? 'active' : props.state === 'stopped' ? 'inactive' : 'processing'">
      <span class="state" >{{ props.state.charAt(0).toUpperCase() + props.state.slice(1) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string | undefined,
  state: string,
}>()

</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;

  border-radius: 1.5rem;
  background-color: var(--neutral-100);
  padding: 1.25rem;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    img {
      width: 6.25rem;
      height: 6.25rem;
    }

    h2 {
      font-size: 1.25rem;
    }
  }

  .state-tag {
    height: fit-content;
    text-align: center;
    border-radius: 1rem;
    padding: 0.25rem 0.75rem;

    .state {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }

  .active { background-color: var(--green); }
  .inactive { background-color: var(--red); }
  .processing { background-color: var(--orange);}
}
</style>