<template>
  <section class="history-section">
    <h2 class="section-title">
      小记系统
      <div class="title-underline" />
    </h2>

    <div class="current-note">
      <span class="label">当前小记</span>
      <p class="note-content">{{ store.data.夏夏.小记系统.小记 }}</p>
    </div>

    <div v-if="Object.keys(store.data.夏夏.小记系统.历史小记).length > 0" class="history-notes">
      <button @click="showHistory = !showHistory" class="toggle-btn">
        <span
          >{{ showHistory ? '▼' : '▶' }} 历史小记 ({{ Object.keys(store.data.夏夏.小记系统.历史小记).length }})</span
        >
      </button>

      <div v-if="showHistory" class="history-list">
        <div v-for="(content, timestamp) in store.data.夏夏.小记系统.历史小记" :key="timestamp" class="history-item">
          <span class="timestamp">{{ timestamp }}</span>
          <p class="note-content">{{ content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const showHistory = ref(false);
</script>

<style scoped>
.history-section {
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
  background: linear-gradient(90deg, var(--text-accent) 0%, var(--text-heading) 50%, transparent 100%);
  opacity: 0.8;
}

.current-note {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.label {
  font-size: 0.75rem;
  color: var(--text-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.note-content {
  font-size: 0.875rem;
  color: var(--text-primary);
  line-height: 1.5;
  margin: 0;
}

.history-notes {
  margin-top: var(--spacing-sm);
}

.toggle-btn {
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-tertiary);
  border: var(--border-width) solid var(--border-color);
  border-radius: 4px;
  color: var(--text-accent);
  font-size: 0.75rem;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  font-weight: 600;
}

.toggle-btn:hover {
  transform: translateY(-1px);
  box-shadow: 2px 2px 0 var(--bg-structural);
}

.toggle-btn:active {
  transform: translateY(1px);
  box-shadow: 0 0 0 var(--bg-structural);
}

.history-list {
  margin-top: var(--spacing-sm);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.history-item {
  padding: var(--spacing-sm);
  background: rgba(255, 255, 255, 0.05);
  border: var(--border-width) solid var(--border-color);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.timestamp {
  font-size: 0.7rem;
  color: var(--text-accent);
  font-family: var(--font-body);
  opacity: 0.8;
}
</style>
