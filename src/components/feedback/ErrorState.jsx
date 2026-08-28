import {
  AlertCircle
} from 'lucide-react'

function ErrorState({
  title = 'Terjadi kesalahan',
  description = 'Data tidak dapat dimuat saat ini.',
  onRetry
}) {

  return (

    <div className="error-state">

      <div className="error-icon">
        <AlertCircle size={25} />
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      {onRetry && (

        <button
          className="btn btn-light"
          onClick={onRetry}
        >
          Coba Lagi
        </button>

      )}

    </div>

  )
}

export default ErrorState