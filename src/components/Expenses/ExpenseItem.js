import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js'
import React from 'react';  //useState is a hook from the react library
function ExpenseItem(props){  
    /*
    // const [title,setTitle]= useState(props.title);
   const clickHandler=()=>{
    setTitle('Updated!');         
     
    this setTitle function is a special variable and managed
     by react somewhere in the memory not only updates the value but also 
     reevaluates the jsx code and returns again 
     console.log('Clicked!!');
   };
    */
    
    return (<Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description"><h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>ClickME</button> */}
        </Card>)
}
export default ExpenseItem;