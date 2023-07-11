import ExpenseForm from './ExpenseForm'
function Newexpense(props){
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData= {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}
export default Newexpense;