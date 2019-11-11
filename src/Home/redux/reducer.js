import {SET_ERROR, SET_LOADING, SUBMIT} from './types';

const initialState = {
  isLoading: false,
  error: "",
  isValid: false,
  products: [
    {
      name: "",
      price: ""
    }
  ],
  shoes: ["addidas", "nike", "puma", "umbro", "fila"]
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.message
      }
    case SUBMIT:
      return {
        ...state,
        products: action.products
      }
    default:
      return state;
  }
}