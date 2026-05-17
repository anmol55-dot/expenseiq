import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import ExpenseTable from '../components/ExpenseTable'
import { useExpenses } from '../context/ExpenseContext'
import { categories } from '../data/categories'

function Transactions() {
  const { expenses, deleteExpense } = useExpenses()
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('date-new')

  const filteredExpenses = expenses
    .filter((expense) => {
      const titleMatches = expense.title.toLowerCase().includes(searchText.toLowerCase())
      const categoryMatches = selectedCategory === 'All' || expense.category === selectedCategory
      return titleMatches && categoryMatches
    })
    .sort((a, b) => {
      if (sortBy === 'amount-high') return b.amount - a.amount
      if (sortBy === 'amount-low') return a.amount - b.amount
      if (sortBy === 'date-old') return new Date(a.date) - new Date(b.date)
      return new Date(b.date) - new Date(a.date)
    })

  return (
    <div className="page fade-in">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Full expense history</p>
          <h1>Transactions</h1>
        </div>
      </section>

      <section className="card transaction-controls">
        <div className="search-input">
          <FiSearch />
          <input
            type="text"
            placeholder="Search by title..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>

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
            <p>{filteredExpenses.length} transactions found</p>
          </div>
        </div>

        <ExpenseTable expenses={filteredExpenses} onDeleteExpense={deleteExpense} />
      </section>
    </div>
  )
}

export default Transactions
