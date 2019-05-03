import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------

const SET_AUTH = 'SET_AUTH';
const UPDATE_CURRENT_USER_INFO = 'UPDATE_CURRENT_USER_INFO';

export const constants = {
  SET_AUTH,
  UPDATE_CURRENT_USER_INFO,
};

export const initialState = {
  auth: {},
};

// ------------------------------------
// Actions
// ------------------------------------
export const setAuthInfo = createAction(SET_AUTH);
export const updateCurrentUserInfo = createAction(UPDATE_CURRENT_USER_INFO);

export const actions = {
  setAuthInfo,
  updateCurrentUserInfo,
};

// ------------------------------------
// Reducers
// ------------------------------------

export const reducers = {
  [SET_AUTH]: (state, { payload }) => {
    return { ...state, auth: payload };
  },
  [UPDATE_CURRENT_USER_INFO]: (state, { payload }) => {
    return { ...state, auth: { ...state.auth, user: payload } };
  },
};

export default handleActions(reducers, initialState);
