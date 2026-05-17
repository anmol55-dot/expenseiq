#                                ExpenseIQ

### A modern expense tracker and budget planner built with React JS

## 📌 Project Description

**ExpenseIQ** is a frontend-only Expense Tracker and Budget Planner web app made using **React JS**. It helps users add daily expenses, view transaction history, understand spending patterns with charts, and manage a monthly budget.

This project does not use any backend, Firebase, authentication, or database. All the data is stored in the browser using **localStorage**, so expenses stay saved even after refreshing the page.

I built this project mainly to practice React concepts like components, props, state management, routing, event handling, charts, and localStorage in a practical way.

## ✨ Features

- Dashboard analytics with summary cards
- Add and track expenses
- Monthly budget planner
- Budget progress bar and remaining balance
- Pie chart for category-wise spending
- Bar chart for weekly spending analysis
- Full transaction history
- Search expenses by title
- Filter transactions by category
- Sort transactions by amount and date
- Delete transactions
- Responsive design for mobile and desktop
- Dark mode toggle
- Sidebar navigation with active links
- Data persistence using localStorage

## 🛠️ Tech Stack

- **React JS**
- **Vite**
- **React Router DOM**
- **Recharts**
- **React Icons**
- **CSS**
- **localStorage**

## 🧱 Project Architecture

The project follows a simple component-based structure.

- Pages are stored inside the `pages` folder.
- Reusable UI parts like the sidebar, navbar, cards, forms, and tables are inside the `components` folder.
- Chart-related components are kept inside `components/Charts`.
- Shared expense data is handled using a simple React Context file.
- Data is saved and loaded from localStorage through a small utility file.
- React Router is used to move between Dashboard, Transactions, Budget Planner, and Profile pages.

The app keeps the logic simple and beginner-friendly. Most of the work is handled using `useState`, `useEffect`, props, and basic array methods like `map`, `filter`, `sort`, and `reduce`.

## 📁 Folder Structure

```text
src/
├── components/
│   ├── Charts/
│   │   ├── Analytics.jsx
│   │   ├── BarChartBox.jsx
│   │   └── PieChartBox.jsx
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── SummaryCard.jsx
│   ├── ExpenseForm.jsx
│   └── ExpenseTable.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   ├── BudgetPlanner.jsx
│   └── Profile.jsx
│
├── context/
│   └── ExpenseContext.jsx
│
├── data/
│   └── categories.js
│
├── utils/
│   └── localStorage.js
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```



## 🚀 How the Project Works 

The project flow is simple:

1. The user adds an expense using the expense form.
2. The expense is stored in React state.
3. The updated expense list is saved to localStorage.
4. When the page refreshes, the saved data is loaded back from localStorage.
5. The dashboard totals update automatically.
6. The pie chart and bar chart calculate analytics dynamically from the expense list.
7. The transactions page uses the same data for search, filtering, sorting, and deleting.
8. The budget planner compares monthly spending with the saved monthly budget.

This makes the app feel like a real expense tracker without needing a backend.

##  Main React Concepts Used

### Components

The UI is divided into smaller files like `Sidebar`, `Navbar`, `ExpenseForm`, `ExpenseTable`, and chart components.

### Props

Props are used to pass data from one component to another, especially in reusable cards and chart components.

### useState

`useState` is used for expenses, budget value, dark mode, search text, filters, and form inputs.

### useEffect

`useEffect` is used to save updated expenses, budget, and theme settings into localStorage.

### React Router

React Router is used for creating multiple pages:

- Dashboard
- Transactions
- Budget Planner
- Profile

### Conditional Rendering

Conditional rendering is used for empty transaction states, budget warning messages, and dark mode styles.

### Event Handling

Events are used for adding expenses, deleting transactions, updating filters, searching, sorting, and saving budget values.

### Mapping Lists

The project uses `.map()` to display expenses, categories, summary cards, tips, and chart data.

