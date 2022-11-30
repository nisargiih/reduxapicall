import counteReducer from '../reducre/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { fatchData } from '../saga/saga';

const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
    counteReducer: counteReducer,
})

// const composeEnhancers = composeWithDevTools({});
// const store = configureStore(counteReducer, composeEnhancers(
//     applyMiddleware(sagaMiddleware)
//     // other store enhancers if any
// ));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;

const store = createStore(reducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
        // other store enhancers if any
      )
    // other store enhancers if any
);

sagaMiddleware.run(fatchData)

export default store;
