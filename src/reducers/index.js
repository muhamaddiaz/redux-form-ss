import { combineReducers } from 'redux';
import example from './example';
import { reducer as formReducer } from 'redux-form';
import manualFormReducer from "./manualForm";

const reducers = combineReducers({
  example,
  form: formReducer,
  manualFormReducer
})

export default reducers;
