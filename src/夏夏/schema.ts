export const Schema = z.object({
  环境: z.object({
    日期: z.string(),
    时间: z.string(),
    '📍': z.string(),
  }),
  夏夏: z.object({
    基础属性: z.object({
      姓名: z.string(),
      体力: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      饥饿感: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      特殊阶段: z.string(),
    }),
    情绪: z.object({
      心情: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      欲望: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
    }),
    动态状态: z.object({
      正在: z.string(),
      次数: z.coerce.number(),
      '👗': z.string(),
      Debuff: z.record(z.string().describe('状态名'), z.string().describe('状态描述')).prefault({}),
    }),
    物品栏: z
      .record(
        z.string().describe('物品名'),
        z.object({
          描述: z.string(),
          数量: z.coerce.number(),
        }),
      )
      .prefault({}),
    小记系统: z.object({
      小记: z.string(),
      历史小记: z.record(z.string(), z.string()).prefault({}),
    }),
  }),
});

export type Schema = z.output<typeof Schema>;
