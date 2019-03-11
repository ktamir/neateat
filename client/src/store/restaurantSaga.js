// @flow

import axios from 'axios';
import { Action } from 'redux';
import { put, takeLatest, type PutEffect } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import { API_URL, FETCH_RESTAURANTS_ERROR, FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS } from '../consts';

function *fetchRestaurants() : PutEffect<Action> {
  try {
    const response = yield axios.get(`${API_URL}/restaurants`);
    yield put({ type: FETCH_RESTAURANTS_SUCCESS, data: response.data });
  } catch (e) {
    yield put({ type: FETCH_RESTAURANTS_ERROR, error: e.response.data });
  }
}

export function *fetchRestaurantsSaga(): Saga<void> {
  yield takeLatest(FETCH_RESTAURANTS_REQUEST, fetchRestaurants);
}
