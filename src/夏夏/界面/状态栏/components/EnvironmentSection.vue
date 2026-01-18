<template>
  <section class="environment-section">
    <h2 class="section-title">
      环境
      <div class="title-underline" />
    </h2>

    <div class="grid grid-cols-3 gap-4">
      <div class="env-item">
        <span class="label">日期</span>
        <span class="value">{{ store.data.环境.日期 }}</span>
      </div>

      <div class="env-item">
        <span class="label">时间</span>
        <span class="value">{{ store.data.环境.时间 }}</span>
      </div>

      <div class="env-item">
        <span class="label">位置</span>
        <span class="value">{{ store.data.环境['📍'] }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style scoped>
.environment-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  color: var(--text-heading);
  margin: 0 0 var(--spacing-md) 0;
}

.title-underline {
  height: 1.5px;
  margin-top: var(--spacing-xs);
  background: linear-gradient(90deg,
    var(--text-accent) 0%,
    var(--text-heading) 50%,
    transparent 100%
  );
  opacity: 0.8;
}

.env-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.label {
  font-size: 0.75rem;
  color: var(--text-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.value {
  font-size: 1rem;
  color: var(--text-heading);
  font-weight: 500;
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
