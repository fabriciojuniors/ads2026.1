import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter()

  const navegar = () => {
    router.push("/alunos")
  }

  const navegar2 = () => {
    router.replace("/alunos")
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/alunos"}>
        <Text>Ir para home</Text>
      </Link>

      <TouchableOpacity onPress={navegar}>
        <Text>Ir para alunos via função</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navegar2}>
        <Text>Ir para alunos via função2</Text>
      </TouchableOpacity>
    </View>
  );
}
