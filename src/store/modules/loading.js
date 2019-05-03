import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------

const SET_LOADING = 'SET_LOADING';
const INCREMENT = 1;
const DECREMENT = -1;

export const constants = {
  SET_LOADING,
  INCREMENT,
  DECREMENT,
};

export const initialState = {
  loading: 0,
};

// ------------------------------------
// Actions
// ------------------------------------
export const setLoading = createAction(SET_LOADING);

export const actions = {
  setLoading,
};

// ------------------------------------
// Reducers
// ------------------------------------

export const reducers = {
  [SET_LOADING]: (state, { payload }) => {
    return { ...state, loading: state.loading + payload };
  },
};

export default handleActions(reducers, initialState);
