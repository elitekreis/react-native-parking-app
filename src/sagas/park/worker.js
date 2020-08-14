import { call, put } from 'redux-saga/effects';
import { getParks, getCurrentPark, setCurrentPark } from '../../services/qeepApi';
import {
    // fetch the list of parks
    fetchParkListSuccess,
    fetchParkListFailure,

    // fetch the current park
    fetchCurrentParkSuccess,
    fetchCurrentParkFailure,

    // set the current park
    setCurrentParkSuccess,
    setCurrentParkFailure,
} from '../../actions/park';
import qeepApiSaga from '../common/qeepApi';

/**
 * Fetches the list of parks
 */
function* fetchParkListSaga() {
    yield call(qeepApiSaga, fetchParkListSuccess, getParks, null);
}
export function* fetchParkListWorker() {
    try {
        yield call(fetchParkListSaga);
    } catch (error) {
        yield put(fetchParkListFailure(error));
    }
}

/**
 * Fetches current park
 */
function* fetchCurrentParkSaga() {
    yield call(qeepApiSaga, fetchCurrentParkSuccess, getCurrentPark, null);
}
export function* fetchCurrentParkWorker() {
    try {
        yield call(fetchCurrentParkSaga);
    } catch (error) {
        yield put(fetchCurrentParkFailure(error));
    }
}

/**
 * Set current park
 */
function* setCurrentParkSaga(action) {
    yield call(qeepApiSaga, setCurrentParkSuccess, setCurrentPark, action.payload);
}
export function* setCurrentParkWorker(action) {
    try {
        yield call(setCurrentParkSaga, action);
    } catch (error) {
        yield put(setCurrentParkFailure(error));
    }
}
