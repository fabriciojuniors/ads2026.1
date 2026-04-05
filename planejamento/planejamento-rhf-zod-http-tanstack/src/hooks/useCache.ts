import * as SecureStore from 'expo-secure-store';

export function useCache() {
    const save = async (key: string, value: string) => {
        await SecureStore.setItemAsync(key, value)
    }

    const get = async (key: string) => {
        return await SecureStore.getItemAsync(key)
    }

    return {
        save,
        get
    }
}