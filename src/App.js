import React,{useState}from "react";
import Expense from "./Components/Expense/Expense";
import { NewExpense } from "./Components/NewExpense/NewExpense";
const dummyexpenses = [
  {  id:1,
    title: "paper",
    amount: "$ 450",
    date: new Date(2021, 5, 12),
  },
  {  id:2,
    title: "paper1",
    amount: "$ 250",
    date: new Date(2021, 7, 12),
  },
  {  id:3,
    title: "paper2",
    amount: "$ 480",
    date: new Date(2021, 5, 2),
  },
  { id:4,
    title: "paper3",
    amount: "$ 950",
    date: new Date(2021, 5, 1),
  },
];
function App() {
  const [expenses, setExpense] = useState(dummyexpenses)
  
  const addExpenseHandeler =(expense) =>{
    console.log("in app.js");
    console.log(expense);
    // setExpense([expense,...expenses]);
     setExpense((PrevExpenses)=>{
             return [expenses,...PrevExpenses]
     });

  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler}/>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
