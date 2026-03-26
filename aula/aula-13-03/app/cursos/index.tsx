import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Cursos() {
    return (
        <View>
            <Text>Cursos!</Text>
            <Link
                href={
                    {
                        pathname: '/cursos/[nomeCurso]',
                        params: {
                            nomeCurso: "ADS",
                        }
                    }
                }
            >
                <Text>ADS</Text>
            </Link>
        </View>
    )
}