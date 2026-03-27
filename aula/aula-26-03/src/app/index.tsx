import { View } from "react-native";
import { Botao } from "../components/botao";
import { Input } from "../components/input";

export default function Index() {
  return (
    <View
      style={{
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Botao 
        label="Botão customizado" 
        onPress={() => console.log('CLICOU')}
       />

       <Input 
        nome="produto"
        label="Produto"
        keyboardType="default"
        placeholder="Informe o nome do produto"
        obrigatorio
       />
    </View>
  );
}
