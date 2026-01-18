<template>
  <section class="status-section">
    <h2 class="section-title">
      <span class="emoji-icon">✨</span> 动态状态
      <div class="title-underline" />
    </h2>

    <div class="status-content">
      <div class="status-row">
        <span class="label" title="正在">🔄</span>
        <span class="value">{{ store.data.夏夏.动态状态.正在 }}</span>
      </div>

      <div class="status-row">
        <span class="label" title="次数">⏱️</span>
        <span class="value">{{ store.data.夏夏.动态状态.次数 }}</span>
      </div>

      <div class="status-row">
        <span class="label" title="衣着">👗</span>
        <span class="value">{{ store.data.夏夏.动态状态['👗'] }}</span>
      </div>

      <div class="status-row debuff-row">
        <span class="label" title="状态">💊</span>
        <div class="debuff-tags">
          <StatusTag
            v-for="(desc, name) in store.data.夏夏.动态状态.Debuff"
            :key="name"
            :name="name"
            :description="desc"
          />
          <span v-if="Object.keys(store.data.夏夏.动态状态.Debuff).length === 0" class="empty-state"> 常规 </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';
import StatusTag from './StatusTag.vue';

const store = useDataStore();
</script>

<style scoped>
.status-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  height: 100%;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  color: var(--text-heading);
  margin: 0 0 var(--spacing-md) 0;
  flex-shrink: 0;
}

.title-underline {
  height: 1.5px;
  margin-top: var(--spacing-xs);
  background: linear-gradient(90deg, var(--text-accent) 0%, var(--text-heading) 50%, transparent 100%);
  opacity: 0.8;
}

.status-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  flex: 1;
  justify-content: center;
}

.status-row {
  display: flex;
  gap: var(--spacing-sm);
  align-items: flex-start;
}

.label {
  font-size: 1.1rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  padding-top: 1px; /* Align emoji with first line of text */
}

.value {
  font-size: 0.875rem;
  color: var(--text-primary);
  line-height: 1.5;
  word-break: break-all;
}

.debuff-row {
  overflow: hidden;
}

.debuff-tags {
  display: flex;
  gap: var(--spacing-xs);
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none; /* Hide scrollbar for cleaner look */
  padding: 4px 2px; /* Add padding to prevent clipping of shadows/borders */
}

.debuff-tags::-webkit-scrollbar {
  display: none;
}

.emoji-icon {
  font-style: normal;
  margin-right: 4px;
}

.empty-state {
  font-size: 0.75rem;
  color: var(--text-primary);
  opacity: 0.5;
  font-style: italic;
  white-space: nowrap;
}
</style>
