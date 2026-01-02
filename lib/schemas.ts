import { z } from 'zod';

export const contactUsSchema = z.object({
  givenNames: z.string().optional(),
  surname: z.string().min(1, {
    message: 'Surname must be at least 1 character.',
  }),
  email: z.string().email(),
  phone: z.string(),
  privacy: z.boolean().refine((x) => x === true, { message: 'Accept the Privacy Notice to continue.' }),
  existing: z.boolean().default(false),
  message: z.string().optional(),
  enquiryType: z.string().optional(),
});

export type ContactUsFormFields = z.infer<typeof contactUsSchema>;

export const paginationParamsSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});
