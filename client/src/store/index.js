import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import restaurantReducer from './restaurantReducer';
import { addRestaurantSaga, fetchRestaurantsSaga } from './restaurantSaga';
import uiReducer from './uiReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ restaurants: restaurantReducer, ui: uiReducer }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(fetchRestaurantsSaga);
sagaMiddleware.run(addRestaurantSaga);
