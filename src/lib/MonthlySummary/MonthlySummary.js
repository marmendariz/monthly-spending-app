import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './MonthlySummary.css';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

class MonthlySummary extends Component {
  
    render() {
        document.title = "Monthly Spending App"
        return (
            <Card id="MonthlySummaryCard">
                <TextField floatingLabelText="Total Monthly Income"
                           value="5000"/>
            </Card>
        );
  }

}

export default MonthlySummary;
