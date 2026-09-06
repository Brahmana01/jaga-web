import {
  Smartphone,
  Phone,
  AlertCircle,
  MessageSquare,
  User,
  Mail
} from 'lucide-react'
import Reveal from '../../components/animation/Reveal'
import { useNavigate } from 'react-router-dom'

import Stepper from '../../components/forms/Stepper'
import { useReport } from '../../context/ReportContext'

const severityOptions = [
  { value: 'ringan', label: 'Baru mengisi data' },
  { value: 'sedang', label: 'Sudah melakukan transfer' },
  { value: 'berat', label: 'Mendapat ancaman' },
]

function ReportFormPage() {
  const { reportData, updateField } = useReport()
  const navigate = useNavigate()

  const handleNext = () => {
  if (!reportData.reportedName.trim() || !reportData.description.trim()) {
    alert('Nama aplikasi dan cerita kejadian wajib diisi.')
    return
  }

  if (!reportData.isAnonymous) {
    if (!reportData.contactName.trim() || !reportData.contactEmail.trim() || !reportData.contactPhone.trim()) {
      alert('Karena kamu memilih tidak anonim, nama, email, dan nomor HP wajib diisi.')
      return
    }
  }

  navigate('/laporkan/bukti')
}

  return (
    <div className="page">
      <div className="container report-container">

        <div className="page-header">
          <h1>Buat Laporan</h1>
          <p>Isi informasi kejadian secara jelas dan sesuai fakta.</p>
        </div>

        <Stepper currentStep={1} />

        <Reveal delay={100}>
        <div className="card report-form-card">

          <div className="form-section-title">
            <div>
              <h2>Informasi Kejadian</h2>
              <p>Berikan informasi dasar mengenai aplikasi atau pihak yang dilaporkan.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-field">
              <label>Nama Aplikasi</label>
              <div className="input-icon">
                <Smartphone size={18} />
                <input
                  className="input"
                  placeholder="Contoh: DanaCepatt"
                  value={reportData.reportedName}
                  onChange={(e) => updateField('reportedName', e.target.value)}
                />
              </div>
            </div>

            <div className="form-field">
              <label>Nomor / Kontak Terkait</label>
              <div className="input-icon">
                <Phone size={18} />
                <input
                  className="input"
                  placeholder="Contoh: 0812xxxx"
                  value={reportData.reportedAccountOrWA}
                  onChange={(e) => updateField('reportedAccountOrWA', e.target.value)}
                />
              </div>
            </div>

            <div className="form-field">
              <label>Kondisi yang Dialami</label>
              <div className="input-icon">
                <AlertCircle size={18} />
                <select
                  className="input"
                  value={reportData.severity}
                  onChange={(e) => updateField('severity', e.target.value)}
                >
                  {severityOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label>Kategori</label>
              <div className="input-icon">
                <MessageSquare size={18} />
                <select
                  className="input"
                  value={reportData.category}
                  onChange={(e) => updateField('category', e.target.value)}
                >
                  <option value="pinjol_ilegal">Pinjol Ilegal</option>
                  <option value="judi_online">Judi Online</option>
                  <option value="investasi_bodong">Investasi Bodong</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
            </div>

          </div>

          <div className="form-field" style={{ marginTop: 22 }}>
            <label>Ceritakan Kejadian</label>
            <textarea
              className="input"
              rows="6"
              placeholder="Jelaskan kronologi secara singkat..."
              value={reportData.description}
              onChange={(e) => updateField('description', e.target.value)}
            />
            <small className="muted">
              Hindari memasukkan password, OTP, atau informasi rahasia lainnya.
            </small>
          </div>

          <div className="anonymous-box">
            <div>
              <strong>Laporkan secara anonim</strong>
              <p>Identitas pelapor tidak ditampilkan pada laporan publik.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={reportData.isAnonymous}
                onChange={(e) => updateField('isAnonymous', e.target.checked)}
              />
              <span />
            </label>
          </div>

          {!reportData.isAnonymous && (
            <div className="form-grid" style={{ marginTop: 16 }}>

              <div className="form-field">
                <label>Nama Kamu</label>
                <div className="input-icon">
                  <User size={18} />
                  <input
                    className="input"
                    placeholder="Nama lengkap"
                    value={reportData.contactName}
                    onChange={(e) => updateField('contactName', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Email</label>
                <div className="input-icon">
                  <Mail size={18} />
                  <input
                    className="input"
                    type="email"
                    placeholder="nama@email.com"
                    value={reportData.contactEmail}
                    onChange={(e) => updateField('contactEmail', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Nomor HP</label>
                <div className="input-icon">
                  <Phone size={18} />
                  <input
                    className="input"
                    placeholder="08xx-xxxx-xxxx"
                    value={reportData.contactPhone}
                    onChange={(e) => updateField('contactPhone', e.target.value)}
                  />
                </div>
              </div>

            </div>
          )}
          <div className="form-actions">
            <button type="button" className="btn btn-light" onClick={() => navigate('/laporkan')}>
              Kembali
            </button>
            <button type="button" className="btn btn-primary" onClick={handleNext}>
              Lanjut ke Bukti →
            </button>
          </div>

        </div>
        </Reveal>
      </div>
    </div>
  )
}

export default ReportFormPage