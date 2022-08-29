import axios from "axios";

const instance = axios.create(
    {
        baseURL: `https://russianwarship.rip/api/v1/`
    }
)

export const statisticsAPI = {
    getStatistics(date) {
        return instance.get(`statistics/${date}`).then(response => response.data);
    },
    getUATranslate() {
        return instance.get(`terms/ua`).then(response => response.data)
    }
} 