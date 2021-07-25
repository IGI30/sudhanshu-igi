import React from 'react'

import '../styles/globals.css';
import '../styles/Accordion.css';
import '../styles/Timeline.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'fontsource-roboto';

import initAuth from '../utils/initAuth'
// import * as serviceWorker from '../utils/serviceWorker';
// import reportWebVitals from '..utils/reportWebVitals';

initAuth()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
