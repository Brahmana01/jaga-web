import {
  ShieldCheck,
  Mail,
  Phone
} from 'lucide-react'

import {
  Link
} from 'react-router-dom'


function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        <div className="footer-brand">

          <div className="footer-logo">

            <img
              src="/jaga-favicon.png"
              alt="Logo JAGA"
            />

          </div>

          <div>

            <strong>
              JAGA
            </strong>

            <p>
              Jangan Asal Gadal Aplikasi
            </p>

          </div>

        </div>


        <div className="footer-description">

          <p>
            Platform keamanan digital yang membantu
            masyarakat mengenali risiko, melaporkan
            ancaman, dan mendapatkan informasi
            perlindungan digital.
          </p>

        </div>


        <div className="footer-links">

          <div>

            <strong>
              Navigasi
            </strong>

            <Link to="/cek-aplikasi">
              Cek Aplikasi
            </Link>

            <Link to="/edukasi">
              Edukasi
            </Link>

            <Link to="/laporkan">
              Laporkan
            </Link>

          </div>


          <div>

            <strong>
              Bantuan
            </strong>

            <Link to="/bantuan-korban">
              Bantuan Korban
            </Link>

            <Link to="/status-laporan">
              Status Laporan
            </Link>

            <Link to="/tentang-kami">
              Tentang Kami
            </Link>

          </div>


          <div>

            <strong>
              Kontak
            </strong>

            <span>
              <Mail size={14} />
              info@jaga.id
            </span>

            <span>
              <Phone size={14} />
              Layanan JAGA
            </span>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 JAGA — Jangan Asal Gadal Aplikasi
        </span>

        <span>
          Empowering safer choices.
          Building trusted digital ecosystems.
        </span>

        <span>
          Digital Safety Platform
        </span>

      </div>

    </footer>
  )
}

export default Footer