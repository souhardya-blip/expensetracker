import React from 'react';
// parent component to expense form
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);//lifting the state up again to the app.js
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>  
        {/* custom event props onSaveExpenseData will be triggereded when the form is submitted 
        that only points to the function but does not call it.It will be called by expenseForm onSaveExpenseData*/}
            
        </div>
}
export default NewExpense;