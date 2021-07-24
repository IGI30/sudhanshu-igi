import React from 'react'

import '../styles/globals.css';
import '../styles/Accordion.css';
import '../styles/Timeline.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'fontsource-roboto';

import initAuth from '../utils/initAuth'
// import * as serviceWorker from '../utils/serviceWorker';

initAuth()
// serviceWorker.register();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
