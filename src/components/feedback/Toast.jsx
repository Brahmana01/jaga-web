import {
  CheckCircle2,
  X
} from 'lucide-react'

function Toast({
  message,
  onClose
}) {

  return (

    <div className="toast">

      <CheckCircle2
        size={20}
        className="toast-icon"
      />

      <span>
        {message}
      </span>

      <button
        onClick={onClose}
      >
        <X size={16} />
      </button>

    </div>

  )
}

export default Toast