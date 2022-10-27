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
 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter  defaultValue={enteredData} OnYearSelected={onYearSelectedHandler} />
        <ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        />
        ,
        <ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        />
        ,
        <ExpenseItem
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        />
        ,
        <ExpenseItem
          title={props.items[3].title}
          date={props.items[3].date}
          amount={props.items[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
