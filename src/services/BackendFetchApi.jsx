import axios from "axios";

const BACKEND_API_URL = 'http://127.0.0.1:8000/api';

const BackendFetchApi = {

    register: async (userData) => {
        try {
            const response = await axios.post(`${BACKEND_API_URL}/register`, userData);
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    login: async (userData) => {
        try {
            const response = await axios.post(`${BACKEND_API_URL}/login`, userData);
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (error) {
            throw error;
        }
    }, 
    userGetProfile: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${BACKEND_API_URL}/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}


export default BackendFetchApi;