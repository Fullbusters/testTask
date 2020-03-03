import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AgendaPage from './Agenda';
import Login from './Login';
import './app.css';


const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <div className='side-menu'/>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/agenda' component={AgendaPage}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
