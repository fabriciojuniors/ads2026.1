import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RenderPost } from '../components/Post';
import { useAxios } from "../hooks/useAxios";
import { Post } from "../types/Post";

export default function Axios() {

  const [posts, setPosts] = useState<Post[]>([])
  const { findAll } = useAxios()

  const findAllPosts = async () => {
    const postsResponse = await findAll()

    if (postsResponse.posts) {
      setPosts(postsResponse.posts)
    } else {
      setPosts([])
    }
  }


  useEffect(() => {
    findAllPosts()
  }, [])

  return (
    <View style={{ padding: 20 }}>
      <View style={style.card}>
        <Text>Está pagina realiza requisições HTTP utilizando <Text style={style.title}>Axios</Text></Text>
      </View>

      <FlatList
        data={posts}
        renderItem={(item) => <RenderPost post={item.item} />}
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
  }
})
