import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/loginComponent/login';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
