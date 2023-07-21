import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
const Newexpense = (props) => {
    const[IsEditing,setIsEditing]=useState(false)

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData= {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler =()=>{
        setIsEditing(true);

    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
    return(
        <div className='new-expense'>
            {!IsEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
           {IsEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}
           onCancel ={stopEditingHandler}></ExpenseForm>}
        </div>
    )
}
export default Newexpense;