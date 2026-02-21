import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");

  const hello = () => {
    console.log('Clicou no botão');
    Alert.alert("Atenção",
      "Este é um alerta",
      [
        {
          text: "Concordo",
          onPress: () => console.log("Concordou")
        }
      ])
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>OLAA, Mundo!</Text>
      <Button
        title="Botão"
        color={"green"}
        onPress={hello}
      />

      <TextInput
        placeholder="Senha"
        editable={true}
        keyboardType="email-address"
        secureTextEntry
        value={nome}
        onChangeText={setNome}
        style={[estilo.input]}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  input: {
    borderWidth: 2,
    width: 200
  },
  teste: {

  }
})