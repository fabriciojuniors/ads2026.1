import { ActivityIndicator, FlatList, KeyboardAvoidingView, Platform, StatusBar, Text, View } from "react-native";

export default function Index() {
  const alunos = [
    { id: 1, nome: 'Eric' },
    { id: 2, nome: 'Caetano' },
    { id: 3, nome: 'Carolina' },
  ]

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={120}
    >
      <ActivityIndicator
        color={"blue"}
        size={"large"}
        animating={false}
      />

      <StatusBar
        backgroundColor={"blue"}
        barStyle={"dark-content"}
        networkActivityIndicatorVisible={false}
        hidden={false}
        animated
      />

      <FlatList
        data={alunos}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id} - {item.nome}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<View>
          <Text>Cabeçalho</Text>
        </View>}
        ListFooterComponent={<View>
          <Text>Rodapé</Text>
        </View>}
        ListEmptyComponent={<View>
          <Text>Lista vazia</Text>
        </View>}
        numColumns={2}
      />

      {/* {alunos && alunos.map(a => (
        <View key={a.id}>
          <Text>{a.id} - {a.nome}</Text>
        </View>
      ))} */}

      {/* <ScrollView
        style={{ flex: 1 }}
      >
        {Array.from({ length: 17 }).map((_, i) => (
          <TextInput
            key={i}
            placeholder="Teste"
            style={{
              borderWidth: 1,
              marginBottom: 16,
              padding: 12,
              borderRadius: 8
            }}
          />
        ))}
      </ScrollView> */}
    </KeyboardAvoidingView>
  );
}