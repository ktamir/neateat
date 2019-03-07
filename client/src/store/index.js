import { createStore, applyMiddleware } from 'redux';
import { restaurantReducer } from './restaurantReducer';
import createSagaMiddleware from 'redux-saga';
import { fetchRestaurantsSaga } from './restaurantSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  restaurantReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(fetchRestaurantsSaga);
