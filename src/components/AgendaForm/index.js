import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextArea from '../TextArea';

// minimum validation for agenda form
const validate = values => {
  let errors = {};

  if (!values.meetingAgenda) {
    errors.meetingAgenda = 'required'
  }
  return errors
};

//render component for Agenda Page
const AgendaForm = ({ successUpdate, handleSubmit, onSave }) => (
  <div className='agenda-container'>
    <h2 className='label'>Agenda</h2>
    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus magna eu
      tortor dictum, sit amet dictum quam ullamcorper.</p>
    {successUpdate ?
      <div className='text success'>
        Message updated successfully
      </div> : null}

    <Field
      name='meetingAgenda'
      component={TextArea}
    />

    <div className='confirm-button' onClick={handleSubmit(onSave)}>
      <p>Save</p>
    </div>
  </div>
);

export default  reduxForm({
  form: 'agenda-message',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  validate,
})(AgendaForm);

