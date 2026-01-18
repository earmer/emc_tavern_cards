<template>
  <div class="status-bar">
    <div class="status-left">
      <span class="time">{{ currentTime }}</span>
    </div>
    <div class="status-right">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-three-quarters"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref('9:41');

// Update time every minute
let timeInterval: number | undefined;

onMounted(() => {
  updateTime();
  timeInterval = window.setInterval(updateTime, 60000);
});

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
});

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  currentTime.value = `${hours}:${minutes}`;
}
</script>

<style lang="scss" scoped>
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  padding-top: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #1f2937;
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  z-index: 40;
}

.status-left {
  flex: 1;
}

.status-right {
  display: flex;
  gap: 8px;
  align-items: center;

  i {
    font-size: 12px;
  }
}
</style>
