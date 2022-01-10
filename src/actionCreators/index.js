import api from '../api';
import { GET_DATA, GET_POKEMON_STATS, GET_TYPES, RESET_POKEMON_STATS } from './types';

export const fetchData = (url) => async dispatch => {
    const response = await api.get(url);

    dispatch({ type: GET_DATA, payload: response.data});
}

export const fetchTypes = () => async dispatch => {
    const response = await api.get('/type/');

    dispatch({ type: GET_TYPES, payload: response.data});
}

export const fetchPokemonDetails = (url) => async dispatch => {
    const response = await api.get(url);

    dispatch({ type: GET_POKEMON_STATS, payload: response.data});
}

export const resetPokemonDetails = () => {
    return {
        type: RESET_POKEMON_STATS
    }
}