import { useState } from "react";
import { Alert, Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [modalAberto, setModalAberto] = useState(false)

  const mostrarAlerta = () => {
    Alert.alert('Você clicou!', 'Para abrir a modal mantenha pressionado.')
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={estilos.btn}
        onPress={mostrarAlerta}
        onLongPress={() => setModalAberto(true)}
        delayLongPress={2000}
      >
        <Text style={{ color: 'white' }}>Clique aqui!</Text>
      </Pressable>

      <Modal visible={modalAberto}>
        <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfMupPxafO_CMksjy6-yS7d69VQE7JfZ7eA&s'
            }}
            style={{ width: 300, height: 300 }}
          />

          <Pressable
            style={estilos.btn}
            onPress={() => setModalAberto(false)}
          >
            <Text style={{ color: 'white' }}>Fechar!</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const estilos = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10
  }
})
