import { Post } from "../types/Post"
import { PostsPageResponse } from "../types/PostsPageResponse"

const API_URL = process.env.EXPO_PUBLIC_API_URL

if (!API_URL) {
    throw new Error("URL da api não informada!")
}

export function useFetch() {

    const findAll = async (): Promise<PostsPageResponse> => {
        const response = await fetch(`${API_URL}/posts`)
        const data = await response.json()
        return data;
    }

    const findById = async(id: number): Promise<Post> => {
        const response = await fetch(`${API_URL}/posts/${id}`)
        const data = await response.json()
        return data;
    }

    return {
        findAll
    }
}