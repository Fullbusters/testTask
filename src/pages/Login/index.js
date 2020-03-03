import React, { useEffect } from 'react';
import { SubmissionError } from 'redux-form';
import './index.css';
import { bindActionCreators } from 'redux';
import { login, saveToken } from '../../modules/Auth/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';


// component with actions for login page
const Login = ({ login, history, saveToken }) => {

  const submit = (values) => {
    return login(values)
      .then(() => {
        history.push(`agenda`);
      })
      .catch(() => {
        throw new SubmissionError(
          {
            userName: 'something went wrong',
            password: 'something went wrong',
            _error: 'User auth failed'
          });
      })
  };

  useEffect(() => {
    const token = localStorage.getItem('auth_token') || null;

    if (token && token !== 'null') {
      saveToken(token);
      history.push(`agenda`);
    }
  });

  return (
    <LoginForm
      onSave={submit}
      initialValues={{
        userName: 'test@ego-cms.com',
        password: 'qwerty',
      }}
    />
  );
};

const mapDispatchToProps = dispatch => ({
    login: bindActionCreators(login, dispatch),
    saveToken: bindActionCreators(saveToken, dispatch),
  });

export default connect(null, mapDispatchToProps)(withRouter(Login));