import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

interface Destino {
  id: number,
  nome: string,
  imagem: string
}

export default function Index() {

  const [destinos] = useState<Destino[]>([
    {
      id: 1,
      nome: "Praia",
      imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg"
    },
    {
      id: 2,
      nome: "Montanhas",
      imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg"
    },
    {
      id: 3,
      nome: "Cidades históricas",
      imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg"
    }
  ])

  return (
    <View>
      <Text>dESTINO</Text>
      <FlatList
        data={destinos}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: '/destinos/[destino]',
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
  );
}
