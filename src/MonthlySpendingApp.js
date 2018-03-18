import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MonthlySummary from './lib/MonthlySummary/MonthlySummary';
import AllExpensesSection from './lib/AllExpensesSection/AllExpensesSection';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

class MonthlySpendingApp extends Component {

  constructor(props){
    super(props);
  }

  render() {
    document.title = "Monthly Spending App"
    return (
      <MuiThemeProvider>

      <AppBar title="Monthly Spending App"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
      {/*<AppBar title="Monthly Spending App"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              iconElementRight={<FlatButton label="Account Info"/>}/>*/}

      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Monthly Spending with React</h1>
        </header>

        <p className="App-intro">
          SPEND LESS THAN YOU EARN | 
          PAY OFF DEBT QUICKLY | 
          FILL YOUR EMERGENCY FUND
        </p>

        <MonthlySummary/>
        <AllExpensesSection/>

      </div>
      </MuiThemeProvider>
    );
  }
}

export default MonthlySpendingApp;
