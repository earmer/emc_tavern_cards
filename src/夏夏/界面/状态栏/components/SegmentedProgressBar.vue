<template>
  <div class="segmented-progress">
    <div class="progress-header">
      <span class="text-xs font-semibold">{{ label }}</span>
      <div class="flex items-center gap-1.5">
        <span ref="valueRef" class="text-xs font-mono opacity-80">{{ displayValue }}/{{ max }}</span>

        <!-- 数值对比 -->
        <span v-if="diff" :class="['diff-badge', diff.color]"> {{ diff.arrow }}{{ diff.display }} </span>

        <!-- 调整按钮 -->
        <div class="adjust-buttons">
          <button @click="adjust(-10)" class="adjust-btn" title="减少10">--</button>
          <button @click="adjust(-1)" class="adjust-btn" title="减少1">-</button>
          <button @click="adjust(+1)" class="adjust-btn" title="增加1">+</button>
          <button @click="adjust(+10)" class="adjust-btn" title="增加10">++</button>
        </div>
      </div>
    </div>

    <!-- 分段进度条 -->
    <div class="segments-container">
      <div
        v-for="i in 4"
        :key="i"
        class="segment"
        :class="{
          filled: value >= i * 25,
          partial: value > (i - 1) * 25 && value < i * 25,
        }"
        :style="{
          '--fill-percent': getSegmentFill(i),
          '--segment-color': color,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { computed, ref, watch } from 'vue';
import { getStatDiff } from '../store';

interface Props {
  label: string;
  value: number;
  max: number;
  color: string;
  statPath: string;
  previous?: number | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{ adjust: [delta: number] }>();

const displayValue = ref(props.value);
const valueRef = ref<HTMLElement | null>(null);

// 计算数值差异
const diff = computed(() => {
  if (props.previous === undefined) return null;
  return getStatDiff(props.value, props.previous ?? null);
});

// 数字滚动动画
watch(
  () => props.value,
  (newValue, oldValue) => {
    gsap.to(displayValue, {
      value: newValue,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate: () => {
        displayValue.value = Math.round(displayValue.value);
      },
    });

    // 数值变化时的闪烁高亮
    if (valueRef.value) {
      gsap.fromTo(
        valueRef.value,
        { color: 'var(--text-accent)', scale: 1.1, opacity: 1 },
        { color: 'var(--text-primary)', scale: 1, opacity: 0.8, duration: 0.3 },
      );
    }
  },
);

function getSegmentFill(segmentIndex: number): string {
  const segmentValue = props.max / 4;
  const segmentStart = (segmentIndex - 1) * segmentValue;
  const segmentEnd = segmentIndex * segmentValue;

  if (props.value >= segmentEnd) return '100%';
  if (props.value <= segmentStart) return '0%';

  const fillPercent = ((props.value - segmentStart) / segmentValue) * 100;
  return `${fillPercent}%`;
}

function adjust(delta: number) {
  emit('adjust', delta);
}
</script>

<style scoped>
.segmented-progress {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  z-index: 2;
  margin-bottom: 2px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.segments-container {
  display: flex;
  gap: 3px;
  height: 8px;
}

.segment {
  flex: 1;
  background: color-mix(in srgb, var(--segment-color) 20%, var(--bg-primary));
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 4px; /* 圆角处理 */
}

.segment::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--fill-percent, 0%);
  background: linear-gradient(90deg, var(--segment-color) 0%, color-mix(in srgb, var(--segment-color) 80%, white) 100%);
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: inherit;
}

.segment.filled::after {
  width: 100%;
}

/* 调整按钮样式 */
.adjust-buttons {
  display: flex;
  gap: 3px;
}

.adjust-btn {
  width: 18px;
  height: 18px;
  border: var(--border-width) solid var(--border-color);
  background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-structural) 100%);
  color: var(--text-accent);
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.15s ease;
  box-shadow: 1px 1px 0 var(--bg-structural);
  border-radius: 50%; /* 圆形按钮 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.adjust-btn:hover {
  transform: scale(1.1);
  box-shadow: 1px 1.5px 0 var(--bg-structural);
  background: linear-gradient(135deg, var(--bg-structural) 0%, var(--bg-tertiary) 100%);
}

.adjust-btn:active {
  transform: translateY(1px) scale(0.95);
  box-shadow: 0 0 0 var(--bg-structural);
}

/* 数值对比标签 */
.diff-badge {
  font-size: 9px;
  padding: 1px 4px;
  border-radius: 8px;
  border: 1px solid currentColor;
  font-family: var(--font-body);
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.diff-badge:hover {
  opacity: 1;
}
</style>
