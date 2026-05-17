import { categoryColors, categories } from '../../data/categories'
import BarChartBox from './BarChartBox'
import PieChartBox from './PieChartBox'

function Analytics({ expenses }) {
  const categoryData = categories
    .map((category) => {
      const total = expenses
        .filter((expense) => expense.category === category)
        .reduce((sum, expense) => sum + expense.amount, 0)

      return {
        name: category,
        value: total,
        color: categoryColors[category],
      }
    })
    .filter((item) => item.value > 0)

  const weeklyData = [1, 2, 3, 4, 5].map((weekNumber) => {
    const total = expenses
      .filter((expense) => {
        const day = new Date(expense.date).getDate()
        return Math.ceil(day / 7) === weekNumber
      })
      .reduce((sum, expense) => sum + expense.amount, 0)

    return {
      week: `Week ${weekNumber}`,
      amount: total,
    }
  })

  return (
    <section className="analytics-grid card">
      <PieChartBox data={categoryData} />
      <BarChartBox data={weeklyData} />
    </section>
  )
}

export default Analytics
