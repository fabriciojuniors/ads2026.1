import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Alunos() {
    return (
        <SafeAreaView>
            <Text>Tela de Alunos</Text>

            <Link href={"/"}>
                <Text>Ir para home</Text>
            </Link>
        </SafeAreaView>
    )
}