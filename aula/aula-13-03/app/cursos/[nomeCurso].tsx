import { Tabs, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Cursos() {
    const { nomeCurso } = useLocalSearchParams<{ nomeCurso: string }>()


    return (
        <View>
            <Tabs.Screen
                options={{ title: nomeCurso }} />
            <Text>Detalhe do curso! {nomeCurso}</Text>
        </View>
    )
}