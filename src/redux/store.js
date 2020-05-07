import  { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

// middlewares stored in array
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// the store
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};