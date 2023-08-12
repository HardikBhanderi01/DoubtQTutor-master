// import ReactDOM from 'react-dom'

// import App from './App';

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore, { history } from './redux/store';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';

const initialState = {};

const store = configureStore(initialState);
// import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={"574059073316-7g49pr343qu1jmobfkis2apchn2mhr3v.apps.googleusercontent.com"}>
  {/* <React.StrictMode> */}
    <Provider store={store}>
      {/* {console.log(store.replaceReducer)} */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  {/* </React.StrictMode> */}
  </GoogleOAuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();