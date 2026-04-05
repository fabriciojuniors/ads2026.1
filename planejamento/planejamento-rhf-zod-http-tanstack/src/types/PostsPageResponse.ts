import { PageResponse } from "./PageResponse";
import { Post } from "./Post";

export interface PostsPageResponse extends PageResponse {
    posts: Post[]
}