import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer'
import rootSaga from './root.saga'


const composeEnhancers = compose

const middlewares = []

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware)
middlewares.push(logger)

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;
