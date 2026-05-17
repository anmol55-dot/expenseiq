import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useExpenses } from './context/ExpenseContext'
import BudgetPlanner from './pages/BudgetPlanner'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Transactions from './pages/Transactions'
import './App.css'

function App() {
  const { darkMode } = useExpenses()

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <div className="dashboard-shell">
        <Sidebar />

        <main className="main-content">
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budget" element={<BudgetPlanner />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
