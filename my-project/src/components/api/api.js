import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8888",  // 백엔드 REST API prefix
    timeout: 5000
})

export default api
