import axios from 'axios'

export const aTeamApi = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
});