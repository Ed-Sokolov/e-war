import { statisticsAPI } from "../api/statistics/api";

const SET_TRANSLATED_STATS = 'SET_TRANSLATED_STATS';
const SET_DATE = 'SET_DATE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    statistics: {},
    date: null,
    isFetching: false,
    isError: false,
    descriptionError: null
};

const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRANSLATED_STATS:
            let translatedStats = Object.keys(action.translatedStats).map(key => Object.assign(action.translatedStats[key], { value: action.originalStats.stats[key], originalTitle: key }));
            return {
                ...state,
                statistics: translatedStats
            }
        case SET_DATE:
            let dateSystem = action.date;

            let year = dateSystem.getFullYear();

            let month = dateSystem.getMonth() + 1;
            month = month < 10 ? '0' + month : month;

            let day = dateSystem.getDate();
            day = day < 10 ? '0' + day : day;

            let date = `${year}-${month}-${day}`;

            return {
                ...state,
                date
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.isError,
                descriptionError: "Виберіть іншу дату, будь ласка."
            }
        default:
            return state;
    }
}

export const setDate = (date) => ({
    type: SET_DATE,
    date
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

const setTranslatedStats = (originalStats, translatedStats) => ({
    type: SET_TRANSLATED_STATS,
    originalStats,
    translatedStats
})
const setError = (isError) => ({
    type: SET_ERROR,
    isError
})

export const getStatistics = (date) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response;
    try {
        response = await statisticsAPI.getStatistics(date);
        let originalStats = response.data;
        response = await statisticsAPI.getUATranslate();
        dispatch(setTranslatedStats(originalStats, response.data));
        dispatch(setError(false));
    }
    catch {
        dispatch(setError(true));
    }
    dispatch(toggleIsFetching(false));
}

export default statisticsReducer;