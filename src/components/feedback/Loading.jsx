function Loading({
  text = 'Memuat data...'
}) {

  return (

    <div className="loading-state">

      <div className="loading-spinner" />

      <span>
        {text}
      </span>

    </div>

  )
}

export default Loading