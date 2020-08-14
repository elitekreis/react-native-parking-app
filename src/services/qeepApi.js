import axios from 'axios';

/**
 * Factory for Axios instance used to interact with Qeep
 *
 * @returns {AxiosInstance}
 */
const createQeepAxiosInstance = () =>
    axios.create({
        baseURL: 'http://qeepfake.herokuapp.com',
        validateStatus: status => status >= 200 && status < 500,
        headers: {
            'Content-Type': 'application/json',
        },
    });

// create axios instance
const axiosInstance = createQeepAxiosInstance();

/**
 * Get the list of parks.
 *
 * @returns {AxiosPromise}
 */
export const getParks = () => axiosInstance.get(`/parks`);

/**
 * Get the current selection.
 *
 * @returns {AxiosPromise}
 */
export const getCurrentPark = () => axiosInstance.get(`/selectedPark`);

/**
 * Set the current selection.
 *
 * @param data the park data to attach
 *
 * @returns {AxiosPromise}
 */
export const setCurrentPark = data => axiosInstance.post(`/selectedPark`, data);
