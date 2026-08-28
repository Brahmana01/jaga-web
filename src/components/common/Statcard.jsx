function StatCard({
  icon: Icon,
  label,
  value,
  description,
  tone = 'green'
}) {
  return (
    <div className="admin-stat-card">

      <div className={`admin-stat-icon ${tone}`}>
        <Icon size={21} />
      </div>

      <div className="admin-stat-content">

        <span>
          {label}
        </span>

        <strong>
          {value}
        </strong>

        <small>
          {description}
        </small>

      </div>

    </div>
  )
}

export default StatCard