import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [enteredData, setEnteredData] = useState("2020");
  const onYearSelectedHandler = (yearData) => {
    setEnteredData(yearData);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredData;
  });

  let expensesContent = <p>No expenses Found</p>;
  if(filterExpenses.length > 0){
    expensesContent=  filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultValue={enteredData}
          OnYearSelected={onYearSelectedHandler}
        />
        {expensesContent}
        
      </Card>
    </div>
  );
}


export default Expenses;
