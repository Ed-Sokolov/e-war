import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
    baseURL: `https://alerts.com.ua/api/states`,
    headers: {
        "X-API-Key": API_KEY
    }
})

export const statusesAPI = {
    getStatutes() {
        return instance.get().then(response => response.data)
    }
}