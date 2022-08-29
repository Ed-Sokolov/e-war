import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import statisticsPage from './StatisticsReducer';
import statusesPage from './StatusesReducer';
import currentPage from './CurrentPage';
import gamePage from './GameReducer';

const reducers = combineReducers({
    statisticsPage,
    statusesPage,
    currentPage,
    gamePage
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;