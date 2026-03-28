import { Stack, useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

export default function Turma() {
    const { curso, turma } = useLocalSearchParams()

    return (
        <View style={{ flex: 1, backgroundColor: "#f0f0f0", padding: 20, gap: 15 }}>
            <Stack.Screen options={{ title: "Análise da Turma" }} />
            <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff", padding: 10, borderRadius: 8 }}>
                <Text>Detalhes da turma {turma} do curso {curso}</Text>
            </View>

            <View style={{ backgroundColor: "#ffffff", padding: 10, borderRadius: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>Informações da Turma</Text>
                <Text>Curso: {curso}</Text>
                <Text>Turma: {turma}</Text>
                <Text>Período: Noturno</Text>
                <Text>Quantidade de alunos: 30</Text>
            </View>
        </View>
    )
}