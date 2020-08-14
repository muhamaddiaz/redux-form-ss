import Component from './component';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// import * as actions from './actions';
import {setUsernameAction} from "./actions";

function mapStateToProps(state) {
  return {
    form: state.manualFormReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUsernameAction: (payload) => dispatch(setUsernameAction(payload))
  }
}

function validate(values) {
  const errors = {};

  if(!values.username) {
    errors.username = 'required'
  } else if (values.username.length < 5) {
    errors.username = 'Username harus lebih dari 5 karakter'
  }

  if(!values.agreement) {
    errors.agreement = 'required'
  }

  return errors;
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(Component);

export default reduxForm({
  form: 'reduxInput',
  validate
})(Connected);
