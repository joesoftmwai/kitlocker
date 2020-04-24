import  { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// middlewares stored in array
const middlewares = [logger];

// the store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;