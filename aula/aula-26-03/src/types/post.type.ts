import z from "zod"

export interface PostPage {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Reactions
  views: number
  userId: number
}

export interface Reactions {
  likes: number
  dislikes: number
}

export const CadastroPostSchema = z.object({
  title: z.string('Título obrigatório').min(3, 'Título deve conter no mínimo 3 caracteres'),
  body: z.string('Corpo obrigatório'),
  userId: z.coerce.number('Id do usuário é obrigatório'),
  tags: z.array(z.string()).default([]),
})

export type CadastroPost = z.infer<typeof CadastroPostSchema>