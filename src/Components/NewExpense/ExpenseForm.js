import React, { useState } from 'react';
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
    const [enterTitle,setEnterTitle] = useState(" ");
    const [enterAmount,setEnterAmount] = useState(" ");
    const [enterDate,setEnterDate] = useState(" ");
    const titleChange=(e)=>{
        setEnterTitle(e.target.value); 
    };
    const amountChange=(e)=>{
        setEnterAmount(e.target.value);
    };
    const dateChange=(e)=>{
        setEnterDate(e.target.value); 
    };
    const submit =(e)=>{
        e.preventDefault();
        const expenseData={
            title:enterTitle,
            amount:+enterAmount,
            date:new Date(enterDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnterTitle(" ");
        setEnterAmount(" ");
        setEnterDate(" ");

    }
    
  return (
 <form onSubmit={submit}>
     <div className='new-expense__controls'>
         <div className='new-expense__control'>
             <label>Title</label>
             <input type="text" value={enterTitle} onChange={titleChange} />
         </div>
         <div className='new-expense__control'>
             <label>Amount</label>
             <input type="number" value={enterAmount} onChange={amountChange} min="0.01" step="0.01"/>
         </div>
         <div className='new-expense__control'>
             <label>Date</label>
             <input type="date" value={enterDate} onChange={dateChange} min="2019-01-01" max="2022-12-31"/>
         </div>
        
         <div className='new-expense__actions'>

            <button type="button" onClick={props.onCancle}> Cancl</button>
            <button type="submit"> Add Expense</button>
         </div>
     </div>
     

 </form>
  )
};
