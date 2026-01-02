import { z } from 'zod';

export const eventFiltersSchema = z.object({
  type: z.string().optional(),
  audiences: z.union([z.string(), z.string().array()]).optional(),
  from: z.coerce.date().optional(),
});

export type EventFilters = z.infer<typeof eventFiltersSchema>;
