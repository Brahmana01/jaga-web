import { useState, useEffect } from 'react'
import {
  Search,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  XCircle
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { useSearchParams, Link } from 'react-router-dom'
import { Badge, Card } from '../../components/common/Ui'

const statusConfig = {
  pending: { label: 'Menunggu Verifikasi', tone: 'warning', icon: Clock3 },
  diterima: { label: 'Diterima & Terverifikasi', tone: 'safe', icon: CheckCircle2 },
  ditolak: { label: 'Ditolak', tone: 'danger', icon: XCircle },
}

function ReportStatusPage() {
  const [searchParams] = useSearchParams()
  const reportId = searchParams.get('id') || ''

  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!reportId) {
      setError('Tidak ada nomor laporan yang dicari.')
      setIsLoading(false)
      return
    }

    const fetchStatus = async () => {
      setIsLoading(true)
      setError('')

      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await fetch(`${apiUrl}/report/${encodeURIComponent(reportId)}/status`)

        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message || 'Laporan tidak ditemukan')
        }

        setResult(json.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStatus()
  }, [reportId])

  if (isLoading) {
    return (
      <div className="page">
        <div className="container status-container">
          <div className="page-header">
            <h1>Memeriksa...</h1>
            <p>Mohon tunggu sebentar.</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="page">
        <div className="container status-container">
          <div className="page-header">
            <h1>Tidak Ditemukan</h1>
            <p>{error || 'Laporan dengan nomor ini tidak ditemukan.'}</p>
          </div>
          <Link to="/status-laporan" className="btn btn-primary">
            Coba Nomor Lain
          </Link>
        </div>
      </div>
    )
  }

  const statusInfo = statusConfig[result.status] || { label: result.status, tone: 'warning', icon: Clock3 }
  const StatusIcon = statusInfo.icon

  return (
    <div className="page">
      <div className="container status-container">

        <div className="page-header">
          <h1>Status Laporan</h1>
          <p>Pantau perkembangan laporan menggunakan nomor laporan kamu.</p>
        </div>

        <Reveal>
        <Card className="status-header-card">
          <div>
            <span className="muted">NOMOR LAPORAN</span>
            <h2>{result.report_id}</h2>
          </div>
          <Badge tone={statusInfo.tone}>{statusInfo.label}</Badge>
        </Card>
        </Reveal>

        <Reveal delay={120}>
        <Card>
          <div className="status-section-heading">
            <div>
              <span className="muted">APLIKASI</span>
              <h2>{result.reported_name}</h2>
            </div>
            <StatusIcon color="#079B62" />
          </div>

          <div className="status-meta">
            <div>
              <span>Kategori</span>
              <strong>{result.category}</strong>
            </div>
            <div>
              <span>Terakhir diperbarui</span>
              <strong>{new Date(result.updated_at).toLocaleString('id-ID')}</strong>
            </div>
          </div>
        </Card>
        </Reveal>

        <div className="status-help">
          <Search size={19} />
          <span>Status ini diambil langsung dari sistem JAGA secara real-time.</span>
        </div>

      </div>
    </div>
  )
}

export default ReportStatusPage