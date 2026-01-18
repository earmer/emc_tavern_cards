<template>
  <section class="items-panel">
    <h2 class="section-title">
      物品栏
      <div class="title-underline" />
    </h2>

    <div class="items-content">
      <div v-if="Object.keys(store.data.夏夏.物品栏).length > 0" class="items-grid">
        <div v-for="(item, name) in store.data.夏夏.物品栏" :key="name" class="item-card">
          <div class="item-header">
            <span class="item-name">{{ name }}</span>
            <span class="item-quantity">×{{ item.数量 }}</span>
          </div>
          <p class="item-description">{{ item.描述 }}</p>
        </div>
      </div>

      <div v-else class="empty-state">
        <span>物品栏为空</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style scoped>
.items-panel {
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

.items-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--spacing-sm);
  width: 100%;
  justify-content: center;
}

.item-card {
  padding: var(--spacing-sm);
  background: rgba(255, 255, 255, 0.05);
  border: var(--border-width) solid var(--border-color);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.item-card:hover {
  transform: translateY(-1px);
  box-shadow: 2px 2px 0 var(--bg-structural);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xs);
}

.item-name {
  font-size: 0.875rem;
  color: var(--text-heading);
  font-weight: 600;
}

.item-quantity {
  font-size: 0.75rem;
  color: var(--text-accent);
  font-family: var(--font-body);
}

.item-description {
  font-size: 0.75rem;
  color: var(--text-primary);
  opacity: 0.8;
  margin: 0;
  line-height: 1.4;
}

.empty-state {
  padding: var(--spacing-md);
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-primary);
  opacity: 0.5;
  font-style: italic;
}
</style>
