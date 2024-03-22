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

    logout: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BACKEND_API_URL}/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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
    },
    userUpdateProfile: async (userData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`${BACKEND_API_URL}/update-profile`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getTransactions: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${BACKEND_API_URL}/transactions`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getTransactionsID: async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${BACKEND_API_URL}/transactions/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    createTransactions: async (userData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BACKEND_API_URL}/create-transaction`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateTransactions: async (id, userData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`${BACKEND_API_URL}/update-transaction/${id}`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    deleteTransactions: async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`${BACKEND_API_URL}/delete-transaction/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    fetchHistoricals: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${BACKEND_API_URL}/historicals`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

}


export default BackendFetchApi;