import axios from 'axios';

const URL_API = process.env.EXPO_PUBLIC_URL_API;

if (!URL_API) {
    throw new Error('Variável EXPO_PUBLIC_URL_API não configurada!');
}

export const api = axios.create({
    baseURL: URL_API
})

api.interceptors.request.use((request) => {
    console.log('Interceptando a requisição')
    console.log(request.url);
    console.log('-------');

    request.headers.set('cabecalho-x', 'xyz');

    return request;
})
