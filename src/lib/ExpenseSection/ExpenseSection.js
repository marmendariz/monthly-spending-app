import React, {Component} from 'react';
import TextField from 'material-ui/TextField'

class ExpenseSection extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    render(){

        return (
            <div>
                <div>
                    1. Giving (  %)
                </div>
                An Expense Here: 
                <TextField floatingLabelText="Dollar Amount"
                           hintText="0.00"
                           value={this.state.value}
                           onChange={this.handleChange}/>
            </div>
        );

    }

}

export default ExpenseSection;