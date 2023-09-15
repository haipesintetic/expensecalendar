import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const[isEditing,SetIsEditing]=useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    SetIsEditing(false);
  }
  function startEditingHandler(){
    SetIsEditing(true);
  }
  function stopEditingHandler(){
    SetIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}> Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> }
    </div>
  );
}
export default NewExpense;
