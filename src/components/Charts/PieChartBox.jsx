import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

function PieChartBox({ data }) {
  return (
    <div className="chart-box">
      <div className="section-title">
        <h3>Category Breakdown</h3>
        <p>Spending by category</p>
      </div>

      <div className="chart-area">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={58} outerRadius={90} paddingAngle={4}>
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PieChartBox
