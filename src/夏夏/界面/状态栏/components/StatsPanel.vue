<template>
  <section class="stats-panel">
    <h2 class="section-title">
      {{ store.data.夏夏.基础属性.姓名 }}
      <div class="title-underline" />
    </h2>

    <div class="stats-content">
      <div class="stats-grid">
        <SegmentedProgressBar
          label="体力"
          icon="💪"
          :value="store.data.夏夏.基础属性.体力"
          :max="100"
          :color="'var(--progress-hp)'"
          :previous="previousData?.夏夏.基础属性.体力"
          stat-path="夏夏.基础属性.体力"
          @adjust="adjustStat('夏夏.基础属性.体力', $event)"
        />

        <SegmentedProgressBar
          label="饥饿"
          icon="🍽️"
          :value="store.data.夏夏.基础属性.饥饿感"
          :max="100"
          :color="'var(--progress-hunger)'"
          :previous="previousData?.夏夏.基础属性.饥饿感"
          stat-path="夏夏.基础属性.饥饿感"
          @adjust="adjustStat('夏夏.基础属性.饥饿感', $event)"
        />

        <SegmentedProgressBar
          label="心情"
          icon="😊"
          :value="store.data.夏夏.情绪.心情"
          :max="100"
          :color="'var(--progress-mood)'"
          :previous="previousData?.夏夏.情绪.心情"
          stat-path="夏夏.情绪.心情"
          @adjust="adjustStat('夏夏.情绪.心情', $event)"
        />

        <SegmentedProgressBar
          label="欲望"
          icon="💕"
          :value="store.data.夏夏.情绪.欲望"
          :max="100"
          :color="'var(--progress-desire)'"
          :previous="previousData?.夏夏.情绪.欲望"
          stat-path="夏夏.情绪.欲望"
          @adjust="adjustStat('夏夏.情绪.欲望', $event)"
        />
      </div>

      <div class="special-phase" v-if="store.data.夏夏.基础属性.特殊阶段">
        <span class="label">特殊阶段：</span>
        <span class="value">{{ store.data.夏夏.基础属性.特殊阶段 }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDataStore, usePreviousLayerData } from '../store';
import SegmentedProgressBar from './SegmentedProgressBar.vue';

const store = useDataStore();
const { previousData } = usePreviousLayerData();

function adjustStat(path: string, delta: number) {
  const currentValue = _.get(store.data, path) as number;
  const newValue = _.clamp(currentValue + delta, 0, 100);
  _.set(store.data, path, newValue);
}
</script>

<style scoped>
.stats-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  height: 100%;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  font-style: italic;
  color: var(--text-heading);
  margin: 0;
  flex-shrink: 0;
}

.title-underline {
  height: 1.5px;
  margin-top: var(--spacing-xs);
  background: linear-gradient(90deg, var(--text-accent) 0%, var(--text-heading) 50%, transparent 100%);
  opacity: 0.8;
}

.stats-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-md);
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

.special-phase {
  padding: var(--spacing-sm);
  background: var(--bg-tertiary);
  border: var(--border-width) solid var(--border-color);
  border-radius: 4px;
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

.special-phase .label {
  font-size: 0.875rem;
  color: var(--text-accent);
  font-weight: 600;
}

.special-phase .value {
  font-size: 0.875rem;
  color: var(--text-heading);
  font-style: italic;
}

@media (min-width: 480px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
