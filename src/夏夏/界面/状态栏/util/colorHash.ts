/**
 * 根据字符串内容生成红黄紫范围的颜色哈希
 * 用于状态标签的动态颜色生成
 */
export function stringToColorHash(str: string): string {
  // 简单哈希函数
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // 将哈希值映射到红黄紫范围
  // 色相范围：0-60(红-黄), 270-330(紫-粉)
  const hueRanges = [
    { min: 0, max: 60 },      // 红到黄
    { min: 270, max: 330 }    // 紫到粉
  ];

  const rangeIndex = Math.abs(hash) % hueRanges.length;
  const range = hueRanges[rangeIndex];
  const hue = range.min + (Math.abs(hash) % (range.max - range.min));

  // 饱和度：60-80%（青春但伤痛的感觉）
  const saturation = 60 + (Math.abs(hash >> 8) % 20);

  // 亮度：45-65%（适合深色背景）
  const lightness = 45 + (Math.abs(hash >> 16) % 20);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
