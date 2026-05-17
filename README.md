#                                ExpenseIQ

### A modern expense tracker and budget planner built with React JS

![React](https://img.shields.io/badge/React-JS-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-Analytics-22c55e?style=for-the-badge)
![LocalStorage](https://img.shields.io/badge/Storage-localStorage-f59e0b?style=for-the-badge)

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

## 🧠 Main React Concepts Used

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

## 🧩 Challenges Faced

Some parts were a bit tricky while building this project:

- Managing expenses across different pages without making the code too complicated
- Keeping localStorage synchronized with React state
- Updating charts automatically whenever expenses change
- Making search, filter, and sort work together on the transactions page
- Designing a responsive dashboard layout for both laptop and mobile screens
- Making the UI look modern while still keeping the code readable

## 📸                        Screenshots

Add your project screenshots here after running the app.

### Dashboard

![Dashboard Screenshot](./screenshots/dashboard.png)

### Transactions Page

![Transactions Screenshot](./screenshots/transactions.png)

### Budget Planner

![Budget Planner Screenshot](./screenshots/budget-planner.png)

### Dark Mode

![Dark Mode Screenshot](./screenshots/dark-mode.png)

## 🔮 Future Improvements

- Add backend integration
- Add user authentication
- Store data in a cloud database
- Add edit transaction feature
- Export expense reports as CSV or PDF
- Add monthly spending goals
- Add AI-based expense insights
- Add better date range filters
- Add profile customization

## 🤝 Contribution

This is mainly a student learning project, but suggestions and improvements are welcome.
       
If you want to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request


