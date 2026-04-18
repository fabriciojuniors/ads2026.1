import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useSecureStore } from "../hooks/useSecureStore";

export default function Cache() {
    const [nome, setNome] = useState('');
    const { salvar, recuperar } = useSecureStore()

    const salvarNoCache = async () => {
        await salvar('NOME', nome);
    }

    const carregarDoCache = async () => {
        const nomeSalvo = await recuperar('NOME');
        setNome(nomeSalvo ?? '');
    }

    useEffect(() => {
        carregarDoCache()
    }, [])

    return (
        <View>
            <Text>Utilizando cache!</Text>
            <TextInput
                placeholder="Informe o nome"
                value={nome}
                onChangeText={setNome}
                style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: 'lightgrey',
                    borderRadius: 10
                }}
            />
            <Button title="Salvar"
                onPress={salvarNoCache} />
        </View>
    )
}