import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MonthlySpendingApp from './MonthlySpendingApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <MuiThemeProvider><MonthlySpendingApp /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
