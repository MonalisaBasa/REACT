import React,{useState } from 'react';
const Expenseform=(props)=>{
    // const Changehandler = (event)=>{
    //     console.log(event.target.value);

    // }
    const[title,setTitle]=useState('');
    const[amount,setAmount]=useState('');
    const[date,setDate]=useState('');
    const titleChangeHandler=(e)=>{
        setTitle(e.target.value);
    }
    const amountChangeHandler = (e) =>{
        setAmount(e.target.value);
    }
    const dateChangeHandler = (e) =>{
        setDate(e.target.value);
    }
    return(
        <form >
            <div class="new-expense">
                <div class="new-expense">
                    <label >Title</label>
                    {/* onchange event handler */}
                    {/* <input type="text" onChange={Changehandler} />    */}
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div class="new-expense">
                    <label >Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div class="new-expense">
                    <label >Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default Expenseform;