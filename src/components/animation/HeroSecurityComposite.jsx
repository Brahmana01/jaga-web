import {
  AlertTriangle,
  MessageCircle,
  Percent,
  LockKeyhole,
} from 'lucide-react'

import SecurityShield
  from './SecurityShield'

import './hero-security-composite.css'


function HeroSecurityComposite() {

  return (

    <div className="hero-security-composite">


      {/* =====================================
          BACKGROUND NETWORK
      ===================================== */}

      <div
        className="hero-security-network"
        aria-hidden="true"
      >

        <span className="network-dot dot-1" />
        <span className="network-dot dot-2" />
        <span className="network-dot dot-3" />
        <span className="network-dot dot-4" />
        <span className="network-dot dot-5" />

        <span className="network-line line-1" />
        <span className="network-line line-2" />
        <span className="network-line line-3" />

      </div>


      {/* =====================================
          PHONE
          SUMBER INFORMASI RISIKO
          LAYER BELAKANG
      ===================================== */}

      <div className="hero-security-phone">

        <img
          src="/images/hero/jaga-risk-phone.png"
          alt="Aplikasi pinjaman berisiko"
        />

      </div>


      {/* =====================================
          PHONE → STATUS CONNECTION
      ===================================== */}

      <svg
        className="hero-security-connections"
        viewBox="0 0 620 430"
        preserveAspectRatio="none"
        aria-hidden="true"
      >

        {/* Izin */}

        <path
          className="risk-connection"
          d="
            M164 79
            C177 79 184 76 194 72
          "
        />


        {/* Bunga */}

        <path
          className="risk-connection"
          d="
            M168 157
            C179 157 186 154 197 151
          "
        />


        {/* WhatsApp */}

        <path
          className="safe-connection"
          d="
            M172 235
            C183 235 190 233 200 230
          "
        />


        {/* Lindungi Data */}

        <path
          className="safe-connection"
          d="
            M176 313
            C186 313 194 311 205 308
          "
        />


        {/* Waspada */}

        <path
          className="risk-connection"
          d="
            M186 385
            C196 381 202 377 210 372
          "
        />

      </svg>


      {/* =====================================
          ENERGY RIPPLE
          TEPAT DI BAWAH SHIELD
      ===================================== */}

      <div
        className="energy-ripple"
        aria-hidden="true"
      >

        <span className="ripple-core" />

        <span className="ripple-ring ripple-ring-1" />

        <span className="ripple-ring ripple-ring-2" />

        <span className="ripple-ring ripple-ring-3" />

        <span className="ripple-beam" />

      </div>


      {/* =====================================
          SHIELD
          LAYER DEPAN DARI PHONE
      ===================================== */}

      <div className="hero-security-shield">

        <SecurityShield
          showStatus={false}
        />

      </div>


      {/* =====================================
          01 — IZIN
      ===================================== */}

      <div
        className="
          hero-security-status
          status-permission
        "
      >

        <span
          className="
            hero-status-mark
            danger
          "
        >

          <AlertTriangle
            size={15}
          />

        </span>


        <div>

          <strong>
            Izin berbahaya
          </strong>

          <small>
            Akses kontak, galeri, SMS
          </small>

        </div>

      </div>


      {/* =====================================
          02 — BUNGA
      ===================================== */}

      <div
        className="
          hero-security-status
          status-interest
        "
      >

        <span
          className="
            hero-status-mark
            danger
          "
        >

          <Percent
            size={15}
          />

        </span>


        <div>

          <strong>
            Bunga tidak jelas
          </strong>

          <small>
            Tidak transparan
          </small>

        </div>

      </div>


      {/* =====================================
          03 — WHATSAPP
      ===================================== */}

      <div
        className="
          hero-security-status
          status-whatsapp
        "
      >

        <span
          className="
            hero-status-mark
            safe
          "
        >

          <MessageCircle
            size={15}
          />

        </span>


        <div>

          <strong>
            Ditawarkan via
          </strong>

          <small>
            nomor asing / WA
          </small>

        </div>

      </div>


      {/* =====================================
          04 — LINDUNGI DATA
      ===================================== */}

      <div
        className="
          hero-security-status
          status-data
        "
      >

        <span
          className="
            hero-status-mark
            safe
          "
        >

          <LockKeyhole
            size={15}
          />

        </span>


        <div>

          <strong>
            Lindungi Data
          </strong>

          <small>
            JAGA Security Layer
          </small>

        </div>

      </div>


      {/* =====================================
          05 — WASPADA
      ===================================== */}

      <div
        className="
          hero-security-status
          status-warning
        "
      >

        <span
          className="hero-status-dot"
        />


        <div>

          <strong>
            Waspada
          </strong>

          <small>
            Risiko terdeteksi
          </small>

        </div>

      </div>

    </div>
  )
}


export default HeroSecurityComposite