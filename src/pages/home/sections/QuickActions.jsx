import {
  Search,
  ShieldCheck,
  BookOpen,
  LockKeyhole,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import Reveal
  from '../../../components/animation/Reveal'


const items = [

  {
    icon: Search,
    title: 'Cek Risiko Aplikasi',
    text:
      'Periksa legalitas dan risiko aplikasi pinjol dengan cepat.',
    path: '/cek-aplikasi',
    color: 'green',
  },

  {
    icon: BookOpen,
    title: 'Edukasi Keamanan',
    text:
      'Pelajari ciri-ciri pinjol ilegal dan cara melindungi data pribadi.',
    path: '/edukasi',
    color: 'purple',
  },

  {
    icon: ShieldCheck,
    title: 'Laporkan & Bantu',
    text:
      'Laporkan aplikasi atau aktivitas yang mencurigakan.',
    path: '/laporkan',
    color: 'blue',
  },

  {
    icon: LockKeyhole,
    title: 'Aman & Terpercaya',
    text:
      'Data kamu aman. Pelaporan dapat dilakukan secara anonim.',
    path: '/bantuan-korban',
    color: 'orange',
  },

]


function QuickActions() {

  return (

    <section className="quick-section">

      <div className="container">

        <div className="quick-grid">

          {items.map(
            (item, index) => {

              const Icon =
                item.icon


              return (

                <Reveal
                  key={item.title}
                  delay={index * 90}
                >

                  <Link
                    to={item.path}
                    className="
                      card
                      quick-card
                      interactive-card
                    "
                  >

                    <div
                      className={
                        `icon-circle icon-${item.color}`
                      }
                    >

                      <Icon
                        size={24}
                      />

                    </div>


                    <div>

                      <h3>
                        {item.title}
                      </h3>


                      <p>
                        {item.text}
                      </p>

                    </div>

                  </Link>

                </Reveal>

              )
            }
          )}

        </div>

      </div>

    </section>
  )
}


export default QuickActions