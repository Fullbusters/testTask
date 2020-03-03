import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMessage, updateMessage } from '../../modules/Agenda/actions';
import AgendaForm from '../../components/AgendaForm';
import { getMessage } from '../../modules/Agenda/selectors';
import './index.css';

//component with actions for agenda page
const AgendaPage = ({ loadMessage, history, updateMessage, initialValues }) => {
  const [successUpdate, setSuccessUpdate] = useState(false);

  useEffect(() => {
    loadMessage().catch(() => {
      history.push('')
    })
  });

  const submit = (values) => {
    const {meetingAgenda} = values;

    updateMessage({meetingAgenda})
      .then(() => {
        setSuccessUpdate(true);
        setTimeout(() => setSuccessUpdate(false), 5000);
      })
  };

  return (
   <AgendaForm
     onSave={submit}
     successUpdate={successUpdate}
     initialValues={initialValues}
   />
  );
};

const mapStateToProps = state => ({
  initialValues: {
    meetingAgenda: getMessage(state)
  }
});

const mapDispatchToProps = dispatch => ({
  loadMessage: bindActionCreators(loadMessage, dispatch),
  updateMessage: bindActionCreators(updateMessage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AgendaPage));