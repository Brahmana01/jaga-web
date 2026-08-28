import {
  ArrowRight,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import Reveal
  from '../../../components/animation/Reveal'

import SecurityJourney
  from '../../../components/common/SecurityJourney'


const scenarios = [

  {
    code: 'A',

    title:
      'Belum pakai aplikasi',

    subtitle:
      'Baru mau cek dulu',

    description:
      'Cek dulu apakah aplikasi tersebut aman atau berisiko sebelum memasang atau memberikan data.',

    action:
      'Cek Sekarang',

    path:
      '/cek-aplikasi',

    type:
      'safe',

    image:
      '/images/scenarios/scenario-a.png',
  },


  {
    code: 'B',

    title:
      'Sudah terlanjur instal',

    subtitle:
      'Belum transfer / isi data penting',

    description:
      'Periksa izin dan ciri aplikasi untuk menentukan tindakan yang paling aman.',

    action:
      'Periksa Sekarang',

    path:
      '/cek-aplikasi',

    type:
      'warning',

    image:
      '/images/scenarios/scenario-b.png',
  },


  {
    code: 'C',

    title:
      'Sudah jadi korban',

    subtitle:
      'Dana cair / diteror / dirugikan',

    description:
      'Dapatkan panduan darurat, simpan bukti, dan buat laporan.',

    action:
      'Butuh Bantuan',

    path:
      '/bantuan-korban',

    type:
      'danger',

    image:
      '/images/scenarios/scenario-c.png',
  },

]


function ScenarioSection() {

  return (

    <section className="section">

      <div className="container">


        <Reveal>

          <div className="section-title">

            <h2>
              3 Jalan Cerita,
              Sesuaikan Kondisimu
            </h2>


            <p>
              Pilih kondisi yang paling
              sesuai dengan situasimu.
            </p>

          </div>

        </Reveal>


        <div className="grid grid-3 scenario-grid">

          {scenarios.map(
            (scenario, index) => (

              <Reveal
                key={scenario.code}
                delay={index * 140}
              >

                <div
                  className={`
                    card
                    scenario-card
                    interactive-card
                    ${scenario.type}
                  `}
                >

                  <div>

                    <div
                      className="
                        scenario-label
                      "
                    >
                      SKENARIO {scenario.code}
                    </div>


                    <h3>
                      {scenario.title}
                    </h3>


                    <strong>
                      {scenario.subtitle}
                    </strong>


                    <p>
                      {scenario.description}
                    </p>

                  </div>


                  <div
                    className="
                      scenario-bottom
                    "
                  >

                    <Link
                      to={scenario.path}
                      className={
                        scenario.type === 'danger'
                          ? 'btn btn-danger'
                          : scenario.type === 'warning'
                          ? 'btn btn-warning'
                          : 'btn btn-primary'
                      }
                    >

                      {scenario.action}

                      <ArrowRight
                        size={16}
                      />

                    </Link>


                    <div
                      className="
                        scenario-character
                      "
                    >

                      <img
                        src={scenario.image}
                        alt=""
                      />

                    </div>

                  </div>


                  {scenario.type !== 'safe' && (

                    <div
                      className={
                        `scenario-alert ${
                          scenario.type === 'danger'
                            ? 'danger'
                            : 'warning'
                        }`
                      }
                    >

                      {scenario.type === 'danger'
                        ? '!'
                        : '⚠'
                      }

                    </div>

                  )}

                </div>

              </Reveal>

            )
          )}

        </div>


        <Reveal delay={120}>

          <SecurityJourney />

        </Reveal>

      </div>

    </section>
  )
}


export default ScenarioSection