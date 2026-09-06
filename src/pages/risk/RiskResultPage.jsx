import { useEffect, useState } from 'react'

import {
  AlertTriangle,
  CheckCircle2,
  Flag,
  ShieldAlert,
} from 'lucide-react'

import { Link, useSearchParams } from 'react-router-dom'

import { Card, Badge } from '../../components/common/Ui'

const statusConfig = {
  aman: { label: 'AMAN', tone: 'safe' },
  mirip_waspada: { label: 'WASPADA', tone: 'warning' },
  terkonfirmasi_bahaya: { label: 'BAHAYA', tone: 'danger' },
}

function RiskResultPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!query) {
      setError('Tidak ada nama yang diperiksa.')
      setIsLoading(false)
      return
    }

    const fetchResult = async () => {
      setIsLoading(true)
      setError('')

      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await fetch(
          `${apiUrl}/check/search?q=${encodeURIComponent(query)}`
        )

        if (!response.ok) {
          throw new Error('Gagal memeriksa aplikasi')
        }

        const json = await response.json()
        setResult(json.data)
      } catch (err) {
        setError('Terjadi kesalahan saat memeriksa. Coba lagi nanti.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchResult()
  }, [query])

  if (isLoading) {
    return (
      <div className="page">
        <div className="container">
          <div className="page-header">
            <h1>Memeriksa...</h1>
            <p>Mohon tunggu sebentar, kami sedang mencocokkan data.</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="page">
        <div className="container">
          <div className="page-header">
            <h1>Terjadi Kesalahan</h1>
            <p>{error || 'Hasil tidak ditemukan.'}</p>
          </div>
          <Link to="/cek-aplikasi" className="btn btn-primary">
            Kembali ke Pencarian
          </Link>
        </div>
      </div>
    )
  }

  const statusInfo =
    statusConfig[result.status] || { label: result.status, tone: 'warning' }

  return (
    <div className="page">
      <div className="container">

        <div className="page-header">
          <h1>Hasil Pemeriksaan</h1>
          <p>Berikut hasil analisis untuk "{query}".</p>
        </div>

        <div className="risk-layout">

          <div className="stack">

            <Card>
              <Badge tone={statusInfo.tone}>
                {statusInfo.label}
              </Badge>

              <h2 style={{ marginTop: 12 }}>
                {result.matched_name || query}
              </h2>

              {result.report_count > 0 && (
                <p className="muted">
                  Sudah dilaporkan {result.report_count} kali
                </p>
              )}
            </Card>

            <Card>
              <div className="row between">
                <h3>Penjelasan</h3>
                <ShieldAlert size={21} color="#F59E0B" />
              </div>
              <p className="muted" style={{ marginTop: 10 }}>
                {result.message}
              </p>
            </Card>

          </div>

          <div className="stack">

            <Card className="recommendation-card">
              <AlertTriangle size={32} color="#F59E0B" />
              <h3>Rekomendasi JAGA</h3>
              <p>
                Jangan memberikan data pribadi atau melakukan transfer
                sebelum informasi aplikasi benar-benar terverifikasi.
              </p>
              <Link to="/edukasi" className="btn btn-light">
                Pelajari Keamanan
              </Link>
            </Card>

            <Card>
              <CheckCircle2 size={28} color="#079B62" />
              <h3>Kamu menemukan sesuatu?</h3>
              <p>
                Jika aplikasi ini mencurigakan, bantu pengguna lain
                dengan mengirimkan laporan.
              </p>
              <Link
                to="/laporkan"
                className="btn btn-danger"
                style={{ width: '100%', marginTop: 15 }}
              >
                <Flag size={16} />
                Laporkan
              </Link>
            </Card>

          </div>

        </div>
      </div>
    </div>
  )
}

export default RiskResultPage