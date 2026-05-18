import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();

  const selecionarImagem = async () => {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permissao || !permissao.granted) {
      console.warn('Sem permissão!');
      return
    }

    const arquivoSelecionado = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: false
    })

    console.log(arquivoSelecionado);
    
  }

  if (!permission || !permission.granted) {
    return (
      <View>
        <View style={{
          margin: 10, alignItems: 'center', gap: 10,
          padding: 20, backgroundColor: 'white'
        }}>
          <Text>Permissão de acesso à câmera negada!</Text>
          <TouchableOpacity onPress={requestPermission}
            style={{
              padding: 15,
              backgroundColor: 'cadetblue', borderRadius: 15
            }}>
            <Text>Solicitar permissões</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} facing='back' />

      <View>
        <TouchableOpacity onPress={selecionarImagem} style={{
          padding: 15,
          backgroundColor: 'cadetblue', borderRadius: 15
        }}>
          <Text>Selecionar imagem!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
