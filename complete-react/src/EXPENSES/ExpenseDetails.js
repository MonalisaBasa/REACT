const ExpenseDetails = (props) => {
    return (
        <div className="expense-item-desc">
        <h2>{props.title}</h2>
        <div className="expense-item-amount">${props.amount}</div>
    </div>
    )
}
export default ExpenseDetails;

// return React.createElement(
//     'div',
//     { className: 'expense-item' },
//     React.createElement(ExpenseDate, { date: props.date }),
//     React.createElement(
//       'div',
//       null,
//       React.createElement('h1', null, 'Expense 1'),
//       React.createElement('h1', null, 'Expense 1')
//     ),
//     React.createElement('div', null)
//   );