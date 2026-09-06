// ==============================================
// JAGA - CHECK APPLICATION PAGE
// ==============================================

import {
  Search,
  ShieldCheck,
  Database,
  AlertTriangle,
  LockKeyhole,
  ArrowRight,
  CheckCircle2,
  Activity,
  ScanSearch,
  Fingerprint,
  Sparkles,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import Reveal
  from '../../components/animation/Reveal'

import TypewriterInput
  from '../../components/animation/TypewriterInput'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// ==============================================
// PAGE
// ==============================================

function CheckApplicationPage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!query.trim()) {
      return  // jangan lakukan apa-apa kalau kosong
    }
    navigate(`/hasil-pemeriksaan?q=${encodeURIComponent(query)}`)
  }

  const features = [

    {
      icon: Database,
      tone: 'green',
      number: '01',
      title: 'Cek Data',
      description:
        'Sistem mencocokkan nama aplikasi dengan data dan informasi yang tersedia.',
    },

    {
      icon: AlertTriangle,
      tone: 'orange',
      number: '02',
      title: 'Analisis Risiko',
      description:
        'Indikator risiko membantu memahami potensi bahaya sebelum mengambil keputusan.',
    },

    {
      icon: ShieldCheck,
      tone: 'blue',
      number: '03',
      title: 'Rekomendasi',
      description:
        'JAGA memberikan arahan tindakan berdasarkan hasil pemeriksaan.',
    },

  ]


  const indicators = [

    'Legalitas dan status aplikasi',

    'Indikasi risiko keamanan',

    'Informasi perlindungan pengguna',

  ]


  return (

    <div className="page check-page">

      <div className="container">


        {/* =========================================
            HEADER
        ========================================= */}

        <Reveal>

          <header className="page-header check-page-header">

            <div className="check-header-badge">

              <ShieldCheck size={14} />

              <span>
                JAGA CHECK
              </span>

            </div>


            <h1>
              Cek Aplikasi
              <br />
              Sebelum Mengambil Keputusan
            </h1>


            <p>
              Periksa aplikasi pinjaman online
              sebelum kamu memberikan data,
              memasang aplikasi, atau melakukan
              transaksi.
            </p>

          </header>

        </Reveal>


        {/* =========================================
            MAIN CHECK EXPERIENCE
        ========================================= */}

        <Reveal delay={100}>

          <section className="check-hero card check-hero-v2">


            {/* =====================================
                LEFT CONTENT
            ===================================== */}

            <div className="check-hero-content">

              <div className="check-live-label">

                <span className="check-live-dot" />

                <span>
                  APPLICATION SAFETY CHECK
                </span>

              </div>


              <h2>
                Apakah aplikasi ini aman?
              </h2>


              <p className="check-description">
                Masukkan nama aplikasi yang ingin
                kamu periksa. JAGA membantu
                mengidentifikasi indikator risiko
                sebelum kamu mengambil keputusan.
              </p>


              {/* SEARCH */}

              <div className="search-box check-search">

                <TypewriterInput
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button
                  type="button"
                  onClick={handleSearch}
                  className="btn btn-primary check-search-button"
                >
                  <Search size={17} />
                  <span>Periksa</span>
                  <ArrowRight size={15} />
                </button>

              </div>


              {/* EXAMPLES */}

              <div className="check-example-row">

                <span>
                  Contoh:
                </span>

                <span className="badge badge-safe">
                  DanaCepatt
                </span>

                <span className="badge badge-warning">
                  Uang Kilat
                </span>

                <span className="badge badge-blue">
                  Pinjam Yuk
                </span>

              </div>


              {/* SECURITY STATUS */}

              <div className="check-security-status">

                <div className="check-status-icon">

                  <Activity
                    size={16}
                  />

                </div>


                <div>

                  <strong>
                    Pemeriksaan berbasis indikator
                  </strong>

                  <span>
                    Analisis dilakukan berdasarkan
                    indikator keamanan yang tersedia.
                  </span>

                </div>

              </div>

            </div>


            {/* =====================================
                RIGHT 2.5D SCAN VISUAL
            ===================================== */}

            <div
              className="check-visual-v2"
              aria-hidden="true"
            >

              <div className="check-visual-grid" />


              <div className="check-visual-orbit orbit-1" />

              <div className="check-visual-orbit orbit-2" />

              <div className="check-visual-orbit orbit-3" />


              <div className="check-visual-scan-ring">

                <span />
                <span />
                <span />

              </div>


              <div className="check-visual-shield">

                <div className="check-visual-shield-glow" />

                <ShieldCheck
                  size={62}
                  strokeWidth={1.6}
                />

              </div>


              <div className="check-visual-scan-line" />


              <div className="check-floating-indicator indicator-top">

                <CheckCircle2
                  size={15}
                />

                <div>

                  <strong>
                    Legalitas
                  </strong>

                  <small>
                    Teridentifikasi
                  </small>

                </div>

              </div>


              <div className="check-floating-indicator indicator-left">

                <Database
                  size={15}
                />

                <div>

                  <strong>
                    Data
                  </strong>

                  <small>
                    Dicocokkan
                  </small>

                </div>

              </div>


              <div className="check-floating-indicator indicator-right">

                <AlertTriangle
                  size={15}
                />

                <div>

                  <strong>
                    Risiko
                  </strong>

                  <small>
                    Dianalisis
                  </small>

                </div>

              </div>


              <div className="check-floating-indicator indicator-bottom">

                <LockKeyhole
                  size={15}
                />

                <div>

                  <strong>
                    Data Safety
                  </strong>

                  <small>
                    Perlindungan
                  </small>

                </div>

              </div>


              <div className="check-scanning-status">

                <span />

                SCANNING

              </div>

            </div>

          </section>

        </Reveal>


        {/* =========================================
            FEATURES
        ========================================= */}

        <section className="section check-section">

          <Reveal delay={180}>

            <div className="section-title check-section-heading">

              <div>

                <span className="section-eyebrow">
                  WHAT JAGA CHECKS
                </span>


                <h2>
                  Apa yang diperiksa?
                </h2>

              </div>


              <p>
                Pemeriksaan dirancang agar informasi
                penting dapat dipahami dengan cepat
                sebelum kamu mengambil keputusan.
              </p>

            </div>

          </Reveal>


          <div className="grid grid-3 check-feature-grid">

            {features.map(
              (feature, index) => {

                const Icon =
                  feature.icon


                return (

                  <Reveal
                    key={feature.title}
                    delay={240 + index * 100}
                  >

                    <article
                      className="
                        card
                        interactive-card
                        check-feature-card-v2
                      "
                    >

                      <div className="check-feature-header">

                        <div
                          className={
                            `icon-circle icon-${feature.tone}`
                          }
                        >

                          <Icon
                            size={23}
                          />

                        </div>


                        <span className="check-feature-index">
                          {feature.number}
                        </span>

                      </div>


                      <h3>
                        {feature.title}
                      </h3>


                      <p className="muted">
                        {feature.description}
                      </p>


                      <div className="check-feature-bottom">

                        <span>
                          Lihat indikator
                        </span>

                        <ArrowRight
                          size={14}
                        />

                      </div>

                    </article>

                  </Reveal>

                )
              }
            )}

          </div>

        </section>


        {/* =========================================
            SECURITY INDICATORS
        ========================================= */}

        <section className="section check-section">

          <Reveal delay={300}>

            <div className="card check-indicators-v2">

              <div className="check-indicators-header">

                <div>

                  <span className="section-eyebrow">
                    SECURITY INDICATORS
                  </span>


                  <h2>
                    Hal yang perlu diperhatikan
                  </h2>

                  <p className="muted">
                    Tiga area utama yang membantu
                    membaca keamanan aplikasi.
                  </p>

                </div>


                <div className="check-security-badge">

                  <LockKeyhole
                    size={14}
                  />

                  Data Safety

                </div>

              </div>


              <div className="check-indicator-list">

                {indicators.map(
                  (item, index) => (

                    <div
                      key={item}
                      className="check-indicator-row"
                    >

                      <span className="check-indicator-number">
                        0{index + 1}
                      </span>


                      <div className="check-indicator-check">

                        <CheckCircle2
                          size={17}
                        />

                      </div>


                      <span className="check-indicator-label">
                        {item}
                      </span>


                      <span className="check-indicator-state">
                        Terpantau
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </Reveal>

        </section>


        {/* =========================================
            JAGA PRINCIPLE
        ========================================= */}

        <section className="section check-section">

          <Reveal delay={360}>

            <div className="dark-card card check-principle-v2">

              <div className="check-principle-copy">

                <div className="check-principle-heading">

                  <Sparkles
                    size={16}
                  />

                  <span>
                    JAGA PRINCIPLE
                  </span>

                </div>


                <h2>
                  Cek sebelum percaya.
                </h2>


                <p>
                  Informasi yang terlihat meyakinkan
                  belum tentu aman. Gunakan hasil
                  pemeriksaan JAGA sebagai salah satu
                  pertimbangan sebelum memasang aplikasi
                  atau memberikan data pribadi.
                </p>


                <div className="trust-item">

                  <CheckCircle2
                    size={18}
                  />

                  <span>
                    Lindungi data dan keputusanmu.
                  </span>

                </div>

              </div>


              <div
                className="check-principle-visual"
                aria-hidden="true"
              >

                <div className="principle-ring ring-a" />

                <div className="principle-ring ring-b" />

                <div className="principle-ring ring-c" />


                <div className="principle-lock">

                  <Fingerprint
                    size={48}
                  />

                </div>

              </div>

            </div>

          </Reveal>

        </section>


        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="section check-section">

          <Reveal delay={420}>

            <div className="card check-final-cta-v2">

              <div className="check-cta-icon">

                <ScanSearch
                  size={23}
                />

              </div>


              <span className="section-eyebrow">
                BELUM YAKIN?
              </span>


              <h2>
                Periksa aplikasinya sekarang.
              </h2>


              <p className="muted">
                Jangan mengambil keputusan hanya
                karena sebuah aplikasi terlihat aman.
                Kenali risikonya terlebih dahulu.
              </p>


              <Link
                to="/cek-aplikasi"
                className="btn btn-primary"
              >

                <Search
                  size={16}
                />

                Cek Aplikasi

                <ArrowRight
                  size={16}
                />

              </Link>

            </div>

          </Reveal>

        </section>


      </div>

    </div>
  )
}


export default CheckApplicationPage