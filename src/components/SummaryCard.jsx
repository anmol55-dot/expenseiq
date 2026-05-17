function SummaryCard({ title, value, note, icon, color }) {
  return (
    <div className="summary-card card">
      <span className={`summary-icon ${color}`}>{icon}</span>
      <div>
        <p>{title}</p>
        <h3>{value}</h3>
        <small>{note}</small>
      </div>
    </div>
  )
}

export default SummaryCard
