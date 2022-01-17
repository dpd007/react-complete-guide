import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
const Expenses = (props) => {
  const [choosedYear, setChoosedYear] = useState("2021");
  const choosedYearHandler = (filteredYear) => {
    setChoosedYear(filteredYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === choosedYear;
  });

  return (
    <div className="expenses">
      <Card>
        <ExpensesFilter
          selected={choosedYear}
          onUserFilteredYear={choosedYearHandler}
        />
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
};
export default Expenses;
