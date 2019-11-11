import * as types from "./types";
import axios from 'axios';

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMessage = message => ({ type: types.SET_ERROR, message });

export const submitMethod = products => ({ type: types.SUBMIT, products });

// export const submit = payload => dispatch => {
//   dispatch(loading(true));
// }

export const submit = payload => {
  return dispatch => {
    dispatch(loading(true));
    // dispatch(errorMessage("Erroring!!"));
    // dispatch(loading(false));
    return axios
    .post('/url', payload)
    .then(res => {
      dispatch(submitMethod(payload));
      return res.data;
    })
    .catch (error => {

    })
  };
};
