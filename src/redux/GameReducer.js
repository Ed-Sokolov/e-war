const SET_POSITION_PERSON = 'SET_POSITION_PERSON';
const SET_HIT = 'SET_HIT';
const SET_RESET = 'SET_RESET';

let initialState = {
    location: [
        {id: 1, isHere: false},
        {id: 2, isHere: false},
        {id: 3, isHere: false},
        {id: 4, isHere: false},
        {id: 5, isHere: false},
        {id: 6, isHere: false},
        {id: 7, isHere: false},
        {id: 8, isHere: false},
        {id: 9, isHere: false},
    ],
    isHit: false
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSITION_PERSON:
            const getRandom = Math.floor(Math.random() * 9) + 1;
            let newLocation = state.location.map(location => {
                if(location.id === getRandom)
                    location.isHere = true;
                else
                    location.isHere = false;
                return location;
            })
            return {
                ...state,
                location: newLocation
            }
        case SET_HIT:
            return {
                ...state,
                isHit: action.isHit
            }
        case SET_RESET:
            const resetLocation = state.location.map(location => {
                location.isHere = false;
                return location;
            });
            return {
                ...state,
                location: resetLocation
            }
        default:
            return state;
    }
}

export const setPositionPerson = () => ({
    type: SET_POSITION_PERSON
})
export const setHit = (isHit) => ({
    type: SET_HIT,
    isHit
})
export const setReset = () => ({
    type: SET_RESET
})

export default gameReducer;