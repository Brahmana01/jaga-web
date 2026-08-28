import {
  ShieldCheck,
  ArrowRight
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

function OtpPage() {

  return (

    <div className="auth-page">
      <Reveal>
      <div className="auth-card otp-card">

        <div className="auth-logo">
          <ShieldCheck size={34} />
        </div>

        <span className="auth-eyebrow">
          VERIFIKASI
        </span>

        <h1>
          Masukkan OTP
        </h1>

        <p>
          Kode verifikasi telah dikirim
          ke email yang terdaftar.
        </p>


        <div className="otp-inputs">

          {[1, 2, 3, 4, 5, 6].map(
            (item) => (

              <input
                key={item}
                maxLength="1"
                inputMode="numeric"
              />

            )
          )}

        </div>


        <Link
          to="/admin"
          className="btn btn-primary auth-submit"
        >
          Verifikasi
          <ArrowRight size={16} />
        </Link>


        <p className="otp-resend">
          Belum menerima kode?
          <button>
            Kirim ulang
          </button>
        </p>

      </div>
      </Reveal>

    </div>

  )
}

export default OtpPage