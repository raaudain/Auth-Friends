import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        // URL for server
        baseURL:"http://localhost:5000",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`,
        }
    })
}