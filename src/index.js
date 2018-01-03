import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import "moment/locale/ru";
import "jquery/src/jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";
import "font-awesome/css/font-awesome.min.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

moment.locale("ru");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
