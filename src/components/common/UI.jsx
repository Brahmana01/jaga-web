function Card({
  children,
  className = ''
}) {

  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}


function Badge({
  children,
  tone = 'safe'
}) {

  return (
    <span
      className={`badge badge-${tone}`}
    >
      {children}
    </span>
  )
}


export {
  Card,
  Badge
}