import { Link, Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface Turma {
    id: number,
    nome: string,
    periodo: string,
}

export default function Curso() {
    const { curso } = useLocalSearchParams()

    const turmas: Turma[] = [
    {
        id: 1,
        nome: `${curso} - 1ª fase`,
        periodo: "Noturno"
    },
    {
        id: 2,
        nome: `${curso} - 2ª fase`,
        periodo: "Noturno"
    },
    {
        id: 3,
        nome: `${curso} - 3ª fase`,
        periodo: "Noturno"
    },
    {
        id: 4,
        nome: `${curso} - 4ª fase`,
        periodo: "Noturno"
    },
    {
        id: 5,
        nome: `${curso} - 5ª fase`,
        periodo: "Noturno"
    }
];

    return (
        <View style={{ flex: 1, backgroundColor: "#f0f0f0", padding: 20, gap: 15 }}>
            <Stack.Screen options={{ title: `${curso}` }} />
            <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff", padding: 10, borderRadius: 8 }}>
                <Text>Selecione o curso desejado para verificar suas turmas</Text>
            </View>

            <FlatList
                data={turmas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Link
                        href={{
                            pathname: "/gestao/[curso]/[turma]",
                            params: { curso: curso, turma: item.nome }
                        }}
                        asChild>
                        <TouchableOpacity style={{ backgroundColor: "#ffffff", padding: 10, marginVertical: 5, borderRadius: 8 }}>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>{item.nome}</Text>
                                <Text style={{ marginBottom: 5 }}>{item.periodo}</Text>
                            </View>
                        </TouchableOpacity>
                    </Link>
                )}
            />
        </View>
    )
}