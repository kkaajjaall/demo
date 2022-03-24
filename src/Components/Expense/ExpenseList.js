import React from 'react';
import "../Expense/ExpenseList.css";
import ExpenseItems from './ExpenseItems';
 const ExpenseList = (props) => {
    
    if(props.items.length === 0){
        return <h2 className='expense-list__fallback'>no data availble</h2>; }
        return(
        props.items.map((exp) =>(
      <ExpenseItems
      key={exp.id}
      title={exp.title}
      amount={exp.amount}
      date={exp.date}/>)))
  };
  
export default ExpenseList;