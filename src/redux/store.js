import  { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

// middlewares stored in array
const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// the store
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};