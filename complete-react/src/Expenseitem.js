function Expenseitem(props){
    return(
        <div className="expense-item">
            <div>{props.date.toISOString()}</div> 
            <div className="expense-item-desc">
                <h2>{props.title}</h2>
                <div className="expense-item-amount">{props.amount}</div>
            </div>

            


    </div>
    )

       
}
export default Expenseitem;