import { FlatList, Image, Text, View } from "react-native";

interface Cardapio {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    imagem: string
}

const cardapioEscolar: Cardapio[] = [
    {
        id: 1,
        nome: "Bowl de Frutas Arco-Íris",
        descricao: "Mix de frutas da estação (morango, manga, uva e kiwi) com granola artesanal sem açúcar.",
        preco: 8.50,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQMMkfl0kUMRYmfQT3KcuXtUkKYbnNFI4wA&s"
    },
    {
        id: 2,
        nome: "Sanduíche Natural de Frango",
        descricao: "Pão integral, frango desfiado com creme de ricota, cenoura ralada e alface orgânica.",
        preco: 12.00,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAvHp-42khnIZAn9OtxdiBR69tP8IPrNHqw&s"
    },
    {
        id: 3,
        nome: "Omelete de Forno Colorida",
        descricao: "Omelete fofinha feita ao forno com cubinhos de tomate, espinafre e queijo branco.",
        preco: 10.50,
        imagem: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/84e74d31aafc05a47d5421651f004339.jpg"
    },
    {
        id: 4,
        nome: "Iogurte Natural com Mel",
        descricao: "Iogurte integral cremoso acompanhado de um fio de mel silvestre e sementes de chia.",
        preco: 7.00,
        imagem: "https://fortatacadista.vteximg.com.br/arquivos/ids/309525-800-800/image-to-upload-0.jpg?v=638550280140330000"
    },
    {
        id: 5,
        nome: "Suco de Laranja com Cenoura",
        descricao: "Suco natural extraído na hora, rico em vitamina C e sem adição de conservantes.",
        preco: 6.50,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjyp6bjC1wP3EhfmqEJHmumKhsYD-HS2Y4A&s"
    }
];

export default function Cardapio() {

    return (
        <View style={{ flex: 1, backgroundColor: "#f0f0f0", padding: 20, gap: 15 }}>
            <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff", padding: 10, borderRadius: 8 }}>
                <Text>Verifique a lista de alimentação disponível para o dia de hoje</Text>
            </View>

            <FlatList
                data={cardapioEscolar}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: "#ffffff", padding: 10, marginVertical: 5, borderRadius: 8 }}>
                        <Image source={{ uri: item.imagem }} style={{ width: "100%", height: 150, borderRadius: 8 }} resizeMode="cover" />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>{item.nome}</Text>
                            <Text style={{ marginBottom: 5 }}>{item.descricao}</Text>
                            <Text style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>
                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}