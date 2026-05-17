import { FiActivity, FiCalendar, FiCreditCard, FiDollarSign, FiTrendingUp } from 'react-icons/fi'
import Analytics from '../components/Charts/Analytics'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseTable from '../components/ExpenseTable'
import SummaryCard from '../components/SummaryCard'
import { useExpenses } from '../context/ExpenseContext'

function Dashboard() {
  const { expenses, monthlyBudget, addExpense, deleteExpense } = useExpenses()

  const currentMonth = new Date().toISOString().slice(0, 7)
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const monthlySpending = expenses
    .filter((expense) => expense.date.slice(0, 7) === currentMonth)
    .reduce((sum, expense) => sum + expense.amount, 0)

  const remainingBudget = monthlyBudget - monthlySpending
  const recentExpenses = expenses.slice(0, 4)
  const biggestExpense = expenses.length ? Math.max(...expenses.map((expense) => expense.amount)) : 0

  return (
    <div className="page fade-in">
      <section className="welcome-card">
        <div>
          <p className="eyebrow">ExpenseIQ Overview</p>
          <h1>Track smarter. Spend calmer.</h1>
          <p>
            Your spending dashboard is ready with charts, quick stats, and recent activity in one
            clean place.
          </p>
        </div>
        <div className="welcome-balance">
          <span>Monthly budget</span>
          <strong>₹{monthlyBudget.toLocaleString('en-IN')}</strong>
          <small>₹{remainingBudget.toLocaleString('en-IN')} left</small>
        </div>
      </section>

      <section className="stats-grid">
        <SummaryCard
          title="Total Expenses"
          value={`₹${totalExpenses.toLocaleString('en-IN')}`}
          note="All-time spending"
          icon={<FiDollarSign />}
          color="green"
        />
        <SummaryCard
          title="This Month"
          value={`₹${monthlySpending.toLocaleString('en-IN')}`}
          note="Current month total"
          icon={<FiCalendar />}
          color="blue"
        />
        <SummaryCard
          title="Transactions"
          value={expenses.length}
          note="Saved locally"
          icon={<FiCreditCard />}
          color="yellow"
        />
        <SummaryCard
          title="Highest Expense"
          value={`₹${biggestExpense.toLocaleString('en-IN')}`}
          note="Largest single payment"
          icon={<FiTrendingUp />}
          color="pink"
        />
      </section>

      <section className="quick-stats-grid">
        <div className="quick-stat card">
          <FiActivity />
          <div>
            <strong>Budget health</strong>
            <span>{remainingBudget >= 0 ? 'On track this month' : 'Budget crossed'}</span>
          </div>
        </div>
        <div className="quick-stat card">
          <FiCreditCard />
          <div>
            <strong>Recent activity</strong>
            <span>{recentExpenses.length} latest transactions shown</span>
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <ExpenseForm onAddExpense={addExpense} />

        <div className="card recent-card">
          <div className="section-title">
            <h3>Recent Transactions</h3>
            <p>Latest spending activity</p>
          </div>

          <div className="recent-list">
            {recentExpenses.map((expense) => (
              <div className="recent-item" key={expense.id}>
                <div>
                  <strong>{expense.title}</strong>
                  <span>{expense.category}</span>
                </div>
                <b>₹{expense.amount.toLocaleString('en-IN')}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Analytics expenses={expenses} />

      <section className="card expense-list">
        <div className="list-header">
          <div className="section-title">
            <h3>Recent Table</h3>
            <p>Quick view of your latest expenses</p>
          </div>
        </div>
        <ExpenseTable expenses={recentExpenses} onDeleteExpense={deleteExpense} />
      </section>
    </div>
  )
}

export default Dashboard
