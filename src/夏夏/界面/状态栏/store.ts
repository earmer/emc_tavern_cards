import { ref, onMounted } from 'vue';
import { defineMvuDataStore } from '@util/mvu';
import { Schema } from '../../schema';
import type { z } from 'zod';

// 主数据存储
export const useDataStore = defineMvuDataStore(
  Schema,
  { type: 'message', message_id: getCurrentMessageId() }
);

// 获取上一楼层数据用于对比
export function usePreviousLayerData() {
  const currentMessageId = getCurrentMessageId();
  const previousData = ref<z.infer<typeof Schema> | null>(null);

  onMounted(async () => {
    try {
      await waitGlobalInitialized('Mvu');
      const prevVariables = Mvu.getMvuData({
        type: 'message',
        message_id: currentMessageId - 1
      });
      previousData.value = Schema.parse(_.get(prevVariables, 'stat_data'));
    } catch (error) {
      console.warn('无法获取上一楼层数据:', error);
      previousData.value = null;
    }
  });

  return { previousData };
}

// 计算数值差异的工具函数
export function getStatDiff(current: number, previous: number | null) {
  if (previous === null) return null;

  const diff = current - previous;

  return {
    diff,
    color: diff > 0 ? 'text-green-400' : diff < 0 ? 'text-red-400' : 'text-gray-500',
    arrow: diff > 0 ? '↑' : diff < 0 ? '↓' : '→',
    display: diff !== 0 ? `${diff > 0 ? '+' : ''}${diff}` : '±0'
  };
}
