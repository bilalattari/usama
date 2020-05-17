import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import CustomRoutes from './Router';
// import SeeAll from './seeAll'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
   <CustomRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
