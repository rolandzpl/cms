import axios from 'axios';

const apiUrl = "http://localhost:5100/api";

const authService = {
  login: async (username: string, password: string) => {
    const response = await axios.post(`${apiUrl}/auth/login`, { username, password });
    return response.data.token;
  },
  register: async (username: string, password: string) => {
    await axios.post(`${apiUrl}/auth/register`, { username, password });
  },
  decodeToken: (token: string) => {
    // Implement token decoding logic here
    // For example, using jwt-decode library
    // return jwtDecode(token);
    return JSON.parse(atob(token.split('.')[1])); // Simplified example
  }
};

export default authService;
