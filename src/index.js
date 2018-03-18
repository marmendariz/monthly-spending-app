import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MonthlySpendingApp from './MonthlySpendingApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MonthlySpendingApp />, document.getElementById('root'));
registerServiceWorker();
