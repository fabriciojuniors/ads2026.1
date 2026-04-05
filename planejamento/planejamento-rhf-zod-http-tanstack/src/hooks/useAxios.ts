import { Post } from "../types/Post"
import { PostsPageResponse } from "../types/PostsPageResponse"
import { api } from "../utils/axios"

const API_URL = process.env.EXPO_PUBLIC_API_URL

if (!API_URL) {
    throw new Error("URL da api não informada!")
}

export function useAxios() {

    const findAll = async (): Promise<PostsPageResponse> => {
        const { data } = await api.get<PostsPageResponse>('/posts')
        return data
    }

    const findById = async (id: number): Promise<Post> => {
        const { data } = await api.get<Post>(`/posts/${id}`)
        return data
    }

    return {
        findAll
    }
}