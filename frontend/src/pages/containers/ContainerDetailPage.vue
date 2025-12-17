<template>
  <div class="page"> 
    <div class="action-container">
      <div class="header">
        <img src="/icons/settings.svg" alt="settings" class="img">
        <p class="title">Actions</p>
      </div>
      <div class="action-buttons">
        <CustomButton 
          icon="up"
          label="Start"
        />

        <CustomButton 
          icon="down"
          label="Stop"
        />

        <CustomButton 
          icon="restart"
          label="Restart"
        />
      </div>
    </div>

    <div class="status-container">
      <div class="header">
        <img src="/icons/deployed_code.svg" alt="box icon" class="img">
        <p class="title">Container status</p>
      </div>
      <div class="rows">
        <div class="row">
          <p class="label-name">ID</p>
          <p class="label-value">{{ container.id }}</p>
        </div>
        <div class="row">
          <p class="label-name">Name</p>
          <p class="label-value">{{ container.name }}</p>
        </div>
        <div class="row">
          <p class="label-name">Status</p>
          <p class="label-value">{{ container.status }}</p>
        </div>
        <div class="row">
          <p class="label-name">Created</p>
          <p class="label-value">{{ container.created }}</p>
        </div>
        <div class="row">
          <p class="label-name">Start Time</p>
          <p class="label-value">{{ container.startTime }}</p>
        </div>

      </div>
    </div>

    <div class="log-container">
      <div class="header">
        <img src="/icons/log.svg" alt="log icon" class="img">
        <p class="title">Logs</p>
      </div>
      <div class="log-content">

      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.page {
  // minus navbar height
  height: calc(100% - 3rem);
  padding: 1rem;
  
  .action-container {
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: 0.75rem;

    .action-buttons {
      display: flex;
      gap: 0.75rem
    }
  }

  .status-container {
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-top: 1rem;

    .rows {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .row {
        display: flex;
        .label-name {
          width: 25%;
          font-weight: bold;
        }
      }
    }
  }

  .log-container {
    height: calc(100% - 25rem);
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-top: 1rem;
    
    .log-content {
      height: calc(100% - 3rem);
      background-color: var(--primary-900);
      border-radius: 1rem;
    }
  }

}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from '../../components/button/CustomButtonStroke.vue';

const container = ref({
  id: '93d74cc88b215af5e460332e8dfe45396484bb0ae86e564d4146cd6b6ec7202e',
  name: 'Crafty-container',
  status: 'Running for 2 hours',
  created: '2025-10-12 03:33:07',
  startTime: '2025-10-24 17:56:36'

})
</script>