const SET_PAGE = 'SET_PAGE';

let initialState = {
    titlePage: ""
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                titlePage: action.titlePage
            }
        default:
            return state;
    }
}

export const setPage = (titlePage) => ({
    type: SET_PAGE,
    titlePage
})

export default pageReducer;