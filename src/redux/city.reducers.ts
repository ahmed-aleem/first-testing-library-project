import {cityActionTypes} from './city.types';
import {getFilteredCities} from '../utils/filterData';

export interface BasicState{
    isCities: boolean,
    cities: [{city_name?: string}],
    filteredCities: [{city_name?: string}],
    searchKey: string | null,
    errorMessage: string | null
}

export interface BasicAction{
    type: string,
    payload: {city_name?: string}[] | string | Function
}

export const INITIAL_STATE: BasicState = {
    isCities: false,
    cities: [{}],
    filteredCities: [{}],
    searchKey: '',
    errorMessage: ''
}

const cityReducer = (state = INITIAL_STATE, action: BasicAction) => {

    switch (action.type) {
        case cityActionTypes.SET_CITIES_START:
            return {
                ...state,
                isCities: false
            };
            
        case cityActionTypes.SET_CIITIES_SUCCESS:
            return {
                ...state,
                isCities: true,
                cities: action.payload
            };

        case cityActionTypes.SET_CITIES_FAILURE:
            return {
                ...state,
                isCities: true,
                errorMessage: action.payload
            };
        case cityActionTypes.SET_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload,
                filteredCities: getFilteredCities(state.cities, action.payload as string)
            };

        default:
            return state;
    }

}

export default cityReducer;