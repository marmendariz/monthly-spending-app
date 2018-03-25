import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
//import './ExpenseSection.css';
import '../../App.css';

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
                            value={this.state.value}/>
                    <br/>
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
                <Card>
                    <CardHeader
                        title={title}
                        subTitle="subTitle"
                        actAsExpander={true}
                        showExpandableButton={true}/>
                    {/*<CardActions>
                        {sectionFields}
                    </CardActions>*/}
                    <CardText className="ExpenseSectionFields" expandable={true}>
                        {sectionFields}
                    </CardText>
                </Card>
            </div>
        );

    }

}

export default ExpenseSection;