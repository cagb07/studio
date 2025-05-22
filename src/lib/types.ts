import { z } from 'zod';

export const reportSchema = z.object({
  schoolName: z.string().min(1, { message: "El nombre del centro es requerido" }),
  visitDate: z.string().min(1, { message: "La fecha es requerida" }), // Or use z.date() if using a date picker that provides a Date object
  contactName: z.string().min(1, { message: "El nombre del contacto es requerido" }),
  inventorySummary: z.string().optional(),
  observations: z.string().optional(),
  virtualLineNumber: z.string().optional(), // New field
});

export type ReportData = z.infer<typeof reportSchema>;
