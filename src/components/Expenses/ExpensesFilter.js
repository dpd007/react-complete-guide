import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onUserFilteredYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangeHandler}>
          <option value={props.selected}>{props.selected}</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
