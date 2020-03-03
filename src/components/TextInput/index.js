import React from 'react';
import './index.css';

// component render reduxForm input
const TextInput = ({ input, placeholder,  label, type, meta: {  error } }) => (
  <div className="input-block">
    <div className="input-group">
      <label className='label'>{label}</label>
      <input type={type} {...input} className="form-control" placeholder={placeholder} />
      {error ? ( <div className='error'>{error}</div>): null}
    </div>
  </div>
);

export default TextInput;

