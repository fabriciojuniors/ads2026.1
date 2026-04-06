import { z } from 'zod'

const CpfSchema = z.object({
    valor: z.string().min(11).max(11)
})
//.refine()

export const ProdutoSchema = z.object({
    nome: z.string()
        .min(3, 'O tamanho mínimo é 3')
        .max(150, 'O tamanho máximo é 150')
        .nullable(),
    preco: z.coerce.number().min(1),
    cpf: CpfSchema
})

export type Produto = z.infer<typeof ProdutoSchema>