import { useState } from 'react'

import {
  CheckCircle2,
  Smartphone,
  Phone,
  AlertTriangle,
  FileText
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { useNavigate } from 'react-router-dom'

import Stepper from '../../components/forms/Stepper'
import { Badge } from '../../components/common/Ui'
import { useReport } from '../../context/ReportContext'

const severityLabels = {
  ringan: 'Baru mengisi data',
  sedang: 'Sudah melakukan transfer',
  berat: 'Mendapat ancaman',
}

function ReportReviewPage() {
  const { reportData, setReportResult } = useReport()
  const navigate = useNavigate()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError('')

    try {

      console.log('ISI reportData SAAT SUBMIT:', reportData)

      
      const formData = new FormData()

      formData.append('category', reportData.category)
      formData.append('reported_name', reportData.reportedName)
      formData.append('reported_account_or_wa', reportData.reportedAccountOrWA)
      formData.append('description', reportData.description)
      formData.append('severity', reportData.severity)
      formData.append('is_anonymous', reportData.isAnonymous ? 'true' : 'false')

      if (!reportData.isAnonymous) {
        formData.append('contact_name', reportData.contactName)
        formData.append('contact_email', reportData.contactEmail)
        formData.append('contact_phone', reportData.contactPhone)
      }

      reportData.evidenceFiles.forEach((file) => {
        formData.append('evidence', file)
      })

      const apiUrl = import.meta.env.VITE_API_URL
      const response = await fetch(`${apiUrl}/report/submit`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Gagal mengirim laporan')
      }

      const json = await response.json()
      setReportResult(json.data)
      navigate('/laporkan/berhasil')

    } catch (err) {
      setSubmitError('Terjadi kesalahan saat mengirim laporan. Coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page">
      <div className="container report-container">

        <div className="page-header">
          <h1>Review Laporan</h1>
          <p>Periksa kembali informasi sebelum laporan dikirim.</p>
        </div>

        <Stepper currentStep={3} />

        <Reveal>
        <div className="review-layout">

          <div className="card">

            <div className="review-header">
              <div>
                <Badge tone="danger">SEGERA DITINJAU</Badge>
                <h2>{reportData.reportedName}</h2>
              </div>
              <CheckCircle2 color="#079B62" size={30} />
            </div>

            <div className="divider" />

            <div className="review-row">
              <Smartphone size={18} />
              <div>
                <span>Aplikasi</span>
                <strong>{reportData.reportedName}</strong>
              </div>
            </div>

            <div className="review-row">
              <Phone size={18} />
              <div>
                <span>Kontak</span>
                <strong>{reportData.reportedAccountOrWA || '-'}</strong>
              </div>
            </div>

            <div className="review-row">
              <AlertTriangle size={18} />
              <div>
                <span>Kondisi</span>
                <strong>{severityLabels[reportData.severity]}</strong>
              </div>
            </div>

            <div className="review-row">
              <FileText size={18} />
              <div>
                <span>Bukti</span>
                <strong>{reportData.evidenceFiles.length} file</strong>
              </div>
            </div>

          </div>

          <div className="card review-notice">
            <h3>Sebelum dikirim</h3>
            <ul>
              <li>Pastikan informasi yang dimasukkan benar.</li>
              <li>Jangan memasukkan password atau OTP.</li>
              <li>Bukti hanya digunakan untuk proses pemeriksaan.</li>
            </ul>
          </div>

        </div>
        </Reveal>

        {submitError && (
          <p style={{ color: 'red', marginTop: 12 }}>{submitError}</p>
        )}

        <div className="review-actions">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => navigate('/laporkan/bukti')}
            disabled={isSubmitting}
          >
            ← Kembali
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Laporan'}
          </button>
        </div>

      </div>
    </div>
  )
}

export default ReportReviewPage