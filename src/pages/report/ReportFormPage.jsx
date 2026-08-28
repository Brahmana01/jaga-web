import {
  Smartphone,
  Phone,
  AlertCircle,
  MessageSquare
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

import Stepper from '../../components/forms/Stepper'

function ReportFormPage() {

  return (

    <div className="page">

      <div
        className="container report-container"
      >

        <div className="page-header">

          <h1>
            Buat Laporan
          </h1>

          <p>
            Isi informasi kejadian secara
            jelas dan sesuai fakta.
          </p>

        </div>


        <Stepper currentStep={1} />

        <Reveal delay={100}>
        <div className="card report-form-card">

          <div className="form-section-title">

            <div>
              <h2>
                Informasi Kejadian
              </h2>

              <p>
                Berikan informasi dasar mengenai
                aplikasi atau pihak yang dilaporkan.
              </p>
            </div>

          </div>


          <div className="form-grid">


            <div className="form-field">

              <label>
                Nama Aplikasi
              </label>

              <div className="input-icon">

                <Smartphone size={18} />

                <input
                  className="input"
                  placeholder="Contoh: DanaCepatt"
                />

              </div>

            </div>


            <div className="form-field">

              <label>
                Nomor / Kontak Terkait
              </label>

              <div className="input-icon">

                <Phone size={18} />

                <input
                  className="input"
                  placeholder="Contoh: 0812xxxx"
                />

              </div>

            </div>


            <div className="form-field">

              <label>
                Kondisi yang Dialami
              </label>

              <div className="input-icon">

                <AlertCircle size={18} />

                <select className="input">

                  <option>
                    Baru mengisi data
                  </option>

                  <option>
                    Sudah melakukan transfer
                  </option>

                  <option>
                    Mendapat ancaman
                  </option>

                  <option>
                    Mengalami kerugian
                  </option>

                </select>

              </div>

            </div>


            <div className="form-field">

              <label>
                Media / Kanal
              </label>

              <div className="input-icon">

                <MessageSquare size={18} />

                <select className="input">

                  <option>
                    WhatsApp
                  </option>

                  <option>
                    SMS
                  </option>

                  <option>
                    Media Sosial
                  </option>

                  <option>
                    Website
                  </option>

                  <option>
                    Lainnya
                  </option>

                </select>

              </div>

            </div>

          </div>


          <div
            className="form-field"
            style={{ marginTop: 22 }}
          >

            <label>
              Ceritakan Kejadian
            </label>

            <textarea
              className="input"
              rows="6"
              placeholder="Jelaskan kronologi secara singkat..."
            />

            <small className="muted">
              Hindari memasukkan password,
              OTP, atau informasi rahasia lainnya.
            </small>

          </div>


          <div className="anonymous-box">

            <div>

              <strong>
                Laporkan secara anonim
              </strong>

              <p>
                Identitas pelapor tidak ditampilkan
                pada laporan publik.
              </p>

            </div>

            <label className="switch">

              <input
                type="checkbox"
                defaultChecked
              />

              <span />

            </label>

          </div>


          <div className="form-actions">

            <Link
              to="/laporkan"
              className="btn btn-light"
            >
              Kembali
            </Link>

            <Link
              to="/laporkan/bukti"
              className="btn btn-primary"
            >
              Lanjut ke Bukti →
            </Link>

          </div>

        </div>
        </Reveal>
      </div>

    </div>

  )
}

export default ReportFormPage