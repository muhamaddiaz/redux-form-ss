import { combineReducers } from 'redux';
import example from './example';
import { reducer as formReducer } from 'redux-form';
import manualFormReducer from "./manualForm";
import auth from './auth';

const reducers = combineReducers({
  example,
  form: formReducer,
  auth,
  manualFormReducer
})

export default reducers;
