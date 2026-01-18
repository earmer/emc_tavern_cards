<template>
  <div class="bento-container">
    <!-- 环境信息 - 横跨整行 -->
    <div class="bento-item span-full section">
      <EnvironmentSection />
    </div>

    <!-- 动态状态 - 左侧小卡片 -->
    <div class="bento-item section">
      <StatusSection />
    </div>

    <!-- 基础属性 - 占据右侧区域 -->
    <div class="bento-item span-2-cols section">
      <StatsPanel />
    </div>

    <!-- 物品栏 - 左侧横跨 -->
    <div class="bento-item span-2-cols section">
      <ItemsPanel />
    </div>

    <!-- 小记系统 - 右侧卡片 -->
    <div class="bento-item section">
      <HistorySection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import EnvironmentSection from './components/EnvironmentSection.vue';
import HistorySection from './components/HistorySection.vue';
import ItemsPanel from './components/ItemsPanel.vue';
import StatsPanel from './components/StatsPanel.vue';
import StatusSection from './components/StatusSection.vue';

onMounted(() => {
  // 快速优雅的入场动画（每个楼层都会播放）
  gsap.from('.section', {
    opacity: 0,
    y: 10,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    onComplete: () => {
      document.querySelectorAll('.bento-item').forEach(el => {
        el.classList.add('interactive');
      });
    },
  });
});
</script>

<style scoped>
.bento-container {
  display: grid;
  grid-template-columns: 40% 1fr 1fr;
  grid-auto-rows: minmax(120px, auto);
  gap: var(--spacing-md);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.bento-item {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, rgba(74, 26, 26, 0.8) 50%, var(--bg-secondary) 100%);
  border: var(--border-width) solid var(--border-color);
  border-radius: 8px;
  padding: var(--spacing-md);
  position: relative;
  overflow: hidden;
  opacity: 1; /* Ensure default is visible if JS fails */
}

.bento-item.interactive {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

/* Bento Grid跨度类 */
.span-full {
  grid-column: 1 / -1;
}

.span-2-cols {
  grid-column: span 2;
}

.span-2-rows {
  grid-row: span 2;
}

/* 物理位移交互反馈 */
.bento-item:hover {
  transform: translateY(-2px);
  box-shadow: 3px 5px 0 var(--bg-structural);
}

.bento-item:active {
  transform: translateY(1px);
  box-shadow: 1px 2px 0 var(--bg-structural);
}

/* 颗粒纹理 */
.bento-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.03) 2px,
      rgba(255, 255, 255, 0.03) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.03) 2px,
      rgba(255, 255, 255, 0.03) 4px
    );
  pointer-events: none;
  opacity: 0.5;
  z-index: 1;
}

/* 确保内容在纹理之上 */
.bento-item > * {
  position: relative;
  z-index: 2;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .bento-container {
    grid-template-columns: 1fr;
  }

  .span-2-cols,
  .span-2-rows {
    grid-column: 1;
    grid-row: auto;
  }
}
</style>
