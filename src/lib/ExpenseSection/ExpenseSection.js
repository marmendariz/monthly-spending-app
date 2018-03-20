import React, {Component} from 'react';
import TextField from 'material-ui/TextField'

class ExpenseSection extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            sectionTitle: this.props.sectionTitle,
            sectionFields: this.props.sectionFields
        };
    }

    handleChange = (event) => {
        //TODO: add validation here
        this.setState({
            value: event.target.value,
        });
    };

    render(){

        const sectionFields = this.state.sectionFields.map((field, index)=>{

            return(
                <TextField floatingLabelText={field.label}
                           hintText="0.00"
                           onChange={this.handleChange}
                           value={this.state.value}/>
            );
        });

        return (
            <div class="ExpenseSection">

                <div class="ExpenseMainTitle">
                    {this.state.sectionTitle}
                </div>
                <div>
                    {sectionFields}
                </div>

            </div>
        );

    }

}

export default ExpenseSection;