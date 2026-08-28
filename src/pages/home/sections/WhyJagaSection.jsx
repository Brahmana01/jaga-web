import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import {
  useState,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import Reveal
  from '../../../components/animation/Reveal'


const benefits = [

  'Informasi diperbarui dari laporan warga & verifikasi petugas.',

  'Proses aman, cepat, dan bisa dilakukan secara anonim.',

  'Bukti laporan dienkripsi & data pribadi dilindungi.',

  'Bersama kita ciptakan ruang digital yang lebih aman.',

]


function WhyJagaSection() {

  const [tilt, setTilt] =
    useState({
      x: 0,
      y: 0,
    })


  const handlePointerMove = (
    event
  ) => {

    if (
      window.innerWidth < 900
    ) {
      return
    }


    const rect =
      event.currentTarget
        .getBoundingClientRect()


    const x =
      (
        event.clientX -
        rect.left
      ) /
      rect.width -
      0.5


    const y =
      (
        event.clientY -
        rect.top
      ) /
      rect.height -
      0.5


    setTilt({

      x:
        y * -3.5,

      y:
        x * 3.5,

    })
  }


  const resetTilt = () => {

    setTilt({
      x: 0,
      y: 0,
    })
  }


  return (

    <section className="section">

      <div className="container">

        <div className="grid grid-2">


          {/* WHY JAGA */}

          <Reveal>

            <div className="card">

              <span className="section-eyebrow">
                WHY JAGA
              </span>


              <h2
                style={{
                  marginTop: '8px',
                }}
              >
                Kenapa harus JAGA?
              </h2>


              <div
                style={{
                  marginTop: '18px',
                }}
              >

                {benefits.map(
                  (item) => (

                    <p
                      key={item}
                      className="trust-item"
                    >

                      <CheckCircle2
                        size={17}
                        color="#079B62"
                      />

                      <span>
                        {item}
                      </span>

                    </p>

                  )
                )}

              </div>

            </div>

          </Reveal>


          {/* COMMUNITY PROTECTION */}

          <Reveal delay={140}>

            <div
              className="
                card
                interactive-card
              "
              onPointerMove={
                handlePointerMove
              }
              onPointerLeave={
                resetTilt
              }
              style={{
                position: 'relative',
                minHeight: '280px',
                overflow: 'hidden',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

                background:
                  'linear-gradient(135deg, #F3FFF9 0%, #E8F8F1 52%, #F8FCFF 100%)',

                border:
                  '1px solid rgba(16,185,129,.16)',

                boxShadow:
                  '0 18px 45px rgba(12,72,53,.08)',

                transform:
                  `perspective(900px)
                   rotateX(${tilt.x}deg)
                   rotateY(${tilt.y}deg)`,

                transition:
                  'transform .18s ease-out, box-shadow .25s ease',

                transformStyle:
                  'preserve-3d',
              }}
            >

              {/* Decorative glow */}

              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  width: '170px',
                  height: '170px',
                  top: '-70px',
                  right: '-45px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(16,185,129,.24), transparent 68%)',
                  filter: 'blur(8px)',
                  pointerEvents: 'none',
                }}
              />


              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  width: '110px',
                  height: '110px',
                  bottom: '-45px',
                  left: '-35px',
                  borderRadius: '50%',
                  border:
                    '1px solid rgba(16,185,129,.15)',
                  pointerEvents: 'none',
                }}
              />


              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                }}
              >

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                  }}
                >

                  <span className="section-eyebrow">
                    COMMUNITY PROTECTION
                  </span>


                  <div
                    className="
                      icon-circle
                      icon-green
                    "
                  >

                    <ShieldCheck
                      size={21}
                    />

                  </div>

                </div>


                <h3
                  style={{
                    marginTop: '14px',
                    maxWidth: '440px',
                    color: '#10243A',
                    fontSize: '24px',
                    lineHeight: 1.18,
                  }}
                >
                  Satu laporan,
                  lebih banyak yang terlindungi.
                </h3>


                <p
                  style={{
                    marginTop: '10px',
                    maxWidth: '470px',
                    color: '#61748A',
                    fontSize: '13px',
                    lineHeight: 1.7,
                  }}
                >
                  Informasi dari laporan yang telah
                  diverifikasi dapat membantu warga
                  lain mengenali ancaman yang sama.
                </p>


                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px',
                    marginTop: '18px',
                    color: '#496477',
                    fontSize: '11px',
                    fontWeight: 600,
                  }}
                >

                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#16C784',
                      boxShadow:
                        '0 0 0 5px rgba(22,199,132,.10), 0 0 14px rgba(22,199,132,.35)',
                      flexShrink: 0,
                    }}
                  />

                  Informasi aman diteruskan
                  untuk membantu warga berikutnya.

                </div>


                <div
                  style={{
                    marginTop: '20px',
                  }}
                >

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

              </div>


              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: '34px',
                  bottom: '26px',
                  opacity: .12,
                  pointerEvents: 'none',
                }}
              >

                <ShieldCheck
                  size={78}
                />

              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  )
}


export default WhyJagaSection