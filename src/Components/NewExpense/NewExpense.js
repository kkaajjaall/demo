import React,{useState} from 'react';
import "./NewExpense.css"
import { ExpenseForm } from './ExpenseForm';
export const NewExpense = (props) => {
  
  const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandeler = (enteredExpenseData)=>{
      const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
      };
      props.onAddExpense(expenseData);
    }
  const startEditing=()=>{
    setIsEditing(true);
  }
  const StopEditing=()=>{
    setIsEditing(false);
  }
  return <div className='new-expense'>
      {!isEditing && <button onClick={startEditing}> Add new Expenses</button>}
     {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler} onCancle={StopEditing}/>}
  </div>;
};
