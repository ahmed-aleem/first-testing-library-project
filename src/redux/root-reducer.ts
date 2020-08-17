import { combineReducers } from 'redux';
import cityReducer from './city.reducers';

const rootReducer = combineReducers({
    city: cityReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;