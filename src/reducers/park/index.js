import { handleActions, combineActions } from 'redux-actions';
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';
import {
    // fetch the list of parks
    fetchParkListRequest,
    fetchParkListSuccess,
    fetchParkListFailure,

    // fetch the current park
    fetchCurrentParkRequest,
    fetchCurrentParkSuccess,
    fetchCurrentParkFailure,

    // set the current park
    setCurrentParkRequest,
    setCurrentParkSuccess,
    setCurrentParkFailure,
} from '../../actions/park';

const defaultState = {
    parkList: [],
    currentPark: null,
    loading: false,
    error: '',
};

export default handleActions(
    {
        // fetch the list of parks
        [fetchParkListRequest](state) {
            return set(['loading'], true, state);
        },
        [fetchParkListSuccess](state, action) {
            const parkList = action.payload;
            return flow(
                set(['loading'], false),
                set(['parkList'], parkList)
            )(state);
        },

        // fetch / set the current park
        [combineActions(fetchCurrentParkRequest, setCurrentParkRequest)](state) {
            return set(['loading'], true, state);
        },
        [combineActions(fetchCurrentParkSuccess, setCurrentParkSuccess)](state, action) {
            const park = action.payload;
            return flow(
                set(['loading'], false),
                set(['currentPark'], park)
            )(state);
        },

        // failures
        [combineActions(fetchParkListFailure, fetchCurrentParkFailure, setCurrentParkFailure)](
            state,
            action
        ) {
            const { message } = action.payload;
            return flow(
                set(['loading'], false),
                set(['error'], message)
            )(state);
        },
    },
    defaultState
);
