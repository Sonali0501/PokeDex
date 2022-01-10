import { combineReducers } from 'redux';
import { GET_DATA, GET_POKEMON_STATS, GET_TYPES, RESET_POKEMON_STATS } from '../actionCreators/types';

const getData = (state = null , action) => {
    switch(action.type) {
        case GET_DATA:
            return action.payload
        default:
            return state
    }
};

const getTypes = (state = null , action) => {
    switch(action.type) {
        case GET_TYPES:
            return action.payload
        default:
            return state
    }
};

const getDetails = (state = null , action) => {
    switch(action.type) {
        case GET_POKEMON_STATS:
            return action.payload
        case RESET_POKEMON_STATS:
            return null
        default:
            return state
    }
};

export default combineReducers({
    data: getData,
    types: getTypes,
    details: getDetails
});