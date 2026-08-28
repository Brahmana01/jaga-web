import {
  AlertTriangle,
  CheckCircle2,
  Flag,
  ShieldAlert
} from 'lucide-react'

import { Link } from 'react-router-dom'

import { Card, Badge } from '../../components/common/Ui'

function RiskResultPage() {

  const indicators = [
    {
      name: 'Nama mirip dengan entitas legal',
      value: '20',
      type: 'warning'
    },
    {
      name: 'Bunga tidak transparan',
      value: '20',
      type: 'danger'
    },
    {
      name: 'Ditawarkan melalui WhatsApp',
      value: '15',
      type: 'warning'
    },
    {
      name: 'Belum ada laporan terverifikasi',
      value: '—',
      type: 'safe'
    }
  ]

  return (

    <div className="page">

      <div className="container">

        <div className="page-header">

          <h1>
            Hasil Pemeriksaan
          </h1>

          <p>
            Berikut hasil analisis risiko
            aplikasi yang diperiksa.
          </p>

        </div>


        <div className="risk-layout">


          <div className="stack">

            <Card>

              <div className="row between">

                <div>

                  <Badge tone="warning">
                    WASPADA
                  </Badge>

                  <h2 style={{ marginTop: 12 }}>
                    DanaCepatt
                  </h2>

                  <p className="muted">
                    Hasil pemeriksaan sementara
                  </p>

                </div>


                <div className="score-box">

                  <span>
                    SKOR
                  </span>

                  <strong>
                    55
                  </strong>

                  <small>
                    / 100
                  </small>

                </div>

              </div>

            </Card>


            <Card>

              <div className="row between">

                <h3>
                  Indikator Risiko
                </h3>

                <ShieldAlert
                  size={21}
                  color="#F59E0B"
                />

              </div>


              <div className="indicator-list">

                {indicators.map((item) => (

                  <div
                    className="indicator"
                    key={item.name}
                  >

                    <span>

                      <span
                        className={
                          `indicator-dot ${item.type}`
                        }
                      />

                      {item.name}

                    </span>

                    <strong>
                      {item.value}
                    </strong>

                  </div>

                ))}

              </div>

            </Card>


            <Card>

              <h3>
                Penjelasan
              </h3>

              <p
                className="muted"
                style={{ marginTop: 10 }}
              >
                Hasil berada pada kategori
                waspada. Sebelum melanjutkan,
                pastikan identitas penyelenggara,
                biaya, izin aplikasi, dan kanal
                komunikasi telah diverifikasi.
              </p>

            </Card>

          </div>


          <div className="stack">

            <Card className="recommendation-card">

              <AlertTriangle
                size={32}
                color="#F59E0B"
              />

              <h3>
                Rekomendasi JAGA
              </h3>

              <p>
                Jangan memberikan data pribadi
                atau melakukan transfer sebelum
                informasi aplikasi benar-benar
                terverifikasi.
              </p>

              <Link
                to="/edukasi"
                className="btn btn-light"
              >
                Pelajari Keamanan
              </Link>

            </Card>


            <Card>

              <CheckCircle2
                size={28}
                color="#079B62"
              />

              <h3>
                Kamu menemukan sesuatu?
              </h3>

              <p>
                Jika aplikasi ini mencurigakan,
                bantu pengguna lain dengan
                mengirimkan laporan.
              </p>

              <Link
                to="/laporkan"
                className="btn btn-danger"
                style={{
                  width: '100%',
                  marginTop: 15
                }}
              >
                <Flag size={16} />
                Laporkan
              </Link>

            </Card>

          </div>

        </div>

      </div>

    </div>

  )
}

export default RiskResultPage