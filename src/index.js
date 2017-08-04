import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Event from './pages/Event';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/*"  render={(data) => {
          console.log(data);
          return (<Event />);
        }}/>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
