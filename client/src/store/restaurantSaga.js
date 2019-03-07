// @flow

import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import { API_URL } from '../consts';

function *fetchRestaurants() {
  try {
    const response = yield axios.get(`${API_URL}/restaurants`);
    yield put({ type: 'FETCH_RESTAURANTS_SUCCESS', data: response.data });
  } catch (e) {
    yield put({ type: 'FETCH_RESTAURANTS_ERROR', error: e.response });
  }
}

export function *fetchRestaurantsSaga(): Saga<void> {
  yield takeLatest('FETCH_RESTAURANTS_REQUEST', fetchRestaurants);
}
