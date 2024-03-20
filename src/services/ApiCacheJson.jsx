import axios from "axios";

const BACKEND_API_URL = 'http://127.0.0.1:8000/api';

const ApiCacheJson = {
  getCryptocurrencies: async () => {
    try {
        const response = await axios.get(`${BACKEND_API_URL}/json`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

}

export default ApiCacheJson