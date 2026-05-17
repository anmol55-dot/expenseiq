import { FiBell, FiMoon, FiSearch, FiSun } from 'react-icons/fi'
import { useExpenses } from '../context/ExpenseContext'

function Navbar() {
  const { darkMode, setDarkMode } = useExpenses()

  return (
    <header className="navbar">
      <div>
        <p className="eyebrow">Personal finance dashboard</p>
        <h2>Welcome back, Anmol</h2>
      </div>

      <div className="nav-actions">
        <div className="search-box">
          <FiSearch />
          <span>Search expenses</span>
        </div>

        <button className="icon-button" type="button" aria-label="Notifications">
          <FiBell />
        </button>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
