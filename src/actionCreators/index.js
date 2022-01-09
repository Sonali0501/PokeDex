import api from '../api';
import { GET_DATA, GET_POKEMON_STATS } from './types';

export const fetchData = () => async dispatch => {
    const response = await api.get(`/pokemon/`);

    dispatch({ type: GET_DATA, payload: response.data});
}