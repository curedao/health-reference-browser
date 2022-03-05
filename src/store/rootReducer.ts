import { combineReducers } from '@reduxjs/toolkit';
import { reducer as biomarkersReducer } from 'src/slices/biomarkers.slice';

const appReducer = combineReducers({
  biomarkers: biomarkersReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  };

  return appReducer(state, action);
};

export default rootReducer;
