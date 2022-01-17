import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  const [showForm, setShowForm] = useState(false);
  const addExpenseBtnHandler = () => {
    setShowForm(true);
  };
  const resetExpenseBtnHandler = () => {
    setShowForm(false);
  };
  let form = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseHandler}
      onCancel={resetExpenseBtnHandler}
    />
  );
  let addBtn = (
    <button type="button" onClick={addExpenseBtnHandler}>
      Add Expense
    </button>
  );
  return <div className="new-expense">{showForm === true ? form : addBtn}</div>;
};

export default NewExpense;
