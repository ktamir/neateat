import { createStore, compose, applyMiddleware } from 'redux';
import { restaurantReducer } from './restaurantReducer';
import createSagaMiddleware from 'redux-saga';
import { fetchRestaurantsSaga } from './restaurantSaga';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  restaurantReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* esline-enable */

sagaMiddleware.run(fetchRestaurantsSaga);
