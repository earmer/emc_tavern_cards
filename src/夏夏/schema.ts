export const Schema = z.object({
  环境: z
    .object({
      日期: z.string().prefault(''),
      时间: z.string().prefault(''),
      '📍': z.string().prefault(''),
    })
    .prefault({}),
  夏夏: z
    .object({
      基础属性: z
        .object({
          姓名: z.string().prefault(''),
          体力: z.coerce
            .number()
            .transform(v => _.clamp(v, 0, 100))
            .prefault(100),
          饥饿感: z.coerce
            .number()
            .transform(v => _.clamp(v, 0, 100))
            .prefault(0),
          特殊阶段: z.string().prefault(''),
        })
        .prefault({}),
      情绪: z
        .object({
          心情: z.coerce
            .number()
            .transform(v => _.clamp(v, 0, 100))
            .prefault(50),
          欲望: z.coerce
            .number()
            .transform(v => _.clamp(v, 0, 100))
            .prefault(0),
        })
        .prefault({}),
      动态状态: z
        .object({
          正在: z.string().prefault(''),
          次数: z.coerce.number().prefault(0),
          '👗': z.string().prefault(''),
          Debuff: z.record(z.string().describe('状态名'), z.string().describe('状态描述')).prefault({}),
        })
        .prefault({}),
      物品栏: z
        .record(
          z.string().describe('物品名'),
          z.object({
            描述: z.string(),
            数量: z.coerce.number(),
          }),
        )
        .prefault({})
        .transform(items => Object.fromEntries(Object.entries(items).filter(([, v]) => v.数量 > 0))),
      小记系统: z
        .object({
          小记: z.string().prefault(''),
          历史小记: z.record(z.string(), z.string()).prefault({}),
        })
        .prefault({}),
    })
    .prefault({}),
});

export type Schema = z.output<typeof Schema>;
