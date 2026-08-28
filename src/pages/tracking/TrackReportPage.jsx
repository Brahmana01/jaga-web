import {
  Search,
  TicketCheck,
  ShieldCheck
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

function TrackReportPage() {

  return (

    <div className="page">

      <div className="container tracking-container">

        <div className="page-header">

          <h1>
            Lacak Status Laporan
          </h1>

          <p>
            Masukkan token yang kamu dapatkan
            setelah mengirim laporan.
          </p>

        </div>

        <Reveal>
        <div className="card tracking-card">

          <div className="tracking-icon">
            <TicketCheck size={34} />
          </div>

          <h2>
            Masukkan Token Laporan
          </h2>

          <p>
            Contoh:
            <strong>
              JAGA-2026-00023
            </strong>
          </p>


          <div className="search-box tracking-search">

            <Search size={20} />

            <input
              placeholder="JAGA-2026-00023"
            />

            <Link
              to="/status-laporan/detail"
              className="btn btn-primary"
            >
              Lacak
            </Link>

          </div>


          <div className="tracking-security">

            <ShieldCheck size={19} />

            <span>
              Tidak perlu login untuk melihat
              status laporan menggunakan token.
            </span>

          </div>

        </div>
        </Reveal>

      </div>

    </div>

  )
}

export default TrackReportPage