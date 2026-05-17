import { FiTrash2 } from 'react-icons/fi'
import { categoryColors } from '../data/categories'

function ExpenseTable({
  expenses,
  onDeleteExpense,
  emptyTitle = 'No transactions found',
  emptyMessage = 'Try changing your search or filters, or add a new expense from the dashboard.',
}) {
  const expenseList = Array.isArray(expenses) ? expenses : []

  if (expenseList.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">₹</div>
        <h3>{emptyTitle}</h3>
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense) => {
            const expenseTitle = expense.title || expense.name || 'Untitled expense'
            const expenseCategory = expense.category || 'Other'
            const expenseAmount = Number(expense.amount) || 0

            return (
              <tr key={expense.id}>
                <td>
                  <div className="transaction-name">
                    <span style={{ backgroundColor: categoryColors[expenseCategory] || categoryColors.Other }}></span>
                    <strong>{expenseTitle}</strong>
                  </div>
                </td>
                <td>{expenseCategory}</td>
                <td>{new Date(expense.date).toLocaleDateString('en-IN')}</td>
                <td className="amount-cell">₹{expenseAmount.toLocaleString('en-IN')}</td>
                <td>
                  <button
                    className="delete-button"
                    type="button"
                    onClick={() => onDeleteExpense(expense.id)}
                    aria-label={`Delete ${expenseTitle}`}
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseTable
