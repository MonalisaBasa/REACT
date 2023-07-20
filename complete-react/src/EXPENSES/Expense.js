import { useState } from "react";
import Expensefilter from "./Expensefilter";
import Expenseitem from "./Expenseitem.js";
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    

    {/* Render conditionally */ }

    // let expenseContent=<p>No expenses Found</p>
    // if(filteredExpenses.length > 0){
    //     expenseContent=filteredExpenses.map((expense) => (
    //         <Expenseitem
    //             key={expense.id}
                
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date} />
    //             )

    //     )
    // }

  
    return (
        <div>
            {/* <Card className="Expenses"> */}
            <Expensefilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {expenseContent}
            {/* {props.items.map((expense) => ( */}

            {/* Render conditionally */}

            {/* {filteredExpenses.length === 0 ? (
                <p>No Expenses found</p>
            ) : (filteredExpenses.map((expense) => (
                <Expenseitem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />)

            ))} */}


            {/* // <Expenseitem
            //     title={props.items[0].title}
            //     amount={props.item[0].amount}
            //     date={props.items[0].date}
            // />
            // <Expenseitem
            //     title={props.items[1].title}
            //     amount={props.item[1].amount}
            //     date={props.items[1].date}
            // />
            // <Expenseitem
            //     title={props.items[2].title}
            //     amount={props.item[2].amount}
            //     date={props.items[2].date}
            // />
            // <Expenseitem
            //     title={props.items[3].title}
            //     amount={props.item[3].amount}
            //     date={props.items[3].date}
            // /> */}

            {/* </Card> */}
        </div>
    )
}
export default Expenses;