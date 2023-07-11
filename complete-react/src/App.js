import Expenseitem from './EXPENSES/Expenseitem.js';
import Newexpense from './NEWEXPENSE/Newexpense.js';
import './App.css';

function App() {
  const Expenses=[
    {title:"Toilet paper",amount:94.42,date:new Date(2023,7,14)},
    {title:"New Tv",amount:50000,date:new Date(2023,6,14)},
    {title:"Car Insurance",amount:294.42,date:new Date(2023,5,14)},
    {title:"Car ",amount:29400000.42,date:new Date(2023,4,14)}
  
  
  ]
  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <Expenseitem 
      title={Expenses[0].title}
      amount={Expenses[0].amount} 
      date={Expenses[0].date}
      ></Expenseitem>
      <Expenseitem
      title={Expenses[1].title}
      amount={Expenses[1].amount} 
      date={Expenses[1].date}
      ></Expenseitem>
      <Expenseitem
      title={Expenses[2].title}
      amount={Expenses[2].amount} 
      date={Expenses[2].date}></Expenseitem>
      <Expenseitem
      title={Expenses[3].title}
      amount={Expenses[3].amount} 
      date={Expenses[3].date}></Expenseitem>

      <Newexpense onAddExpense={addExpenseHandler}/>
    </div>
  );
}

export default App;
