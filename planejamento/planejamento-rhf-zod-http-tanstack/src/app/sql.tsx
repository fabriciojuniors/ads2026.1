import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../utils/db";

export default function Sql() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  const handleSave = async () => {
    await db.runAsync(`INSERT INTO USUARIOS (nome, email) VALUES (?, ?)`, [nome, email])
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await db.getAllAsync(`SELECT * FROM USUARIOS`)
      console.log(result)
    }
    fetchData()
  }, [])

  return (
    <View style={{ padding: 20 }}>
      <View style={style.card}>
        <Text>Esta página realiza a persistência utilizando <Text style={style.title}>Expo SQLite</Text></Text>
      </View>

      <View style={{ ...style.card, gap: 10 }}>
        <TextInput
          placeholder="Informe o nome"
          style={{ borderWidth: 1, borderColor: "#DDD", borderRadius: 5, padding: 10 }}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder="Informe o email"
          style={{ borderWidth: 1, borderColor: "#DDD", borderRadius: 5, padding: 10 }}
          value={email}
          onChangeText={setEmail}
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
