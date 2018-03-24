import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import './ExpenseSection.css';

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

    renderSectionTextFields(){
        let sectionFields = this.state.sectionFields.map((field, index)=>{

            return(
                <div className="ExpenseInputField">
                <TextField floatingLabelText={field.label}
                           hintText="0.00"
                           onChange={this.handleChange}
                           value={this.state.value}/><br/>
                </div>
            );
        });

        return sectionFields;  
    }

    render(){

        const sectionFields = this.renderSectionTextFields();
        const title = this.state.sectionTitle;

        return (
            <div className="ExpenseSection">

                <div className="ExpenseMainTitle">
                    <p>{title}</p>
                </div>

                <div>
                    {sectionFields}
                </div>
                
            </div>
        );

    }

}

export default ExpenseSection;