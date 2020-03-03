import React from 'react';
import './index.css';


// component render reduxForm textArea
const TextArea = ({input, meta: {error}}) => (
  <div>
    <textarea {...input} className='textarea-style'/>
    {error ? (<div className='error'>{error}</div>) : null}
  </div>
);

export default TextArea;