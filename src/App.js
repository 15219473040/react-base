import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import MyCom from "./MyCom.js"
import About from "./About.js"
import Error from "./Error.js"
import CheckList from "./CheckList.js"
import City from "./City.js"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>


        <Router>
          <div>
            <Link to='/list' className={'nav_itme'}>CheckList</Link>
            <Link to='/about' className={'nav_itme'}>about</Link>
            <Link to='/city' className={'nav_itme'}>city</Link>
            <div className={'cl'}></div>
            <Route path='/' exact component={CheckList} />
            <Route path='/list' component={CheckList} />
            <Route path='/city' component={City} />

            <Route path='/about' component={About} />
            <Route path="*" component={Error} />

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
