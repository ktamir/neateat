import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import restaurantReducer from './restaurantReducer';
import { fetchRestaurantsSaga } from './restaurantSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  restaurantReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(fetchRestaurantsSaga);
