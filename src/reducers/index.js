import { combineReducers } from 'redux';
import { GET_DATA, GET_POKEMON_STATS } from '../actionCreators/types';

const getData = (state = [] , action) => {
    switch(action.type) {
        case GET_DATA:
            return action.payload
        default:
            return state
    }
};

export default combineReducers({
    data: getData,
});