import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useCache } from "../hooks/useCache";

export default function Tanstack() {
  const { save, get } = useCache()
  const [inputValue, setInputValue] = useState("")


  const handleSave = async () => {
    await save("chave", inputValue)
  }

  const handleGet = async () => {
    const value = await get("chave")
    if (value) {
      setInputValue(value)
    }
  }

  useEffect(() => {
    handleGet()
  }, [])

  return (
    <View style={{ padding: 20 }}>
      <View style={style.card}>
        <Text>Esta página realiza a persistência em cache utilizando <Text style={style.title}>Expo Secure Store</Text></Text>
      </View>

      <View style={style.card}>
        <Text>Os dados são armazenados de forma segura, utilizando criptografia nativa do dispositivo.</Text>
      </View>

      <View style={{ ...style.card, gap: 10 }}>
        <TextInput
          placeholder="Digite algo para armazenar em cache"
          style={{ borderWidth: 1, borderColor: "#DDD", borderRadius: 5, padding: 10 }}
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity onPress={handleSave} style={style.button}>
          <Text style={{ color: "#FFF", fontWeight: "bold" }}>Salvar</Text>
        </TouchableOpacity>
        <Text>Após salvar, o valor pode ser recuperado mesmo após reiniciar o app.</Text>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: { backgroundColor: "#4CAF50", padding: 10, borderRadius: 5, alignItems: "center", marginBottom: 10 }
})
