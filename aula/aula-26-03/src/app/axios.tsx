import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import PostCard from "../components/post-card";
import { useAxios } from "../hooks/useAxios";
import { PostPage } from "../types/post.type";

export default function FetchPage() {
    const { findAll } = useAxios()

    const [posts, setPosts] = useState<PostPage>();

    const carregarPosts = async () => {
        try {
            const resposta = await findAll()
            setPosts(resposta)
        } catch (e: any) {
            Alert.alert("ERRO", e.message)
        }
    }

    useEffect(() => {
        carregarPosts()
    }, [])

    return (
        <View>
            <Text>Requisições com AXIOS</Text>
            <Text>{process.env.EXPO_PUBLIC_URL_API}</Text>

            <FlatList
                data={posts?.posts ?? []}
                renderItem={({ item }) => (
                    <PostCard post={item} />
                )}
            />
        </View>
    )
}