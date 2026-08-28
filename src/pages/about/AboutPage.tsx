import {
  ShieldCheck,
  Users,
  LockKeyhole,
  Network,
  Search,
  FileWarning,
  BadgeCheck,
  ArrowRight,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import Reveal
  from '../../components/animation/Reveal'


function AboutPage() {

  return (

    <div className="page">

      <div className="container">


        {/* =====================================
            HERO
        ===================================== */}

        <Reveal>

          <section className="about-hero">

            <div className="about-hero-content">

              <span className="badge badge-safe">
                TENTANG JAGA
              </span>


              <h1>
                Membangun ruang digital
                yang lebih aman dan terpercaya.
              </h1>


              <p>
                JAGA — Jangan Asal Gadal Aplikasi —
                merupakan platform pendamping keamanan
                digital yang membantu masyarakat mengenali
                risiko, melindungi diri, melaporkan ancaman,
                dan memperoleh informasi yang lebih terpercaya.
              </p>

            </div>


            <div className="about-hero-visual">

              <div className="about-shield">

                <ShieldCheck
                  size={70}
                />

              </div>

            </div>

          </section>

        </Reveal>


        {/* =====================================
            CARA KERJA
        ===================================== */}

        <section className="section">

          <Reveal>

            <div className="section-title">

              <span className="section-eyebrow">
                CARA JAGA BEKERJA
              </span>


              <h2>
                Dari mengenali risiko
                sampai melindungi warga.
              </h2>


              <p>
                JAGA menghubungkan beberapa proses
                keamanan dalam satu alur yang mudah
                dipahami masyarakat.
              </p>

            </div>

          </Reveal>


          <div className="about-process-grid">

            <Reveal delay={100}>

              <div className="card about-process-card">

                <div className="about-process-icon green">

                  <Search
                    size={22}
                  />

                </div>


                <span className="about-number">
                  01
                </span>


                <h3>
                  Cek
                </h3>


                <p>
                  Kenali aplikasi atau layanan
                  yang ingin digunakan sebelum
                  mengambil keputusan.
                </p>

              </div>

            </Reveal>


            <Reveal delay={180}>

              <div className="card about-process-card">

                <div className="about-process-icon blue">

                  <ShieldCheck
                    size={22}
                  />

                </div>


                <span className="about-number">
                  02
                </span>


                <h3>
                  Lindungi
                </h3>


                <p>
                  Pahami langkah yang dapat dilakukan
                  untuk menjaga data dan keamanan diri.
                </p>

              </div>

            </Reveal>


            <Reveal delay={260}>

              <div className="card about-process-card">

                <div className="about-process-icon red">

                  <FileWarning
                    size={22}
                  />

                </div>


                <span className="about-number">
                  03
                </span>


                <h3>
                  Laporkan
                </h3>


                <p>
                  Berbagi informasi mengenai
                  kejadian atau aplikasi mencurigakan.
                </p>

              </div>

            </Reveal>


            <Reveal delay={340}>

              <div className="card about-process-card">

                <div className="about-process-icon orange">

                  <BadgeCheck
                    size={22}
                  />

                </div>


                <span className="about-number">
                  04
                </span>


                <h3>
                  Verifikasi
                </h3>


                <p>
                  Laporan dapat diproses untuk
                  membantu menghasilkan informasi
                  yang lebih terpercaya.
                </p>

              </div>

            </Reveal>

          </div>

        </section>


        {/* =====================================
            TRUST
        ===================================== */}

        <Reveal>

          <section className="about-trust-section">

            <div>

              <span className="section-eyebrow">
                TRUSTED DIGITAL ECOSYSTEM
              </span>


              <h2>
                Satu laporan,
                satu informasi,
                lebih banyak yang terlindungi.
              </h2>


              <p>
                JAGA dirancang agar informasi keamanan
                tidak berhenti pada satu pengguna.
                Informasi yang diproses dan diverifikasi
                dapat membantu masyarakat berikutnya
                mengenali risiko yang sama.
              </p>


              <Link
                to="/laporkan"
                className="btn btn-primary"
              >

                Bantu Warga Lain

                <ArrowRight
                  size={16}
                />

              </Link>

            </div>


            <div className="about-trust-visual">

              <div className="about-network-node">

                <Search
                  size={19}
                />

                <span>
                  Cek
                </span>

              </div>


              <div className="about-network-line" />


              <div className="about-network-node">

                <BadgeCheck
                  size={19}
                />

                <span>
                  Verifikasi
                </span>

              </div>


              <div className="about-network-line" />


              <div className="about-network-node">

                <Users
                  size={19}
                />

                <span>
                  Warga
                </span>

              </div>

            </div>

          </section>

        </Reveal>


        {/* =====================================
            PRINCIPLES
        ===================================== */}

        <section className="section">

          <Reveal>

            <div className="section-title">

              <span className="section-eyebrow">
                PRINCIPLES
              </span>


              <h2>
                Prinsip JAGA
              </h2>


              <p>
                Elemen dasar yang menjadi arah
                pengalaman pengguna JAGA.
              </p>

            </div>

          </Reveal>


          {/* PRINCIPLE CARDS */}

          <div className="grid grid-3">


            <Reveal delay={100}>

              <div className="card about-principle-card">

                <div className="about-process-icon green">

                  <LockKeyhole
                    size={25}
                  />

                </div>


                <span className="about-number">
                  01
                </span>


                <h3>
                  Privacy First
                </h3>


                <p>
                  Keamanan dan perlindungan data
                  menjadi bagian penting dari pengalaman.
                </p>

              </div>

            </Reveal>


            <Reveal delay={180}>

              <div className="card about-principle-card">

                <div className="about-process-icon blue">

                  <ShieldCheck
                    size={25}
                  />

                </div>


                <span className="about-number">
                  02
                </span>


                <h3>
                  Transparent
                </h3>


                <p>
                  Informasi risiko disampaikan
                  dengan bahasa yang mudah dipahami.
                </p>

              </div>

            </Reveal>


            <Reveal delay={260}>

              <div className="card about-principle-card">

                <div className="about-process-icon purple">

                  <Network
                    size={25}
                  />

                </div>


                <span className="about-number">
                  03
                </span>


                <h3>
                  Community Driven
                </h3>


                <p>
                  Partisipasi pengguna membantu
                  membangun ekosistem keamanan bersama.
                </p>

              </div>

            </Reveal>


          </div>

        </section>


      </div>

    </div>
  )
}


export default AboutPage