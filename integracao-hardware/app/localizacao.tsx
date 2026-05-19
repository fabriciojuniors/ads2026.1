import * as Location from 'expo-location';
import { useEffect } from 'react';
import { Text, View } from "react-native";
import MapView from 'react-native-maps';

export default function Localizacao() {

    const carregarLocalizacao = async () => {
        const permissao = await Location.requestForegroundPermissionsAsync();

        if (!permissao || !permissao.granted) {
            console.log("Sem permissão para localização.");
            return;
        }

        const localizacao = await Location.getCurrentPositionAsync();
        console.log('Localização atual:', localizacao);
    }

    useEffect(() => {
        carregarLocalizacao()
    }, [])

    return (
        <View>
            <Text>Localização</Text>
            <MapView style={{ width: 400, height: 400 }} />
        </View>
    )
}