import axios from "axios";

const client = axios.create(
    {
        baseURL: "http://localhost:8080",
    }
);

const service = {
    login: async (credentials) => {
        await client.post("/auth", credentials);
        
        return true;
    },
    register: async (user) => {
        const response = await client.post("/users", user);

        return response.data.email;

    }
}

export default service;
