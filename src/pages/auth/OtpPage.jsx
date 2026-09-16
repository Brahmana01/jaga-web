import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

function OtpPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const email = searchParams.get('email') || ''

  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleVerify = async () => {
    if (!otp.trim()) {
      setError('Kode OTP wajib diisi.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await fetch(`${apiUrl}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      })

      const json = await response.json()

      if (!response.ok) {
        throw new Error(json.message || 'Kode OTP salah')
      }

      localStorage.setItem('jaga_token', json.data.token)
      localStorage.setItem('jaga_user', JSON.stringify(json.data.user))

      navigate('/admin')

    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          <ShieldCheck size={34} />
        </div>

        <span className="auth-eyebrow">JAGA</span>

        <h1>Verifikasi OTP</h1>
        <p>Kode OTP telah dikirim ke {email || 'email kamu'}.</p>

        <div className="auth-field">
          <label>Kode OTP</label>
          <input
            className="input"
            type="text"
            placeholder="123456"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
          />
        </div>

        {error && (
          <p style={{ color: 'red', fontSize: 14, marginTop: 8 }}>{error}</p>
        )}

        <button
          type="button"
          className="btn btn-primary auth-submit"
          onClick={handleVerify}
          disabled={isLoading}
        >
          {isLoading ? 'Memverifikasi...' : 'Verifikasi'}
        </button>

      </div>
    </div>
  )
}

export default OtpPage