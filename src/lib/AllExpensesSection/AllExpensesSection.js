import React, {Component} from 'react';
import ExpenseSection from '../ExpenseSection/ExpenseSection';
import {Grid, Row, Col} from 'react-flexbox-grid';


class AllExpensesSection extends Component{

    constructor(props){
        super(props);

        this.state = {
            allExpenses: []
        };
    }

    //when component mounts, get data...
    componentDidMount(){
        this.setState({
            allExpenses: [
                {
                    sectionTitle: "Giving",
                    sectionFields: [{
                        label: "Church/Missionaries/Organizations"
                        }
                    ]
                },
                {
                    sectionTitle: "Savings",
                    sectionFields: [{
                        label: "Emergency"
                        }
                    ]
                },
                {
                    sectionTitle: "Debt",
                    sectionFields: [{
                        label: "Credit Cards"
                        },
                        {
                        label: "Student Loans"
                        }
                    ]
                },
                {
                    sectionTitle: "Housing",
                    sectionFields: [{
                        label: "Mortage/Taxes/Rent"
                        }
                    ]
                },
                {
                    sectionTitle: "Insurance - paid by you",
                    sectionFields: [{
                        label: "Auto"
                        }
                    ]
                },
                {
                    sectionTitle: "Auto/Transportation",
                    sectionFields: [{
                        label: "Car Payments/License"
                        }
                    ]
                },
                {
                    sectionTitle: "Personal Living Expenses",
                    sectionFields: [{
                        label: "Groceries"
                        }
                    ]
                },
                {
                    sectionTitle: "Entertainment",
                    sectionFields: [{
                        label: "Meals"
                        }
                    ]
                },
                {
                    sectionTitle: "Small-Cash Expenses",
                    sectionFields: [{
                        label: ""
                        }
                    ]
                },
            ]
        });
    }

    renderExpenseSections(){

    }

    render(){

        //get our ExpenseSection markup
        let sections = this.state.allExpenses.map((section, index)=>{
            return(
                <ExpenseSection sectionTitle={index+1 + ". " + section.sectionTitle}
                                sectionFields={section.sectionFields}/>
            );
        });

        return (
            <div id="AllExpensesSection">
            {sections}
            </div>
        );

    }

}

export default AllExpensesSection;