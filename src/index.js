import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import HomePage from './containers/HomePage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render((
    <Router>
      <div>
          <Route exact path="/" component={App}/>
          <Route path="/home" component={HomePage}/>
      </div>
    </Router>
  ),
  document.getElementById('root')
);
