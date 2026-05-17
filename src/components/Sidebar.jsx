import { NavLink } from 'react-router-dom'
import { FiBarChart2, FiCreditCard, FiHome, FiPieChart, FiUser } from 'react-icons/fi'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <FiPieChart />
        </div>
        <div>
          <h1>ExpenseIQ</h1>
          <p>Money made clear</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/">
          <FiHome />
          Dashboard
        </NavLink>
        <NavLink to="/transactions">
          <FiCreditCard />
          Transactions
        </NavLink>
        <NavLink to="/budget">
          <FiBarChart2 />
          Budget Planner
        </NavLink>
        <NavLink to="/profile">
          <FiUser />
          Profile
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
