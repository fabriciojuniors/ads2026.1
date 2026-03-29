import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  nome: z.string().min(6, 'O nome deve ter pelo menos 6 caracteres'),
  idade: z.coerce.number("A idade deve ser um número válido").min(18, 'A idade deve ser maior ou igual a 18 anos'),
});

export type Login = z.infer<typeof loginSchema>;