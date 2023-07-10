const Expenseform=()=>{
    const Changehandler = (event)=>{
        console.log(event.target.value);

    }
    return(
        <form >
            <div class="new-expense">
                <div class="new-expense">
                    <label >Title</label>
                    {/* onchange event handler */}
                    <input type="text" onChange={Changehandler} />   
                </div>
                <div class="new-expense">
                    <label >Amount</label>
                    <input type="number" min="0.01" step="0.01"/>
                </div>
                <div class="new-expense">
                    <label >Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" />
                </div>
            </div>
            <div>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default Expenseform;