// @flow

import axios from 'axios';
import { put, takeLatest, type PutEffect } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import {
  ADD_RESTAURANT_ERROR,
  ADD_RESTAURANT_REQUEST,
  ADD_RESTAURANT_SUCCESS,
  API_URL,
  FETCH_RESTAURANTS_ERROR,
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS, HIDE_ADD_RESTAURANT_MODAL,
} from '../consts';
import type { NeatEatAction, NeatEatDataAction } from '../flowTypes';

function *fetchRestaurants(): PutEffect<NeatEatAction> {
  try {
    const response = yield axios.get(`${API_URL}/restaurants`);
    yield put({ type: FETCH_RESTAURANTS_SUCCESS, data: response.data });
  } catch (e) {
    yield put({ type: FETCH_RESTAURANTS_ERROR, error: e.response.data });
  }
}

function *addRestaurant(action: NeatEatDataAction): PutEffect<NeatEatAction> {
  try {
    const response = yield axios.post(`${API_URL}/restaurants`, action.data);
    yield put({ type: ADD_RESTAURANT_SUCCESS, data: response.data });
    yield put({ type: HIDE_ADD_RESTAURANT_MODAL });
  } catch (e) {
    yield put({ type: ADD_RESTAURANT_ERROR, error: e.response.data });
  }
}

export function *fetchRestaurantsSaga(): Saga<void> {
  yield takeLatest(FETCH_RESTAURANTS_REQUEST, fetchRestaurants);
}

export function *addRestaurantSaga(): Saga<void> {
  yield takeLatest(ADD_RESTAURANT_REQUEST, addRestaurant);
}
