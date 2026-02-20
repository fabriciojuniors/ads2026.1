import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

interface Triangulo {
  ladoA: number;
  ladoB: number;
  ladoC: number;
}

export default function Index() {
  const [tringualo, setTriangulo] = useState<Triangulo>({
    ladoA: 0,
    ladoB: 0,
    ladoC: 0,
  });

  const calcular = () => {
    const { ladoA, ladoB, ladoC } = tringualo;

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
      Alert.alert("Erro", "Os lados devem ser maiores que zero.");
      return;
    }

    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
      if (ladoA === ladoB && ladoB === ladoC) {
        Alert.alert("Resultado", "O triângulo é equilátero.");
      } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        Alert.alert("Resultado", "O triângulo é isósceles.");
      } else {
        Alert.alert("Resultado", "O triângulo é escaleno.");
      }
    } else {
      Alert.alert("Resultado", "Os lados não formam um triângulo.");
    }
  }

  return (
    <View style={styles.corpo}>
      <Text>Exercício 1 - Triângulos</Text>

      <TextInput
        style={styles.input}
        placeholder="Lado A"
        keyboardType="numeric"
        value={tringualo.ladoA.toString()}
        onChangeText={(text) => setTriangulo({...tringualo, ladoA: parseFloat(text) || 0})}
      />
      <TextInput
        style={styles.input}
        placeholder="Lado B"
        keyboardType="numeric"
        value={tringualo.ladoB.toString()}
        onChangeText={(text) => setTriangulo({...tringualo, ladoB: parseFloat(text) || 0})}
      />
      <TextInput
        style={styles.input}
        placeholder="Lado C"
        keyboardType="numeric"
        value={tringualo.ladoC.toString()}
        onChangeText={(text) => setTriangulo({...tringualo, ladoC: parseFloat(text) || 0})}
      />

      <Button title="Calcular" onPress={calcular} />
    </View>
  );
}

const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
})