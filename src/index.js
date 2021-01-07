import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//setting up redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux' //store and thunk middleware
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
