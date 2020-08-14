import React from 'react';
import { Field } from 'redux-form';

class ReduxInput extends React.Component {

  _customInput = ({input, label, meta, type}) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} type={type} />
        {meta.touched && meta.error && (
          <span>
            {meta.error}
          </span>
        )}
      </div>
    )
  }

  _handleSubmit = (values) => {
    const { history, submitUsernameAction } = this.props;

    submitUsernameAction(values);

    history.push('/new-page');
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this._handleSubmit)}>
        <h1>Hello Redux input</h1>
        <Field name={'username'} component={this._customInput} label={'Username'} type={'text'} />
        <Field name={'password'} component={this._customInput} label={'Password'} type={'password'} />
        <button type={'submit'}>submit</button>
      </form>
    )
  }
}

export default ReduxInput;
