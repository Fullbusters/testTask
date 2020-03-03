import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../TextInput';

// render component for login page
const LoginForm = ({ handleSubmit, onSave }) => {
  console.log(onSave);
  return(
    <div className='login-container'>
      <Field
        name='userName'
        component={TextInput}
        label={'email'}
      />
      <Field
        name='password'
        component={TextInput}
        label={'password'}
      />
      <div className='confirm-button' onClick={handleSubmit(onSave)}>
        <p>Login</p>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'login',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
})(LoginForm);

