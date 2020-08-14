import { all, takeLatest } from 'redux-saga/effects';
import {
    fetchParkListRequest,
    fetchCurrentParkRequest,
    setCurrentParkRequest,
} from '../../actions/park';
import { fetchParkListWorker, fetchCurrentParkWorker, setCurrentParkWorker } from './worker';

export default function* parkSaga() {
    yield all([
        takeLatest(fetchParkListRequest.toString(), fetchParkListWorker),
        takeLatest(fetchCurrentParkRequest.toString(), fetchCurrentParkWorker),
        takeLatest(setCurrentParkRequest.toString(), setCurrentParkWorker),
    ]);
}
