import { Link, Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

interface Hospedagem {
    id: number,
    nome: string,
    imagem: string
}

export default function Destino() {
    const { destino } = useLocalSearchParams()

    const [hospedagens] = useState<Hospedagem[]>([
        {
            id: 1,
            nome: "Hotel ABC",
            imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg"
        },
        {
            id: 2,
            nome: "Pousada XYZ",
            imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg"
        },
        {
            id: 3,
            nome: "Cativeiro",
            imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg"
        }
    ])

    return <View>
        <Stack.Screen
            options={{
                title: `Hospedagens para ${destino}`
            }}
        />
        <FlatList
            data={hospedagens}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
                <Link
                    href={{
                        pathname: '/destinos/[destino]/hospedagem',
                        params: {
                            destino: item.nome
                        }
                    }}
                    asChild
                >
                    <TouchableOpacity style={{ backgroundColor: '#fff' }}>
                        <Text style={{ fontSize: 24 }}>{item.nome}</Text>
                        <Image
                            source={{ uri: item.imagem }}
                            style={{ width: 200, height: 200 }}
                        />
                    </TouchableOpacity>
                </Link>
            )
            }
        />
    </View>
}