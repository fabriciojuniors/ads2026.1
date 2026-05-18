import { Post, PostPage } from "../types/post.type";
import { api } from "../utils/axios";

export function useAxios() {

    const findAll = async (): Promise<PostPage> => {
        const { data } = await api.get<PostPage>('/posts')
        return data;
    }

    const deletePost = async (id: number) => {
        return await api.delete(`/posts/${id}`)
    }

    const update = async (id: number, post: Post) => {
        return api.put(`/posts/${id}`, post)
    }

    return {
        findAll,
        deletePost,
        update
    }
}