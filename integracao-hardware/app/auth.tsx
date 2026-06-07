import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function Auth() {
    const [possuiHardware, setPossuiHardware] = useState(false);
    const [possuiBiometriaCadastrada, setPossuiBiometriaCadastrada] = useState(false);
    const [carregando, setCarregando] = useState(true);

    const iniciarVerificacoes = async () => {
        // 1. Verifica se o aparelho tem suporte físico (Sensor)
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        setPossuiHardware(hasHardware);

        if (hasHardware) {
            // 2. Verifica se o usuário de fato cadastrou alguma digital/FaceID
            const isEnrolled = await LocalAuthentication.isEnrolledAsync();
            setPossuiBiometriaCadastrada(isEnrolled);

            // Opcional: Descobrir quais tipos estão disponíveis (Digital, Rosto, Íris)
            const tiposDisponiveis = await LocalAuthentication.supportedAuthenticationTypesAsync();
            console.log("Tipos suportados:", tiposDisponiveis);
            // 1 = Fingerprint, 2 = Facial Recognition, 3 = Iris
        }

        setCarregando(false);
    };

    const autenticarUsuario = async () => {
        const autenticacao = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autentique-se para continuar', // Mensagem principal (iOS/Android)
            cancelLabel: 'Cancelar', // Botão de cancelar (Android)
            disableDeviceFallback: false, // Se a biometria falhar, permite usar a senha do celular (PIN/Padrão)
            requireConfirmation: true
        });

        if (autenticacao.success) {
            Alert.alert("Sucesso", "Seja bem-vindo!");
        } else {
            // O retorno contém um campo 'error' com o motivo da falha
            console.log("Erro na autenticação:", autenticacao.error);
            Alert.alert("Falhou", "Não foi possível autenticar.");
        }
    };

    useEffect(() => {
        iniciarVerificacoes();
    }, []);

    if (carregando) {
        return (
            <View style={styles.container}>
                <Text>Carregando verificações de segurança...</Text>
            </View>
        );
    }

    if (!possuiHardware || !possuiBiometriaCadastrada) {
        return (
            <View style={styles.container}>
                <Text style={styles.erroText}>
                    {!possuiHardware
                        ? "Este dispositivo não possui sensor biométrico."
                        : "Nenhuma biometria cadastrada no dispositivo. Vá em configurações e cadastre."}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Área Segura</Text>
            <Button title='Autenticar com Biometria' onPress={autenticarUsuario} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    titulo: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' },
    erroText: { textAlign: 'center', color: 'red' }
});