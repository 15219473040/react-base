import React, { Component } from 'react';
import "./index.css"
import logo from './logo.svg';
import Error from "./Error.js"
import CheckList from "./components/CheckList.js"
import City from "./components/City.js"
import FilterableProductTable from "./components/FilterableProductTable.js"
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
            <Link to='/city' className={'nav_itme'}>city</Link>
            <Link to='/FilterableProductTable' className={'nav_itme'}>FilterableProductTable</Link>

            <Route path='/' exact component={CheckList} />
            <Route path='/list' component={CheckList} />
            <Route path='/city' component={City} />
            <Route path='/FilterableProductTable' component={FilterableProductTable} />
            <Route path="/*" component={Error} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
