import { useState } from "react";
import { Button, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [aberto, setAberto] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Sou um botão!" color={"blue"} />
      <TouchableOpacity style={estilo.botao}
        onPress={() => console.log('clicouu')}>
        <Text>Sou um TouchableOpacity</Text>
      </TouchableOpacity>

      <Pressable
        style={estilo.botao}
        onPressIn={() => console.log('onPressIn', new Date())}
        onPress={() => console.log('onPress')}
        onLongPress={() => console.log('onLongPress', new Date())}
        onPressOut={() => console.log('onPressOut')}
        delayLongPress={5000}
      >
        <Text>Sou um Pressalbe</Text>
      </Pressable>

      <Image
        source={{
          uri: "https://t4.ftcdn.net/jpg/02/77/52/51/360_F_277525116_AcIcxVrd9AZe1hOy1el7tjMDY5u17Ds8.jpg"
        }}
        style={{ width: 300, height: 300 }}
      />

      <Image
        source={require('../assets/images/icon.png')}
        style={{ width: 300, height: 300 }}
      />

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => setAberto(true)}
      >
        <Text>Abrir modal!</Text>
      </TouchableOpacity>

      <Modal
        visible={aberto}
        animationType="slide"
        transparent={true}
      >
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            backgroundColor: '#fff',
            height: 700,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            padding: 20
          }}>
            <Text>Dentro do modal!!</Text>

            <TouchableOpacity
              style={estilo.botao}
              onPress={() => setAberto(false)}
            >
              <Text>Fechar modal!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilo = StyleSheet.create({
  botao: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'green',
    borderRadius: 20
  }
})
