import { createAction } from 'redux-actions';

// fetch the list of parks
export const fetchParkListRequest = createAction('FETCH_PARK_LIST_REQUEST');
export const fetchParkListSuccess = createAction('FETCH_PARK_LIST_SUCCESS');
export const fetchParkListFailure = createAction('FETCH_PARK_LIST_FAILURE');

// fetch the current park
export const fetchCurrentParkRequest = createAction('FETCH_CURRENT_PARK_REQUEST');
export const fetchCurrentParkSuccess = createAction('FETCH_CURRENT_PARK_SUCCESS');
export const fetchCurrentParkFailure = createAction('FETCH_CURRENT_PARK_FAILURE');

// set the current park
export const setCurrentParkRequest = createAction('SET_CURRENT_PARK_REQUEST');
export const setCurrentParkSuccess = createAction('SET_CURRENT_PARK_SUCCESS');
export const setCurrentParkFailure = createAction('SET_CURRENT_PARK_FAILURE');
