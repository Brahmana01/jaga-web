import {
  AlertTriangle,
  FileText,
  ShieldCheck,
  EyeOff,
  ArrowRight
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

function ReportLandingPage() {
  return (
    <div className="page">

      <div className="container">

        <div className="page-header">
          <h1>
            Laporkan Aplikasi Mencurigakan
          </h1>

          <p>
            Temukan aplikasi, nomor, atau aktivitas
            yang mencurigakan? Laporkan agar dapat
            membantu melindungi pengguna lain.
          </p>
        </div>

        <Reveal>
        <div className="report-intro">

          <div className="report-intro-copy">

            <span className="badge badge-danger">
              LAPORKAN
            </span>

            <h2>
              Satu laporan dapat
              membantu banyak orang.
            </h2>

            <p>
              Informasi dari masyarakat dapat
              menjadi bagian dari proses deteksi,
              verifikasi, dan pencegahan ancaman
              berikutnya.
            </p>

            <Link
              to="/laporkan/form"
              className="btn btn-danger"
            >
              Mulai Membuat Laporan
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="report-shield">

            <div>
              <AlertTriangle size={62} />
            </div>

          </div>

        </div>
        </Reveal>


        <div className="section-title report-section-title">

          <h2>
            Sebelum membuat laporan
          </h2>

          <p>
            Pastikan informasi yang kamu masukkan
            dapat dipertanggungjawabkan.
          </p>

        </div>

        <Reveal delay={150}>
        <div className="grid grid-3">

          <div className="card report-info-card">

            <div className="report-icon red">
              <FileText size={23} />
            </div>

            <h3>
              Siapkan Informasi
            </h3>

            <p>
              Nama aplikasi, nomor terkait,
              kronologi, dan informasi kejadian.
            </p>

          </div>


          <div className="card report-info-card">

            <div className="report-icon green">
              <ShieldCheck size={23} />
            </div>

            <h3>
              Gunakan Bukti
            </h3>

            <p>
              Screenshot atau dokumen yang
              relevan akan membantu proses
              pemeriksaan.
            </p>

          </div>


          <div className="card report-info-card">

            <div className="report-icon blue">
              <EyeOff size={23} />
            </div>

            <h3>
              Bisa Anonim
            </h3>

            <p>
              Template menyediakan opsi agar
              identitas pelapor tidak ditampilkan.
            </p>

          </div>

        </div>
        </Reveal>

      </div>

    </div>
  )
}

export default ReportLandingPage