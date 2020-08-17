import {cityActionTypes} from './city.types';
import Axios from 'axios';

const api_token = '67rZf932yce7QTVexA36lr0L3_gA91EaSh2aEUnVHVlUBc656B4uTSvn5zYUjvYP3h0';

export const fetchCitiesStart: Function = () => ({
    type: cityActionTypes.SET_CITIES_START
})

export const fetchCitiesSuccess = (cities: {city_name: string}[]) => ({
    type: cityActionTypes.SET_CIITIES_SUCCESS,
    payload: cities
})

export const fetchCitiesFailure = (message: string) => ({
    type: cityActionTypes.SET_CITIES_FAILURE,
    payload: message
})

export const fetchCitiesAsync = () => async (dispatch: Function) => {
    
    dispatch(fetchCitiesStart());

    const {data} = await Axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {headers: {'Accept': 'application/json', 'api-token': api_token, 'user-email': 'ahmedatjs@gmail.com'}});

    const resultCities = await Axios.get(`https://www.universal-tutorial.com/api/cities/Telangana`, { headers: {'Authorization': `Bearer ${data.auth_token}`, 'Accept': 'application/json'} }); 

    console.log(resultCities, 'result');

    resultCities.data ? dispatch(fetchCitiesSuccess(resultCities.data)) : dispatch(fetchCitiesFailure(resultCities.statusText))
}

export const setSearch = (keyword: string) => ({
    type: cityActionTypes.SET_SEARCH_KEY,
    payload: keyword
})