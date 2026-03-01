import { useMemo, useState } from "react";
import { FlatList, Image, Modal, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Desenvolvedor {
  id: number;
  nome: string;
  imagem: string;
  habilidades: string[];
}

export default function Index() {
  const inset = useSafeAreaInsets();
  const [busca, setBusca] = useState("");
  const [desenvolvedores] = useState<Desenvolvedor[]>([
    {
      id: 1,
      nome: "Ana Silva",
      imagem: "https://randomuser.me/api/portraits/women/44.jpg",
      habilidades: ["React Native", "TypeScript", "Node.js"]
    },
    {
      id: 2,
      nome: "Carlos Eduardo",
      imagem: "https://randomuser.me/api/portraits/men/32.jpg",
      habilidades: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
      id: 3,
      nome: "Beatriz Souza",
      imagem: "https://randomuser.me/api/portraits/women/68.jpg",
      habilidades: ["Python", "Django", "Docker"]
    },
    {
      id: 4,
      nome: "Rafael Costa",
      imagem: "https://randomuser.me/api/portraits/men/46.jpg",
      habilidades: ["Vue.js", "PHP", "Laravel"]
    },
    {
      id: 5,
      nome: "Juliana Mendes",
      imagem: "https://randomuser.me/api/portraits/women/12.jpg",
      habilidades: ["Swift", "iOS", "Figma"]
    },
    {
      id: 6,
      nome: "Lucas Pereira",
      imagem: "https://randomuser.me/api/portraits/men/85.jpg",
      habilidades: ["Kotlin", "Android", "Firebase"]
    },
    {
      id: 7,
      nome: "Mariana Alves",
      imagem: "https://randomuser.me/api/portraits/women/90.jpg",
      habilidades: ["C#", ".NET", "SQL Server"]
    },
    {
      id: 8,
      nome: "Fernando Gomes",
      imagem: "https://randomuser.me/api/portraits/men/22.jpg",
      habilidades: ["Angular", "RxJS", "Sass"]
    }
  ])

  const [desenvolvedorSelecionado, setDesenvolvedorSelecionado] = useState<Desenvolvedor | null>(null);

  const desenvolvedoresFiltrados = useMemo(() => desenvolvedores.filter(d =>
    d.nome.toLowerCase().includes(busca.toLowerCase())
  ), [busca, desenvolvedores]);

  return (
    <View style={estilos.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={estilos.label}>Encontre desenvolvedores</Text>
        <TextInput
          value={busca}
          onChangeText={setBusca}
          placeholder="Digite o nome do desenvolvedor"
          style={estilos.input}
        />
      </View>

      <View style={estilos.listContainer}>
        <FlatList
          numColumns={2}
          data={desenvolvedoresFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable style={estilos.item} onPress={() => setDesenvolvedorSelecionado(item)}>
              <View>
                <Image
                  source={{ uri: item.imagem }}
                  style={estilos.itemImage}
                />
              </View>
              <View style={estilos.itemContent}>
                <Text>{item.nome}</Text>
                <Text>{item.habilidades.join(", ")}</Text>
              </View>
            </Pressable>
          )}
          ListEmptyComponent={<View><Text>Nenhum desenvolvedor encontrado</Text></View>}
          contentContainerStyle={[estilos.listContent, { paddingBottom: inset.bottom + 48 }]}
        />
      </View>

      <Modal visible={!!desenvolvedorSelecionado}
        animationType="slide"
        transparent
        onRequestClose={() => setDesenvolvedorSelecionado(null)}
        >
        <View style={estilos.modalOverlay}>
          <View style={estilos.modalContent}>
            <Text style={estilos.modalTitle}>Detalhes do desenvolvedor</Text>
            {desenvolvedorSelecionado && (
              <>
                <View style={estilos.modalImageContainer}>
                  <Image
                    source={{ uri: desenvolvedorSelecionado.imagem }}
                    style={estilos.modalImage}
                  />
                </View>
                <Text style={estilos.modalNome}>{desenvolvedorSelecionado.nome}</Text>
                <View style={estilos.modalHabilidadesContainer}>
                  <Text style={estilos.modalHabilidadesLabel}>Habilidades:</Text>
                  <Text style={estilos.modalHabilidades}>{desenvolvedorSelecionado.habilidades.join(" • ")}</Text>
                </View>
              </>
            )}

            <TouchableOpacity 
              style={estilos.modalButton}
              onPress={() => setDesenvolvedorSelecionado(null)}>
              <Text style={estilos.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
  },
  listContainer: {
    marginTop: 24,
  },
  item: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 12,
    marginHorizontal: 6,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 4,
    overflow: "hidden",
  },
  itemImage: {
    width: "100%",
    height: 150,
  },
  itemContent: {
    padding: 8,
  },
  listContent: {
    flexGrow: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    height: 700,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  modalImageContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  modalNome: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
  modalHabilidadesContainer: {
    marginBottom: 24,
  },
  modalHabilidadesLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modalHabilidades: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
  },
  modalButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: "auto",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
})