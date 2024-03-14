import axios from "axios";

const BACKEND_API_URL = 'http://127.0.0.1:8000/api';

const BackendFetchApi = {

    register: async (userData) => {
        try {
          const response = await axios.post(`${BACKEND_API_URL}/register`, userData);
          return response.data;
        } catch (error) {
          throw error;
        }
      }

}  


export default BackendFetchApi;