<template>
  <div class="mianmian-status updated-container">
    <details :open="defaultOpen" class="mianmian-details">
      <summary class="mianmian-summary">
        <span class="mianmian-icon">🍃</span>
        <span class="mianmian-title">{{ title || '眠眠已写成' }}</span>
        <small class="mianmian-indicator">
          <span class="toggle-text"></span>
        </small>
      </summary>
      <div class="mianmian-content">
        <slot></slot>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  defaultOpen?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: '',
  defaultOpen: false,
});
</script>

<style scoped>
.mianmian-status {
  width: 90%;
  margin: 10px auto;
  font-family: 'Sarasa Mono SC', sans-serif;
}

.mianmian-details {
  background: #242426;
  border: 1.5px solid rgba(168, 198, 159, 0.4);
  border-radius: 6px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;
}

.mianmian-details[open] {
  border-color: #a8c69f !important;
}

.mianmian-summary {
  padding: 10px 15px;
  color: #d1d1d1;
  cursor: pointer;
  list-style: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  background: rgba(255, 255, 255, 0.03);
}

.mianmian-summary::-webkit-details-marker {
  display: none;
}

.mianmian-icon {
  font-size: 1.1em;
  filter: drop-shadow(0 0 3px rgba(168, 198, 159, 0.5));
}

.mianmian-title {
  flex: 1;
  font-family: 'Noto Serif CJK', serif;
  font-style: italic;
  font-size: 1.05em;
}

.mianmian-indicator {
  color: #a8c69f;
  font-size: 0.8em;
  opacity: 0.8;
}

.mianmian-details[open] .toggle-text::after {
  content: '收起 ▼';
}

.mianmian-details:not([open]) .toggle-text::after {
  content: '展开 ▶';
}

.mianmian-content {
  max-height: 300px;
  overflow-y: auto;
  padding: 12px 15px;
  color: #b0b0b0;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.15);
  border-top: 1.5px solid rgba(168, 198, 159, 0.2);
}

/* 滚动条样式 */
.mianmian-content::-webkit-scrollbar {
  width: 4px;
}

.mianmian-content::-webkit-scrollbar-track {
  background: #1a1a1c;
}

.mianmian-content::-webkit-scrollbar-thumb {
  background: #333335;
  border-radius: 2px;
}

.mianmian-content::-webkit-scrollbar-thumb:hover {
  background: #a8c69f;
}
</style>
