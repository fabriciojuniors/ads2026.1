import axios from 'axios'

const API_URL = process.env.EXPO_PUBLIC_API_URL

if (!API_URL) {
    throw new Error("URL da api não informada!")
}

export const api = axios.create({
    baseURL: API_URL
})