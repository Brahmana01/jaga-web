import {
  Inbox
} from 'lucide-react'

function EmptyState({
  title = 'Belum ada data',
  description = 'Data yang kamu cari belum tersedia.'
}) {

  return (

    <div className="empty-state">

      <div className="empty-icon">
        <Inbox size={25} />
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

    </div>

  )
}

export default EmptyState