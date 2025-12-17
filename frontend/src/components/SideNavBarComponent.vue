<template>
  <div class="container">
    <h1 class="title">Menu</h1>
    <ul class="items">
      <li 
        v-for="tab in tabs" 
        :key="tab.name"
        @click="router.push(`${tab.route}`)"
        class="item"
      >
        <img :src="`/icons/${tab.icon}.svg`" :alt='`${tab.icon}`' class="icon">
        {{ tab.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAppStore } from '../store/appStore';
import router from '../router';

const appStore = useAppStore();

const { tabs } = storeToRefs(appStore)
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  background-color: var(--primary-600);
  color: #FFFFFF;

  .title {
    padding: 1rem 1.5rem 1rem 1.5rem;
  }
  
  .items {
    margin-top: 1rem;
    list-style-type: none;

    .item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 1.5rem 0.5rem 1.5rem;
      .icon {
        width: 2.5rem;
      }

      &:hover {
        background-color: var(--primary-400);
      }
    }
  }
}
</style>