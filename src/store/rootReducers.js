import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import auth from './modules/auth';
import loading from './modules/loading';

export default combineReducers({
  routing,
  auth,
  loading,
});
