import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import {useState} from 'react';
const Expenseitem = (props) =>{
    // const clickHandler=()=>{
    //     console.log("clicked!!");
    // }
    const [amt,setAmt]=useState(props.amount)
    const clickHandler=()=>{
        setAmt("100");
        console.log(amt);

    }

  
    return(
        <div className="expense-item">
            
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={amt}/>
            {/* <button onClick={clickHandler}>Delete Expenses</button> */}
            <button onClick={clickHandler}>Change Expenses</button>

           
    </div>
    );

       
}
export default Expenseitem;