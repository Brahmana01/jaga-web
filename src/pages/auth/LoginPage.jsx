import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Email dan password wajib diisi.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const json = await response.json()

      if (!response.ok) {
        throw new Error(json.message || 'Email atau password salah')
      }

      navigate(`/otp?email=${encodeURIComponent(email)}`)

    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          <ShieldCheck size={34} />
        </div>

        <span className="auth-eyebrow">JAGA</span>

        <h1>Masuk ke JAGA</h1>
        <p>Gunakan akun yang terdaftar untuk mengakses panel JAGA.</p>

        <div className="auth-field">
          <label>Email</label>
          <input
            className="input"
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="auth-field">
          <label>Password</label>
          <input
            className="input"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {error && (
          <p style={{ color: 'red', fontSize: 14, marginTop: 8 }}>{error}</p>
        )}

        <button
          type="button"
          className="btn btn-primary auth-submit"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? 'Memproses...' : 'Masuk'}
        </button>

        <div className="auth-divider">
          <span>JAGA — Jangan Asal Gadai Aplikasi</span>
        </div>

      </div>
    </div>
  )
}

export default LoginPage