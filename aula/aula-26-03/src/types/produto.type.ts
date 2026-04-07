import { z } from 'zod'

const CpfSchema = z.object({
    valor: z.string().min(11).max(11)
})

export const ProdutoSchema = z.object({
    produto: z.string()
        .min(3, 'O tamanho mínimo é 3')
        .max(15, 'O tamanho máximo é 150')
        .nullable(),
    preco: z.coerce.number().min(1, 'O valor minimo é 1'),
    // cpf: CpfSchema
})

export type Produto = z.infer<typeof ProdutoSchema>