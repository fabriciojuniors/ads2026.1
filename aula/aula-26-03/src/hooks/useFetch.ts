import { CadastroPost, PostPage } from "../types/post.type";

const URL_API = process.env.EXPO_PUBLIC_URL_API

if (!URL_API) {
    throw new Error('Variável de ambiente não configurada');
}

export function useFetch() {

    const findAll = async (): Promise<PostPage> => {
        const request = await fetch(`${URL_API}/posts`);

        if (!request.ok) {
            throw new Error('Erro ao buscar posts');
        }

        const resposta = await request.json();
        return resposta;
    }

    const salvar = async (post: CadastroPost) => {
        return await fetch(`${URL_API}/posts/add`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return {
        findAll,
        salvar
    }
}