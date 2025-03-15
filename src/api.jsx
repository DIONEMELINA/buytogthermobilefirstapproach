import axios from 'axios'

const API_URL = 'https://rrn24.techchantier.site/buy-together-api/public'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => Promise.reject(error)
)

export default api