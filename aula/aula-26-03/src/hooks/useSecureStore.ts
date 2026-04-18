import * as SecureStore from 'expo-secure-store';

export function useSecureStore() {

    const salvar = async (chave: string, valor: string) => {
        await SecureStore.setItemAsync(chave, valor);
    }

    const recuperar = async (chave: string) => {
        return await SecureStore.getItemAsync(chave);
    }

    return {
        salvar,
        recuperar
    }
}