import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");

  const hello = () => {
    console.log('Clicou no botão');    
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
      />
    </View>
  );
}
