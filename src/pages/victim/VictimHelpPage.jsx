import {
  AlertTriangle,
  ShieldAlert,
  PhoneCall,
  FileWarning,
  ArrowRight
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

function VictimHelpPage() {

  const conditions = [
    {
      icon: ShieldAlert,
      title: 'Baru Instal',
      text: 'Belum memberikan data atau melakukan transaksi.',
      type: 'safe'
    },

    {
      icon: AlertTriangle,
      title: 'Sudah Transfer',
      text: 'Sudah mengirim uang atau mengalami kerugian.',
      type: 'warning'
    },

    {
      icon: PhoneCall,
      title: 'Diteror',
      text: 'Mendapat ancaman, tekanan, atau gangguan.',
      type: 'danger'
    }
  ]

  return (

    <div className="page">

      <div className="container">

        <Reveal delay={150}>
        <div className="victim-hero">

          <div>

            <span className="badge badge-danger">
              BUTUH BANTUAN?
            </span>

            <h1>
              Saya sudah terlanjur.
              Apa yang harus dilakukan?
            </h1>

            <p>
              Tenang. Prioritaskan keselamatan,
              amankan data, simpan bukti, lalu
              tentukan langkah berikutnya.
            </p>

          </div>

          <AlertTriangle size={90} />

        </div>
        </Reveal>


        <div className="page-header victim-header">

          <h2>
            Pilih kondisi yang paling sesuai
          </h2>

          <p>
            JAGA akan mengarahkan kamu ke
            langkah yang sesuai.
          </p>

        </div>


        <div className="grid grid-3">

          {conditions.map((item) => {

            const Icon = item.icon

            return (

              <div
                className={`card victim-card ${item.type}`}
                key={item.title}
              >

                <Icon size={30} />

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <Link
                  to="/bantuan-korban/darurat"
                  className="victim-link"
                >
                  Lihat Langkah
                  <ArrowRight size={15} />
                </Link>

              </div>

            )

          })}

        </div>


        <div className="victim-report">

          <FileWarning size={25} />

          <div>

            <strong>
              Ingin melaporkan kejadian?
            </strong>

            <p>
              Kamu dapat mengirim laporan
              setelah mengamankan kondisi dan bukti.
            </p>

          </div>

          <Link
            to="/laporkan"
            className="btn btn-danger"
          >
            Buat Laporan
          </Link>

        </div>

      </div>

    </div>

  )
}

export default VictimHelpPage