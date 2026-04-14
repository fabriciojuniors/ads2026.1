import { PostPage } from "../types/post.type";
import { api } from "../utils/axios";

export function useAxios() {

    const findAll = async (): Promise<PostPage> => {
        const { data } = await api.get<PostPage>('/posts')
        return data;
    }

    return {
        findAll
    }
}