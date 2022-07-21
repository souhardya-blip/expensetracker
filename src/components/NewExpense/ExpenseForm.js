 import React, { useState } from 'react';
//  child component
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [enteredtitle,setEnteredTitle] =useState('');
    const [enteredamount,setEnteredAmount] =useState('');
    const [entereddate,setEnteredDate] =useState('');
    /*  events are object which automatically gets triggered in the dom when we call a fucntion
     */
    const titleChangeHandler=(event)=>{
         console.log(event.target.value);
         setEnteredTitle(event.target.value);
    }
    const amountChangeHandler= (event)=>{
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        console.log(event.target.value);
        setEnteredDate(event.target.value);

    }
    const SubmitHandler=(event)=>{
      event.preventDefault();
      const expensedata={
        title:enteredtitle,
        amount:enteredamount,
        date:new Date(entereddate),
      }
      console.log(expensedata);
      props.onSaveExpenseData(expensedata); //lifting the state up to its NewExpense parent by passing the expensedata onSave
      setEnteredAmount('');
      setEnteredDate('');
      setEnteredTitle('');   // two way binding to update the title to empty string after submitting 
    }
return <form onSubmit={SubmitHandler}>
    <div className="new-expense__controls">
        <div className='new-expense__control'>
           <label>Title</label>
           <input type="text" value={enteredtitle} onChange={titleChangeHandler}/>  
        </div>
        <div className='new-expense__control'>
           <label>Amount</label>
           <input type="number" value={enteredamount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
           <label>Date</label>
           <input type="date" value={entereddate} min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>   
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add expense</button>
    </div>
</form>
}
export default ExpenseForm;