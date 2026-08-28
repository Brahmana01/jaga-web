import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  UserRound,
  Smartphone,
  Phone,
  CalendarDays,
  FileText,
  Image as ImageIcon
} from 'lucide-react'


import Reveal from '../../components/animation/Reveal'
import { Link, useParams } from 'react-router-dom'

import { reports } from '../../data/adminDummy'
import { Badge, Card } from '../../components/common/Ui'

function ReportDetailPage() {

  const { id } = useParams()

  const report =
    reports.find(item => item.id === id)
    || reports[0]

  return (

    <div>

      <Link
        to="/admin/laporan"
        className="admin-back"
      >
        <ArrowLeft size={16} />
        Kembali ke Laporan
      </Link>


      <div className="admin-page-header">

        <div>

          <span>
            DETAIL LAPORAN
          </span>

          <h1>
            {report.id}
          </h1>

          <p>
            Dikirim pada {report.date} • {report.time}
          </p>

        </div>

        <Badge
          tone={
            report.risk === 'high'
              ? 'danger'
              : 'warning'
          }
        >
          Risiko {report.risk === 'high'
            ? 'Tinggi'
            : 'Sedang'}
        </Badge>

      </div>

      <Reveal>
      <div className="detail-layout">


        <div className="stack">


          <Card>

            <div className="detail-card-header">

              <h2>
                Informasi Laporan
              </h2>

              <FileText size={20} />

            </div>


            <div className="detail-info-grid">

              <div>
                <span>
                  Aplikasi
                </span>

                <strong>
                  <Smartphone size={16} />
                  {report.application}
                </strong>
              </div>


              <div>
                <span>
                  Kategori
                </span>

                <strong>
                  {report.category}
                </strong>
              </div>


              <div>
                <span>
                  Kontak
                </span>

                <strong>
                  <Phone size={16} />
                  0812••••••23
                </strong>
              </div>


              <div>
                <span>
                  Pelapor
                </span>

                <strong>
                  <UserRound size={16} />
                  {report.reporter}
                </strong>
              </div>


              <div>
                <span>
                  Waktu
                </span>

                <strong>
                  <CalendarDays size={16} />
                  {report.date}
                </strong>
              </div>

            </div>

          </Card>


          <Card>

            <div className="detail-card-header">

              <h2>
                Kronologi
              </h2>

            </div>

            <p className="detail-description">
              Pelapor menerima pesan melalui
              WhatsApp yang menawarkan pinjaman.
              Setelah melakukan instalasi aplikasi,
              pelapor diminta memberikan akses
              kontak dan mengirimkan sejumlah data.
              Selanjutnya pelapor mendapatkan
              tekanan untuk melakukan pembayaran.
            </p>

          </Card>


          <Card>

            <div className="detail-card-header">

              <h2>
                Bukti Laporan
              </h2>

              <ImageIcon size={20} />

            </div>


            <div className="evidence-preview-grid">

              <div className="evidence-preview">
                <div>
                  <ImageIcon size={30} />
                </div>

                <span>
                  screenshot-chat.jpg
                </span>
              </div>


              <div className="evidence-preview">
                <div>
                  <ImageIcon size={30} />
                </div>

                <span>
                  bukti-transfer.jpg
                </span>
              </div>

            </div>

          </Card>


          <Card>

            <div className="detail-card-header">

              <h2>
                Indikator Risiko
              </h2>

              <ShieldAlert
                size={20}
                color="#F59E0B"
              />

            </div>


            <div className="risk-indicator-admin">

              <div>
                <span>
                  Permintaan akses kontak
                </span>

                <strong>
                  Tinggi
                </strong>
              </div>

              <div>
                <span>
                  Tekanan pembayaran
                </span>

                <strong>
                  Tinggi
                </strong>
              </div>

              <div>
                <span>
                  Identitas penyelenggara
                </span>

                <strong>
                  Perlu diverifikasi
                </strong>
              </div>

            </div>

          </Card>

        </div>


        <div className="stack">


          <Card className="verification-card">

            <div className="verification-heading">

              <ShieldAlert
                size={28}
              />

              <div>

                <h2>
                  Verifikasi
                </h2>

                <p>
                  Tentukan hasil pemeriksaan
                  laporan ini.
                </p>

              </div>

            </div>


            <button
              className="verify-button accept"
            >
              <CheckCircle2 size={18} />
              Verifikasi Laporan
            </button>


            <button
              className="verify-button reject"
            >
              <XCircle size={18} />
              Tolak Laporan
            </button>


            <textarea
              className="input"
              rows="5"
              placeholder="Catatan verifikator..."
            />

          </Card>


          <Card>

            <h3>
              Status Saat Ini
            </h3>

            <div className="current-status">

              <span>
                Status
              </span>

              <Badge tone="warning">
                Sedang Diverifikasi
              </Badge>

            </div>

            <div className="current-status">

              <span>
                Laporan serupa
              </span>

              <strong>
                {report.reports}
              </strong>

            </div>

          </Card>

        </div>

      </div>
      </Reveal>

    </div>

  )
}

export default ReportDetailPage