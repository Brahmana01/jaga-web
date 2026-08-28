import {
  ShieldAlert,
  CheckCircle2,
  FileWarning
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

function EmergencyGuidePage() {

  const steps = [
    'Amankan akun dan ubah password jika diperlukan.',
    'Cabut izin aplikasi yang mencurigakan.',
    'Jangan memberikan OTP, PIN, atau password.',
    'Simpan screenshot komunikasi dan transaksi.',
    'Jangan menghapus bukti ancaman.',
    'Gunakan kanal pelaporan yang sesuai.'
  ]

  return (

    <div className="page">

      <div className="container emergency-container">

        <div className="page-header">

          <span className="badge badge-danger">
            PANDUAN DARURAT
          </span>

          <h1>
            Langkah yang Bisa Kamu Lakukan
          </h1>

          <p>
            Ikuti langkah berikut secara berurutan
            sesuai kondisi yang kamu alami.
          </p>

        </div>

        <Reveal>
        <div className="emergency-alert">

          <ShieldAlert size={25} />

          <div>

            <strong>
              Prioritaskan keselamatan.
            </strong>

            <p>
              Jika terdapat ancaman fisik atau
              keadaan darurat nyata, cari bantuan
              dari pihak berwenang atau orang
              terpercaya di sekitar kamu.
            </p>

          </div>

        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="emergency-steps">

          {steps.map((step, index) => (

            <div
              className="emergency-step card"
              key={step}
            >

              <div className="emergency-number">
                {index + 1}
              </div>

              <div>

                <h3>
                  Langkah {index + 1}
                </h3>

                <p>
                  {step}
                </p>

              </div>

              <CheckCircle2
                size={20}
                color="#079B62"
              />

            </div>

          ))}

        </div>
        </Reveal>


        <div className="emergency-actions">

          <Link
            to="/laporkan"
            className="btn btn-danger"
          >
            <FileWarning size={17} />
            Buat Laporan
          </Link>

          <Link
            to="/edukasi"
            className="btn btn-light"
          >
            Pelajari Keamanan

          </Link>

        </div>

      </div>

    </div>

  )
}

export default EmergencyGuidePage