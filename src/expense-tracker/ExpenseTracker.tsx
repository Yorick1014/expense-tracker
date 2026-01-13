import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export default function ExpenseTracker() {
  const [selected, setSelected] = useState<string>("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const visableExpenses = selected
    ? expenses.filter((expense) => expense.category === selected)
    : expenses;

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="w-75 mx-auto mt-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>

      <div className="w-75 mx-auto mt-5">
        <ExpenseFilter setSelected={setSelected}></ExpenseFilter>
      </div>
      <div className="w-75 mx-auto mt-2">
        <ExpenseList
          expenses={visableExpenses}
          onDelete={handleDelete}
        ></ExpenseList>
      </div>
    </>
  );
}
