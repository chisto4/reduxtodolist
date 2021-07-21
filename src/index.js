import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { store } from './reducer/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


import {createStore} from "redux";

const defaultState = {
  todosArr: [ ],
}

const state = defaultState; 

const ADD_TASK = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHEK_TODO = "CHEK_TODO";

// const reducer = (state, action) => {
//   switch(action.type) {
//     case ADD_TASK:
//       // return {...state, todosArr: [...todosArr, ]  }
//     default:
//       return state
//   }
// }

// const store = createStore(reducer)

ReactDOM.render(
      <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
