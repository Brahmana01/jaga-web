import {
  CheckCircle2,
  Clock3,
  Search,
  ShieldCheck
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Badge, Card } from '../../components/common/Ui'

const timeline = [
  {
    title: 'Laporan Dikirim',
    date: '23 Agustus 2026 • 14:32',
    description:
      'Laporan berhasil diterima oleh sistem.',
    done: true
  },

  {
    title: 'Laporan Diterima',
    date: '23 Agustus 2026 • 14:33',
    description:
      'Data laporan masuk ke antrian pemeriksaan.',
    done: true
  },

  {
    title: 'Sedang Diverifikasi',
    date: 'Saat ini',
    description:
      'Tim verifikator sedang memeriksa informasi dan bukti.',
    done: true,
    current: true
  },

  {
    title: 'Selesai',
    date: 'Menunggu',
    description:
      'Hasil verifikasi akan tersedia setelah proses selesai.',
    done: false
  }
]

function ReportStatusPage() {

  return (

    <div className="page">

      <div className="container status-container">

        <div className="page-header">

          <h1>
            Status Laporan
          </h1>

          <p>
            Pantau perkembangan laporan
            menggunakan token kamu.
          </p>

        </div>

        <Reveal>
        <Card className="status-header-card">

          <div>

            <span className="muted">
              TOKEN LAPORAN
            </span>

            <h2>
              JAGA-2026-00023
            </h2>

          </div>

          <Badge tone="warning">
            Sedang Diverifikasi
          </Badge>

        </Card>
        </Reveal>

        <Reveal delay={120}>
        <div className="status-grid">

          <Card>

            <div className="status-section-heading">

              <div>

                <span className="muted">
                  APLIKASI
                </span>

                <h2>
                  DanaCepatt
                </h2>

              </div>

              <ShieldCheck
                color="#079B62"
              />

            </div>


            <div className="status-meta">

              <div>
                <span>
                  Kondisi
                </span>

                <strong>
                  Sudah mendapat ancaman
                </strong>
              </div>

              <div>
                <span>
                  Pelapor
                </span>

                <strong>
                  Anonim
                </strong>
              </div>

              <div>
                <span>
                  Bukti
                </span>

                <strong>
                  2 file
                </strong>
              </div>

            </div>

          </Card>


          <Card>

            <div className="status-section-heading">

              <h3>
                Perjalanan Laporan
              </h3>

              <Clock3
                size={20}
                color="#F59E0B"
              />

            </div>


            <div className="status-timeline">

              {timeline.map((item) => (

                <div
                  className={
                    `status-timeline-item
                    ${item.current ? 'current' : ''}
                    ${item.done ? 'done' : ''}`
                  }
                  key={item.title}
                >

                  <div className="status-timeline-dot">

                    {item.done
                      ? <CheckCircle2 size={17} />
                      : <span />
                    }

                  </div>


                  <div>

                    <strong>
                      {item.title}
                    </strong>

                    <small>
                      {item.date}
                    </small>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </Card>

        </div>
        </Reveal>


        <div className="status-help">

          <Search size={19} />

          <span>
            Status pada halaman ini adalah
            contoh tampilan frontend dan nantinya
            akan berasal dari backend.
          </span>

        </div>

      </div>

    </div>

  )
}

export default ReportStatusPage