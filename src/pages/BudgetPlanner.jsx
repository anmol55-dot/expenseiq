import { useState } from 'react'
import { FiAlertTriangle, FiCheckCircle, FiTarget } from 'react-icons/fi'
import { useExpenses } from '../context/ExpenseContext'

function BudgetPlanner() {
  const { expenses, monthlyBudget, setMonthlyBudget } = useExpenses()
  const [budgetInput, setBudgetInput] = useState(monthlyBudget)

  const currentMonth = new Date().toISOString().slice(0, 7)
  const monthlySpending = expenses
    .filter((expense) => expense.date.slice(0, 7) === currentMonth)
    .reduce((sum, expense) => sum + expense.amount, 0)

  const remainingBalance = monthlyBudget - monthlySpending
  const progressWidth = Math.min((monthlySpending / monthlyBudget) * 100, 100)

  function saveBudget(event) {
    event.preventDefault()
    setMonthlyBudget(Number(budgetInput))
  }

  return (
    <div className="page fade-in">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Plan your month</p>
          <h1>Budget Planner</h1>
        </div>
      </section>

      <section className="budget-grid">
        <div className="card budget-card">
          <div className="section-title">
            <h3>Monthly Budget</h3>
            <p>Set a simple target for this month</p>
          </div>

          <form className="budget-form" onSubmit={saveBudget}>
            <label>
              Budget amount
              <input
                type="number"
                min="1"
                value={budgetInput}
                onChange={(event) => setBudgetInput(event.target.value)}
              />
            </label>
            <button className="primary-button" type="submit">
              Save Budget
            </button>
          </form>

          <div className="budget-progress-info">
            <span>Spent: ₹{monthlySpending.toLocaleString('en-IN')}</span>
            <span>Budget: ₹{monthlyBudget.toLocaleString('en-IN')}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressWidth}%` }}></div>
          </div>

          <div className={remainingBalance >= 0 ? 'budget-message good' : 'budget-message warning'}>
            {remainingBalance >= 0 ? <FiCheckCircle /> : <FiAlertTriangle />}
            <span>
              {remainingBalance >= 0
                ? `You still have ₹${remainingBalance.toLocaleString('en-IN')} remaining.`
                : `You crossed your budget by ₹${Math.abs(remainingBalance).toLocaleString('en-IN')}.`}
            </span>
          </div>
        </div>

        <div className="card tips-card">
          <div className="section-title">
            <h3>Savings Tips</h3>
            <p>Small habits that help</p>
          </div>

          <div className="tip-list">
            <div>
              <FiTarget />
              <span>Set a weekly spending limit and check it every Sunday.</span>
            </div>
            <div>
              <FiTarget />
              <span>Separate needs and wants before making a purchase.</span>
            </div>
            <div>
              <FiTarget />
              <span>Review food and transport expenses first because they repeat often.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BudgetPlanner
