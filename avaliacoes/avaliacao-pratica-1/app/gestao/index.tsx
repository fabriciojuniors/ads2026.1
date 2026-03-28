import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Curso {
  id: number,
  nome: string,
  duracao: string,
}

const cursos: Curso[] = [
  {
    id: 1,
    nome: "Análise e Desenvolvimento de Sistemas",
    duracao: "2 anos e meio"
  },
  {
    id: 2,
    nome: "Gestão de Tecnologia da Informação",
    duracao: "2 anos"
  },
  {
    id: 3,
    nome: "Design de moda",
    duracao: "3 anos"
  },
  {
    id: 4,
    nome: "Gastronomia",
    duracao: "2 anos"
  },
];

export default function Index() {
  const [filtro, setFiltro] = useState("")

  const cursosFiltrados = cursos.filter(curso => curso.nome.toLowerCase().includes(filtro.toLowerCase()))

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f0f0", padding: 20, gap: 15 }}>
      <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff", padding: 10, borderRadius: 8 }}>
        <Text>Selecione o curso desejado para verificar suas turmas</Text>
      </View>

      <View style={{ backgroundColor: "#ffffff", padding: 10, borderRadius: 8, gap: 10 }}>
        <Text style={{ marginRight: 10 }}>Filtrar por nome:</Text>
        <TextInput
          value={filtro}
          onChangeText={setFiltro}
          placeholder="Digite o nome do curso"
          style={{ padding: 5, backgroundColor: "#f0f0f0", borderRadius: 5 }}
        />
      </View>

      <FlatList
        data={cursosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/gestao/[curso]",
              params: { curso: item.nome }
            }}
            asChild>
            <TouchableOpacity style={{ backgroundColor: "#ffffff", padding: 10, marginVertical: 5, borderRadius: 8 }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>{item.nome}</Text>
                <Text style={{ marginBottom: 5 }}>{item.duracao}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  )
}