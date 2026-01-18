<template>
  <span
    class="status-tag"
    :style="{
      '--tag-color': tagColor,
      borderColor: 'var(--tag-color)',
      color: 'var(--tag-color)',
    }"
    :title="description"
  >
    {{ name }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { stringToColorHash } from '../util/colorHash';

interface Props {
  name: string;
  description?: string;
}

const props = defineProps<Props>();

const tagColor = computed(() => stringToColorHash(props.name));
</script>

<style scoped>
.status-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 14px;
  border-radius: 100px; /* Force capsule shape */
  border: 1.5px solid var(--tag-color);
  /* Use a more visible background by mixing with a semi-opaque version of the color */
  background: color-mix(in srgb, var(--tag-color), transparent 80%);
  font-size: 12px;
  font-family: var(--font-body);
  font-weight: 600;
  cursor: help;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  white-space: nowrap;
  line-height: 1.1;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
}

.status-tag:hover {
  background: color-mix(in srgb, var(--tag-color), transparent 60%);
  transform: translateY(-1px) scale(1.05);
  box-shadow: 2px 3px 0px var(--tag-color);
  filter: brightness(1.1);
}
</style>
