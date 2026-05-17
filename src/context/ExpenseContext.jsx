import { createContext, useContext, useEffect, useState } from 'react'
import { getStoredData, saveStoredData } from '../utils/localStorage'

const ExpenseContext = createContext()

const sampleExpenses = [
  {
    id: 1,
    title: 'Metro card recharge',
    amount: 450,
    category: 'Transport',
    date: '2026-05-03',
  },
  {
    id: 2,
    title: 'Pizza night',
    amount: 780,
    category: 'Food',
    date: '2026-05-06',
  },
  {
    id: 3,
    title: 'Data pack',
    amount: 299,
    category: 'Bills',
    date: '2026-05-09',
  },
  {
    id: 4,
    title: 'Notebook set',
    amount: 340,
    category: 'Education',
    date: '2026-05-12',
  },
]

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    return getStoredData('expenseiq-expenses', sampleExpenses)
  })

  const [monthlyBudget, setMonthlyBudget] = useState(() => {
    return getStoredData('expenseiq-budget', 12000)
  })

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('expenseiq-theme') === 'dark'
  })

  useEffect(() => {
    saveStoredData('expenseiq-expenses', expenses)
  }, [expenses])

  useEffect(() => {
    saveStoredData('expenseiq-budget', monthlyBudget)
  }, [monthlyBudget])

  useEffect(() => {
    localStorage.setItem('expenseiq-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  function addExpense(newExpense) {
    setExpenses([newExpense, ...expenses])
  }

  function deleteExpense(expenseId) {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId))
  }

  const contextValue = {
    expenses,
    monthlyBudget,
    setMonthlyBudget,
    darkMode,
    setDarkMode,
    addExpense,
    deleteExpense,
  }

  return <ExpenseContext.Provider value={contextValue}>{children}</ExpenseContext.Provider>
}

// Keeping the small helper here makes this project easier to read as a student project.
// eslint-disable-next-line react-refresh/only-export-components
export function useExpenses() {
  return useContext(ExpenseContext)
}
