import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <li className="expenseList">
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={() => console.log("clicked!!")}>Change title</button> */}
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
