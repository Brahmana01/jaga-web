import {
  ShieldCheck,
  ArrowRight
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

function LoginPage() {

  return (

    <div className="auth-page">

      <Reveal> 
      <div className="auth-card">

        <div className="auth-logo">
          <ShieldCheck size={34} />
        </div>

        <span className="auth-eyebrow">
          JAGA
        </span>

        <h1>
          Masuk ke JAGA
        </h1>

        <p>
          Gunakan akun yang terdaftar untuk
          mengakses panel JAGA.
        </p>


        <div className="auth-field">

          <label>
            Email
          </label>

          <input
            className="input"
            type="email"
            placeholder="nama@email.com"
          />

        </div>


        <div className="auth-field">

          <label>
            Password
          </label>

          <input
            className="input"
            type="password"
            placeholder="••••••••"
          />

        </div>


        <Link
          to="/otp"
          className="btn btn-primary auth-submit"
        >
          Masuk
          <ArrowRight size={16} />
        </Link>


        <div className="auth-divider">
          <span>
            JAGA — Jangan Asal Gadal Aplikasi
          </span>
        </div>

      </div>
      </Reveal>

    </div>

  )
}

export default LoginPage