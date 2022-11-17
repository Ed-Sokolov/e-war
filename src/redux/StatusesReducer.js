import { statusesAPI } from "../api/map/api";

const SET_STATUSES = 'SET_STATUSES';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    citiesStatus: [
        {
            "shapeName": "Kherson oblast",
            "id": 1,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-65",
            "shapeID": "UKR-ADM1-14850775B67307707",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Volyn oblast",
            "id": 2,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-07",
            "shapeID": "UKR-ADM1-14850775B3218954",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Rivne oblast",
            "id": 3,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-56",
            "shapeID": "UKR-ADM1-14850775B55566407",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Zhytomyr oblast",
            "id": 4,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-18",
            "shapeID": "UKR-ADM1-14850775B22680847",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Kyiv oblast",
            "id": 5,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-32",
            "shapeID": "UKR-ADM1-14850775B46000194",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Chernihiv oblast",
            "id": 6,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-74",
            "shapeID": "UKR-ADM1-14850775B12610052",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Sumy oblast",
            "id": 7,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-59",
            "shapeID": "UKR-ADM1-14850775B62061263",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"

        },
        {
            "shapeName": "Kharkiv oblast",
            "id": 8,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-63",
            "shapeID": "UKR-ADM1-14850775B25463015",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"

        },
        {
            "shapeName": "Luhansk oblast",
            "id": 9,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-09",
            "shapeID": "UKR-ADM1-14850775B85552443",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"

        },
        {
            "shapeName": "Donetsk oblast",
            "id": 10,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-14",
            "shapeID": "UKR-ADM1-14850775B63981522",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Zaporizhzhia oblast",
            "id": 11,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-23",
            "shapeID": "UKR-ADM1-14850775B84430422",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Lviv oblast",
            "id": 12,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-46",
            "shapeID": "UKR-ADM1-14850775B23480250",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Ivano-Frankivsk oblast",
            "id": 13,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-26",
            "shapeID": "UKR-ADM1-14850775B93772131",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Zakarpattia oblast",
            "id": 14,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-21",
            "shapeID": "UKR-ADM1-14850775B74864787",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Ternopil oblast",
            "id": 15,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-61",
            "shapeID": "UKR-ADM1-14850775B21278052",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Chernivtsi oblast",
            "id": 16,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-77",
            "shapeID": "UKR-ADM1-14850775B75077367",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Odesa oblast",
            "id": 17,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-51",
            "shapeID": "UKR-ADM1-14850775B96291551",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Mykolaiv oblast",
            "id": 18,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-48",
            "shapeID": "UKR-ADM1-14850775B36014653",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Vinnytsia oblast",
            "id": 19,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-05",
            "shapeID": "UKR-ADM1-14850775B464857",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Khmelnytskyi oblast",
            "id": 20,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-68",
            "shapeID": "UKR-ADM1-14850775B8491007",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Cherkasy oblast",
            "id": 21,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-71",
            "shapeID": "UKR-ADM1-14850775B24102654",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Poltava oblast",
            "id": 22,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-53",
            "shapeID": "UKR-ADM1-14850775B55196119",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Dnipropetrovsk oblast",
            "id": 23,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-12",
            "shapeID": "UKR-ADM1-14850775B19331457",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Kirovohrad oblast",
            "id": 24,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-35",
            "shapeID": "UKR-ADM1-14850775B71054489",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        },
        {
            "shapeName": "Kyiv",
            "id": 25,
            "alert": false,
            "Level": "ADM1",
            "shapeISO": "UA-30",
            "shapeID": "UKR-ADM1-14850775B25539455",
            "shapeGroup": "UKR",
            "shapeType": "ADM1"
        }
    ],
    isError: false
}

const statusesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUSES:
            let newCitiesStatus = state.citiesStatus.map(status => {
                let item = action.citiesStatus.filter(item => {
                    if(status.shapeName === item.name_en) {
                        return item; 
                    }
                });
                let index = item[0].id - 1;
                status.alert = action.citiesStatus[index].alert;
                status.name = action.citiesStatus[index].name;
                status.changed = action.citiesStatus[index].changed ? action.citiesStatus[index].changed : "Without data";
                return status;
            })
            return {
                ...state,
                citiesStatus: newCitiesStatus
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.isError
            }
        default:
            return state;
    }
}

const setStatuses = (statuses) => ({
    type: SET_STATUSES,
    citiesStatus: statuses
})

const setError = (isError) => ({
    type: SET_ERROR,
    isError
})

export const getStatutes = () => async (dispatch) => {
    try {
        let response = await statusesAPI.getStatutes();
        dispatch(setStatuses(response.states));
        dispatch(setError(false));
    } catch {
        dispatch(setError(true));
    }
}

export default statusesReducer;