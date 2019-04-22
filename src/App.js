import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import History from './Components/notre-histoire/History';
import Contact from './Components/Contact/Contact';
import { Route } from 'react-router-dom';

import { Card, CardBody } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className="App-logo-spin">Welcome and see an example of React Router</h1>
          <Menu />
          <Card>
            <CardBody>
              <Route exact path='/' ClassName="selected" component={Home} />
              <Route path='/notre-histoire' ClassName="selected" component={History} />
              <Route path='/Contact' ClassName="selected"  component={Contact} />
              <Route component={Error} />
            </CardBody>
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
