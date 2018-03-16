import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { h, Component, render } from 'preact';

import Error from "./Error.js"
// require('preact/debug');
require('preact/devtools')
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
