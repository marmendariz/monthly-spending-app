import React, {Component} from 'react';
import ExpenseSection from '../ExpenseSection/ExpenseSection';

class AllExpensesSection extends Component{

    render(){

        return (
            <div>
                All Monthly Expenses Section    
                <ExpenseSection/>
                <ExpenseSection/>
            </div>
        );

    }

}

export default AllExpensesSection;