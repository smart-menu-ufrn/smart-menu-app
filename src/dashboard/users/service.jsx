import axios from "axios";

const client = axios.create(
    {
        baseURL: "http://localhost:8080",
    }
);

const service = {
    getUsers: async () => {
        const response = await client.get("/users");

        return response.data;
    },
    deleteUser: async (id) => {
        await client.delete("/users/" + toString(id));

        return null;
    }
}

export default service;
