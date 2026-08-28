import {
  UploadCloud,
  Image,
  FileText,
  X
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

import Stepper from '../../components/forms/Stepper'

function ReportEvidencePage() {

  return (

    <div className="page">

      <div className="container report-container">

        <div className="page-header">

          <h1>
            Bukti Laporan
          </h1>

          <p>
            Tambahkan bukti yang mendukung
            laporan kamu.
          </p>

        </div>


        <Stepper currentStep={2} />

        <Reveal>
        <div className="card report-form-card">

          <div className="form-section-title">

            <h2>
              Upload Bukti
            </h2>

            <p>
              Screenshot percakapan, transaksi,
              nomor, atau informasi lain yang relevan.
            </p>

          </div>


          <div className="upload-area">

            <div className="upload-icon">
              <UploadCloud size={36} />
            </div>

            <h3>
              Tarik file ke sini
            </h3>

            <p>
              atau pilih file dari perangkat
            </p>

            <button
              className="btn btn-light"
              type="button"
            >
              Pilih File
            </button>

            <small>
              PNG, JPG, JPEG atau PDF.
              Maksimal 10 MB per file.
            </small>

          </div>


          <div className="evidence-list">

            <h3>
              File yang dipilih
            </h3>


            <div className="evidence-item">

              <div className="evidence-file">

                <div className="file-icon">
                  <Image size={19} />
                </div>

                <div>
                  <strong>
                    screenshot-chat.jpg
                  </strong>

                  <span>
                    1.8 MB
                  </span>
                </div>

              </div>


              <button
                className="remove-file"
              >
                <X size={17} />
              </button>

            </div>


            <div className="evidence-item">

              <div className="evidence-file">

                <div className="file-icon">
                  <FileText size={19} />
                </div>

                <div>
                  <strong>
                    bukti-transfer.pdf
                  </strong>

                  <span>
                    842 KB
                  </span>
                </div>

              </div>


              <button
                className="remove-file"
              >
                <X size={17} />
              </button>

            </div>

          </div>


          <div className="form-actions">

            <Link
              to="/laporkan/form"
              className="btn btn-light"
            >
              ← Kembali
            </Link>

            <Link
              to="/laporkan/review"
              className="btn btn-primary"
            >
              Lanjut Review →
            </Link>

          </div>

        </div>
        </Reveal>

      </div>

    </div>

  )
}

export default ReportEvidencePage