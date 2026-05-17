import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { useExpenses } from '../context/ExpenseContext'
import { categories, categoryColors } from '../data/categories'

function Transactions() {
  const { expenses, deleteExpense } = useExpenses()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('date-new')

  const expenseList = Array.isArray(expenses) ? expenses : []

  const visibleExpenses = expenseList
    .filter((expense) => {
      return selectedCategory === 'All' || expense.category === selectedCategory
    })
    .sort((a, b) => {
      if (sortBy === 'amount-high') return Number(b.amount) - Number(a.amount)
      if (sortBy === 'amount-low') return Number(a.amount) - Number(b.amount)
      if (sortBy === 'date-old') return new Date(a.date) - new Date(b.date)
      return new Date(b.date) - new Date(a.date)
    })

  function getExpenseTitle(expense) {
    return expense.title || expense.name || 'Untitled expense'
  }

  function getExpenseCategory(expense) {
    return expense.category || 'Other'
  }

  return (
    <div className="page fade-in">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Full expense history</p>
          <h1>Transactions</h1>
        </div>
      </section>

      <section className="card transaction-controls">
        <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="date-new">Newest First</option>
          <option value="date-old">Oldest First</option>
          <option value="amount-high">Amount High to Low</option>
          <option value="amount-low">Amount Low to High</option>
        </select>
      </section>

      <section className="card expense-list">
        <div className="list-header">
          <div className="section-title">
            <h3>All Transactions</h3>
            <p>{visibleExpenses.length} transactions shown</p>
          </div>
        </div>

        {visibleExpenses.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">₹</div>
            <h3>No transactions found</h3>
            <p>Try changing the category filter or add a new expense from the dashboard.</p>
          </div>
        ) : (
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
                {visibleExpenses.map((expense) => {
                  const expenseTitle = getExpenseTitle(expense)
                  const expenseCategory = getExpenseCategory(expense)
                  const expenseAmount = Number(expense.amount) || 0

                  return (
                    <tr key={expense.id}>
                      <td>
                        <div className="transaction-name">
                          <span
                            style={{ backgroundColor: categoryColors[expenseCategory] || categoryColors.Other }}
                          ></span>
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
                          onClick={() => deleteExpense(expense.id)}
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
        )}
      </section>
    </div>
  )
}

export default Transactions
