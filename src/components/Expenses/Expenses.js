import ExpenseItem from './ExpenseItem.js';
import React,{useState} from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('2020');
const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredexpense= props.item.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  let expensecontent= <p>No expenses found</p>
  if(filteredexpense.length > 0){
    expensecontent= filteredexpense.map((expense)=>(
      <ExpenseItem 
      key={expense.id}
      title={expense.title}
       amount={expense.amount}
        date={expense.date}/>))
  }
  
  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expensecontent}      {/* or
      filteredexpenses.length === 0 && <p>No expenses found</p> works same as below in javascript*/}
      {/* {filteredexpense.length ===0 ? (<p>No expenses found</p>):(filteredexpense.map((expense)=>(
      <ExpenseItem 
      key={expense.id}
      title={expense.title}
       amount={expense.amount}
        date={expense.date}/>)))} */}
      {/* <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}></ExpenseItem>
      <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}></ExpenseItem>
      <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}></ExpenseItem>
      <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}></ExpenseItem> */}
      


    </div>
  )
}
export default Expenses;