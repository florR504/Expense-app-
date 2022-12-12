
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
  const [enteredData, setEnteredData] = useState("2020");
  const onYearSelectedHandler = (yearData) => {
    setEnteredData(yearData);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredData;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultValue={enteredData}
          OnYearSelected={onYearSelectedHandler}
        />
        <ExpensesChart expenses={filterExpenses}/>
       <ExpensesList items={filterExpenses} />
        
      </Card>
    </div>
  );
}


export default Expenses;
