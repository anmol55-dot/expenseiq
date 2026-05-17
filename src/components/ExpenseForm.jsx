import { Plus } from 'lucide-react'
import { useState } from 'react'
import { categories } from '../data/categories'

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  function handleSubmit(event) {
    event.preventDefault()

    if (!title || !amount || !date) {
      alert('Please fill all fields')
      return
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    }

    onAddExpense(newExpense)
    setTitle('')
    setAmount('')
    setCategory('Food')
    setDate(new Date().toISOString().slice(0, 10))
  }

  return (
    <form className="expense-form card" onSubmit={handleSubmit}>
      <div className="section-title">
        <h3>Add Expense</h3>
        <p>Track a new payment</p>
      </div>

      <label>
        Title
        <input
          type="text"
          placeholder="Coffee, books, rent..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label>
        Amount
        <input
          type="number"
          min="1"
          placeholder="1200"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </label>

      <label>
        Category
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((categoryName) => (
            <option key={categoryName} value={categoryName}>
              {categoryName}
            </option>
          ))}
        </select>
      </label>

      <label>
        Date
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>

      <button className="primary-button" type="submit">
        <Plus size={18} />
        Add Expense
      </button>
    </form>
  )
}

export default ExpenseForm
