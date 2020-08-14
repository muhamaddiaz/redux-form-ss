import Component from './component';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// import * as actions from './actions';
import {submitUsernameAction} from "./actions";

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitUsernameAction: (payload) => dispatch(submitUsernameAction(payload))
  }
}

function validate(values) {
  const errors = {};

  if(!values.username) {
    errors.username = 'required'
  } else if (values.username === 'akuanakindonesia') {
    errors.username = 'Nama pengguna atau password salah'
  }

  if(!values.password) {
    errors.password = 'required'
  } else if (values.password === 'sehatdankuat') {
    errors.password = 'Nama pengguna atau password salah'
  }

  return errors;
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(Component);

export default reduxForm({
  form: 'reduxInput',
  validate
})(Connected);
