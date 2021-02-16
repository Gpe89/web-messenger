import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as ServiceWorker from './serviceWorker';
//import firebase from 'firebase/firebase-app';
import { Provider } from 'react-redux';
import store from './store';
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDEGJRdFGweG0MFhYlZpL-wSr7JDylxVeI",
  authDomain: "web-messenger-871b7.firebaseapp.com",
  projectId: "web-messenger-871b7",
  storageBucket: "web-messenger-871b7.appspot.com",
  messagingSenderId: "982222650205",
  appId: "1:982222650205:web:c9cd42436d2231d7a746b4",
  measurementId: "G-S4J5BBTBTN"
};

firebase.initializeApp(firebaseConfig);


window.store = store;

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//ServiceWorker.unregister();
