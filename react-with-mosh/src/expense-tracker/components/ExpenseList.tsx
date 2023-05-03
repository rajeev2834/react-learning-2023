import React, {useState} from 'react'

interface Expense{
    id: number;
    description: string;
    amount: number;
    category: string;
}
interface Props{
    expenses: Expense[];
    onDeleteExpense: (id: number) => void;
}

const ExpenseList = ({expenses, onDeleteExpense} : Props) => {
    if (expenses.length === 0) return (
        <h2>No expenses</h2>
    );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button className="btn btn-outline-danger" onClick={() => onDeleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>Total</td>
          <td>{expenses.reduce((total, expense) => total + expense.amount, 0)}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default ExpenseList;
