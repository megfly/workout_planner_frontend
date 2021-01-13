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
import rootReducer from './reducers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ExerciseForm from './containers/ExerciseForm';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Calendar from 'react-calendar';
// import CalendarDisplay from './components/CalendarDisplay'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  // <React.StrictMode>
  <Router>
  <Provider store={store}>
    <App />
  </Provider>,
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
