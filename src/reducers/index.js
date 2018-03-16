import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducer from './reducer';


const rootReducer = combineReducers({
    dogs:reducer,
    routing: routerReducer,
});

export default rootReducer;
