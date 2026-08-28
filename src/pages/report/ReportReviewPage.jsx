import {
  CheckCircle2,
  Smartphone,
  Phone,
  AlertTriangle,
  FileText
} from 'lucide-react'


import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

import Stepper from '../../components/forms/Stepper'
import { Badge } from '../../components/common/Ui'

function ReportReviewPage() {

  return (

    <div className="page">

      <div className="container report-container">

        <div className="page-header">

          <h1>
            Review Laporan
          </h1>

          <p>
            Periksa kembali informasi sebelum
            laporan dikirim.
          </p>

        </div>


        <Stepper currentStep={3} />

        <Reveal>
        <div className="review-layout">


          <div className="card">

            <div className="review-header">

              <div>

                <Badge tone="danger">
                  SEGERA DITINJAU
                </Badge>

                <h2>
                  DanaCepatt
                </h2>

              </div>

              <CheckCircle2
                color="#079B62"
                size={30}
              />

            </div>


            <div className="divider" />


            <div className="review-row">

              <Smartphone size={18} />

              <div>
                <span>
                  Aplikasi
                </span>

                <strong>
                  DanaCepatt
                </strong>
              </div>

            </div>


            <div className="review-row">

              <Phone size={18} />

              <div>
                <span>
                  Kontak
                </span>

                <strong>
                  0812••••••23
                </strong>
              </div>

            </div>


            <div className="review-row">

              <AlertTriangle size={18} />

              <div>
                <span>
                  Kondisi
                </span>

                <strong>
                  Sudah mendapat ancaman
                </strong>
              </div>

            </div>


            <div className="review-row">

              <FileText size={18} />

              <div>
                <span>
                  Bukti
                </span>

                <strong>
                  2 file
                </strong>
              </div>

            </div>

          </div>


          <div className="card review-notice">

            <h3>
              Sebelum dikirim
            </h3>

            <ul>

              <li>
                Pastikan informasi yang
                dimasukkan benar.
              </li>

              <li>
                Jangan memasukkan password
                atau OTP.
              </li>

              <li>
                Bukti hanya digunakan untuk
                proses pemeriksaan.
              </li>

            </ul>

          </div>

        </div>
        </Reveal>


        <div className="review-actions">

          <Link
            to="/laporkan/bukti"
            className="btn btn-light"
          >
            ← Kembali
          </Link>

          <Link
            to="/laporkan/berhasil"
            className="btn btn-danger"
          >
            Kirim Laporan
          </Link>

        </div>

      </div>

    </div>

  )
}

export default ReportReviewPage