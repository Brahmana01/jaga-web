import { useState, useEffect } from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  Smartphone,
  Phone,
  CalendarDays,
  FileText,
  Image as ImageIcon
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link, useParams } from 'react-router-dom'
import { Badge, Card } from '../../components/common/Ui'

const categoryLabels = {
  pinjol_ilegal: 'Pinjol Ilegal',
  judi_online: 'Judi Online',
  investasi_bodong: 'Investasi Bodong',
  lainnya: 'Lainnya',
}

const severityLabels = {
  ringan: 'Ringan',
  sedang: 'Sedang',
  berat: 'Berat',
}

const statusLabels = {
  pending: 'Menunggu',
  diterima: 'Terverifikasi',
  ditolak: 'Ditolak',
}

const statusTone = {
  pending: 'warning',
  diterima: 'safe',
  ditolak: 'danger',
}

function EvidenceImage({ evidenceId, fileName }) {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const token = localStorage.getItem('jaga_token')

        const response = await fetch(`${apiUrl}/report/evidence/${evidenceId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        setImageUrl(url)

      } catch (err) {
        console.error('Gagal memuat bukti:', err)
      }
    }

    fetchImage()
  }, [evidenceId])

  if (!imageUrl) {
    return (
      <div className="evidence-preview">
        <div><ImageIcon size={30} /></div>
        <span>Memuat {fileName}...</span>
      </div>
    )
  }

  return (
    <div className="evidence-preview">
      <img src={imageUrl} alt={fileName} style={{ maxWidth: '100%', borderRadius: 8 }} />
      <span>{fileName}</span>
    </div>
  )
}

function ReportDetailPage() {
  const { id } = useParams()

  const [report, setReport] = useState(null)
  const [evidences, setEvidences] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [note, setNote] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)

  const fetchDetail = async () => {
    setIsLoading(true)
    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const token = localStorage.getItem('jaga_token')

      const response = await fetch(`${apiUrl}/report/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      const json = await response.json()
      setReport(json.data.report)
      setEvidences(json.data.evidences || [])

    } catch (err) {
      console.error('Gagal memuat detail laporan:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDetail()
  }, [id])

  const handleVerify = async (newStatus) => {
    setIsVerifying(true)
    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const token = localStorage.getItem('jaga_token')

      const response = await fetch(`${apiUrl}/report/${id}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus, note }),
      })

      if (!response.ok) {
        const json = await response.json()
        throw new Error(json.message || 'Gagal memperbarui status')
      }

      await fetchDetail()

    } catch (err) {
      alert(err.message)
    } finally {
      setIsVerifying(false)
    }
  }

  if (isLoading) {
    return <div>Memuat detail laporan...</div>
  }

  if (!report) {
    return <div>Laporan tidak ditemukan.</div>
  }

  return (
    <div>

      <Link to="/admin/laporan" className="admin-back">
        <ArrowLeft size={16} />
        Kembali ke Laporan
      </Link>

      <div className="admin-page-header">
        <div>
          <span>DETAIL LAPORAN</span>
          <h1>{report.ID}</h1>
          <p>Dikirim pada {new Date(report.CreatedAt).toLocaleString('id-ID')}</p>
        </div>

        <Badge tone={statusTone[report.Status] || 'warning'}>
          {statusLabels[report.Status] || report.Status}
        </Badge>
      </div>

      <Reveal>
      <div className="detail-layout">

        <div className="stack">

          <Card>
            <div className="detail-card-header">
              <h2>Informasi Laporan</h2>
              <FileText size={20} />
            </div>

            <div className="detail-info-grid">
              <div>
                <span>Aplikasi</span>
                <strong><Smartphone size={16} />{report.ReportedName}</strong>
              </div>

              <div>
                <span>Kategori</span>
                <strong>{categoryLabels[report.Category] || report.Category}</strong>
              </div>

              <div>
                <span>Kontak/Rekening</span>
                <strong><Phone size={16} />{report.ReportedAccountOrWA || '-'}</strong>
              </div>

              <div>
                <span>Status Pelapor</span>
                <strong>{report.IsAnonymous ? 'Anonim' : 'Bersedia Dikontak'}</strong>
              </div>

              <div>
                <span>Waktu</span>
                <strong><CalendarDays size={16} />{new Date(report.CreatedAt).toLocaleDateString('id-ID')}</strong>
              </div>
            </div>
          </Card>

          <Card>
            <div className="detail-card-header">
              <h2>Kronologi</h2>
            </div>
            <p className="detail-description">{report.Description}</p>
          </Card>

          <Card>
            <div className="detail-card-header">
              <h2>Bukti Laporan</h2>
              <ImageIcon size={20} />
            </div>

            {evidences.length === 0 ? (
              <p className="muted">Tidak ada bukti yang dilampirkan.</p>
            ) : (
              <div className="evidence-preview-grid">
                {evidences.map((ev) => (
                  <EvidenceImage key={ev.ID} evidenceId={ev.ID} fileName={ev.FileName} />
                ))}
              </div>
            )}
          </Card>

        </div>

        <div className="stack">

          {report.Status === 'pending' && (
            <Card className="verification-card">
              <div className="verification-heading">
                <ShieldAlert size={28} />
                <div>
                  <h2>Verifikasi</h2>
                  <p>Tentukan hasil pemeriksaan laporan ini.</p>
                </div>
              </div>

              <button
                className="verify-button accept"
                onClick={() => handleVerify('diterima')}
                disabled={isVerifying}
              >
                <CheckCircle2 size={18} />
                {isVerifying ? 'Memproses...' : 'Verifikasi Laporan'}
              </button>

              <button
                className="verify-button reject"
                onClick={() => handleVerify('ditolak')}
                disabled={isVerifying}
              >
                <XCircle size={18} />
                {isVerifying ? 'Memproses...' : 'Tolak Laporan'}
              </button>

              <textarea
                className="input"
                rows="5"
                placeholder="Catatan verifikator..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Card>
          )}

          <Card>
            <h3>Status Saat Ini</h3>
            <div className="current-status">
              <span>Status</span>
              <Badge tone={statusTone[report.Status] || 'warning'}>
                {statusLabels[report.Status] || report.Status}
              </Badge>
            </div>
          </Card>

        </div>

      </div>
      </Reveal>

    </div>
  )
}

export default ReportDetailPage