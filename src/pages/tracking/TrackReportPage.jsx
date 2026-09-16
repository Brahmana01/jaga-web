import { useState } from 'react'
import {
  Search,
  TicketCheck,
  ShieldCheck
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { useNavigate } from 'react-router-dom'

function TrackReportPage() {
  const [reportId, setReportId] = useState('')
  const navigate = useNavigate()

  const handleTrack = () => {
    if (!reportId.trim()) return
    navigate(`/status-laporan/detail?id=${encodeURIComponent(reportId)}`)
  }

  return (
    <div className="page">
      <div className="container tracking-container">

        <div className="page-header">
          <h1>Lacak Status Laporan</h1>
          <p>Masukkan nomor laporan yang kamu dapatkan setelah mengirim laporan.</p>
        </div>

        <Reveal>
        <div className="card tracking-card">

          <div className="tracking-icon">
            <TicketCheck size={34} />
          </div>

          <h2>Masukkan Nomor Laporan</h2>

          <p>
            Contoh: <strong>12</strong>
          </p>

          <div className="search-box tracking-search">
            <Search size={20} />

            <input
              placeholder="Contoh: 12"
              value={reportId}
              onChange={(e) => setReportId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
            />

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleTrack}
            >
              Lacak
            </button>
          </div>

          <div className="tracking-security">
            <ShieldCheck size={19} />
            <span>Tidak perlu login untuk melihat status laporan menggunakan nomor laporan.</span>
          </div>

        </div>
        </Reveal>

      </div>
    </div>
  )
}

export default TrackReportPage