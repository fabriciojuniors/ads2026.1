import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { useFetch } from "../hooks/useFetch";

export default function FetchPage() {
    const { findAll } = useFetch()

    const [posts, setPosts] = useState<any>();

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
            <Text>Requisições com FETCH</Text>
            <Text>{process.env.EXPO_PUBLIC_URL_API}</Text>

            <FlatList
                data={posts!.posts ?? []}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}