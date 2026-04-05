import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RenderPost } from '../components/Post';
import { useAxios } from "../hooks/useAxios";
import { PostsPageResponse } from "../types/PostsPageResponse";

export default function Tanstack() {
  const { findAll } = useAxios()

  const { data: postsResponse, isLoading, refetch } = useQuery<PostsPageResponse>({
    queryKey: ['posts'],
    queryFn: findAll,
  })

  return (
    <View style={{ padding: 20 }}>
      <View style={style.card}>
        <Text>Está pagina realiza requisições HTTP utilizando <Text style={style.title}>Axios + Tanstack</Text></Text>
      </View>

      <TouchableOpacity onPress={() => refetch()} style={style.button}>
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>Recarregar</Text>
      </TouchableOpacity>
      <FlatList
        data={postsResponse?.posts ?? []}
        renderItem={(item) => <RenderPost post={item.item} />}
        ListEmptyComponent={() => {
          if (isLoading) {
            return <ActivityIndicator size="large" color="#0000ff" />
          }

          return <Text>Nenhum post encontrado</Text>
        }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => refetch()} />}
      />

    </View>
  );
}

const style = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: { backgroundColor: "#4CAF50", padding: 10, borderRadius: 5, alignItems: "center", marginBottom: 10 }
})
