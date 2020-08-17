import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const middlewares = [thunk];

const composeEnhancers = composeWithDevTools || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;