import { useRef } from 'react'

import {
  UploadCloud,
  Image,
  FileText,
  X
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { useNavigate } from 'react-router-dom'

import Stepper from '../../components/forms/Stepper'
import { useReport } from '../../context/ReportContext'

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function ReportEvidencePage() {
  const { reportData, addEvidenceFile, removeEvidenceFile } = useReport()
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files)
    files.forEach((file) => addEvidenceFile(file))
    event.target.value = ''
  }

  const triggerFileDialog = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="page">
      <div className="container report-container">

        <div className="page-header">
          <h1>Bukti Laporan</h1>
          <p>Tambahkan bukti yang mendukung laporan kamu.</p>
        </div>

        <Stepper currentStep={2} />

        <Reveal>
        <div className="card report-form-card">

          <div className="form-section-title">
            <h2>Upload Bukti</h2>
            <p>Screenshot percakapan, transaksi, nomor, atau informasi lain yang relevan.</p>
          </div>

          <div className="upload-area">
            <div className="upload-icon">
              <UploadCloud size={36} />
            </div>
            <h3>Tarik file ke sini</h3>
            <p>atau pilih file dari perangkat</p>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept=".png,.jpg,.jpeg,.pdf"
              multiple
              style={{ display: 'none' }}
            />

            <button className="btn btn-light" type="button" onClick={triggerFileDialog}>
              Pilih File
            </button>

            <small>PNG, JPG, JPEG atau PDF. Maksimal 10 MB per file.</small>
          </div>

          {reportData.evidenceFiles.length > 0 && (
            <div className="evidence-list">
              <h3>File yang dipilih</h3>

              {reportData.evidenceFiles.map((file, index) => (
                <div className="evidence-item" key={`${file.name}-${index}`}>
                  <div className="evidence-file">
                    <div className="file-icon">
                      {file.type === 'application/pdf'
                        ? <FileText size={19} />
                        : <Image size={19} />}
                    </div>
                    <div>
                      <strong>{file.name}</strong>
                      <span>{formatFileSize(file.size)}</span>
                    </div>
                  </div>

                  <button className="remove-file" onClick={() => removeEvidenceFile(index)}>
                    <X size={17} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="btn btn-light" onClick={() => navigate('/laporkan/form')}>
              ← Kembali
            </button>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/laporkan/review')}>
              Lanjut Review →
            </button>
          </div>

        </div>
        </Reveal>
      </div>
    </div>
  )
}

export default ReportEvidencePage