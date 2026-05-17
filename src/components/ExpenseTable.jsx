import { FiTrash2 } from 'react-icons/fi'
import { categoryColors } from '../data/categories'

function ExpenseTable({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">₹</div>
        <h3>No transactions found</h3>
        <p>Try changing your search or filters, or add a new expense from the dashboard.</p>
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
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>
                <div className="transaction-name">
                  <span style={{ backgroundColor: categoryColors[expense.category] }}></span>
                  <strong>{expense.title}</strong>
                </div>
              </td>
              <td>{expense.category}</td>
              <td>{new Date(expense.date).toLocaleDateString('en-IN')}</td>
              <td className="amount-cell">₹{expense.amount.toLocaleString('en-IN')}</td>
              <td>
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => onDeleteExpense(expense.id)}
                  aria-label={`Delete ${expense.title}`}
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseTable
