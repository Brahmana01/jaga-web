import {
  CheckCircle2,
  Copy,
  ShieldCheck
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

function ReportSuccessPage() {

  return (

    <div className="page">

      <div className="container success-container">

        <Reveal>
        <div className="success-card card">

          <div className="success-icon">
            <CheckCircle2 size={48} />
          </div>


          <span className="badge badge-safe">
            LAPORAN DITERIMA
          </span>


          <h1>
            Laporan Berhasil Dikirim
          </h1>


          <p>
            Terima kasih sudah membantu
            menjaga ruang digital yang lebih aman.
          </p>


          <div className="token-box">

            <span>
              TOKEN LAPORAN
            </span>

            <strong>
              JAGA-2026-00023
            </strong>

            <button>
              <Copy size={16} />
              Salin Token
            </button>

          </div>


          <div className="success-notice">

            <ShieldCheck size={20} />

            <p>
              Simpan token ini. Token digunakan
              untuk melihat perkembangan laporan
              tanpa perlu menampilkan identitas
              pelapor.
            </p>

          </div>


          <div className="success-actions">

            <Link
              to="/status-laporan/detail"
              className="btn btn-primary"
            >
              Lihat Status Laporan
            </Link>

            <Link
              to="/"
              className="btn btn-light"
            >
              Kembali ke Beranda
            </Link>

          </div>

        </div>
        </Reveal>

      </div>

    </div>

  )
}

export default ReportSuccessPage