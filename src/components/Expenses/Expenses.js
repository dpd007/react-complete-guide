import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [choosedYear, setChoosedYear] = useState("2021");
  const choosedYearHandler = (filteredYear) => {
    setChoosedYear(filteredYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === choosedYear;
  });
  let expenseContent = <p>No expenses found</p>;
  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div className="expenses">
      <Card>
        <ExpensesFilter
          selected={choosedYear}
          onUserFilteredYear={choosedYearHandler}
        />
        {/* there is no data */}
        {/* {filteredExpense.length === 0 && expenseContent} */}

        {/* there is data */}
        {/* {filteredExpense.length > 0 &&
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {expenseContent}
      </Card>
    </div>
  );
};
export default Expenses;
