<script setup lang="ts">
import SideNavBarComponent from '../components/SideNavBarComponent.vue';
import TopBarComponent from '../components/TopBarComponent.vue';

</script>

<template>
  <div class="main-layout">
    <aside class="side-bar">
      <SideNavBarComponent />
    </aside>
    <div class="main-content">
      <div class="top-bar">        
        <TopBarComponent />
      </div>
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  display: flex;
  min-height: 100vh;
  overflow: hidden;

  .side-bar {
    position: fixed;
    height: 100vh;
    width: 12rem;
  }

  .main-content {
    flex: 1;
    margin-left: 12rem;
  
    .top-bar {
      position: fixed;
      width: 100%;
      height: 3rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .content {
      height: 100%;
      background-color: var(--neutral-400);
      margin-top: 3rem;
    }
  }
}
</style>