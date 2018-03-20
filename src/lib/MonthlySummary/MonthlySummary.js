import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class MonthlySummary extends Component {
  
    render() {
        document.title = "Monthly Spending App"
        return (
            <div>
                <TextField floatingLabelText="Total Monthly Income"
                           value="5000"
                           />
            </div>
        );
  }

}

export default MonthlySummary;
