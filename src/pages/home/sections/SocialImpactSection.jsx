import {
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

import Reveal
  from '../../../components/animation/Reveal'


function SocialImpactSection() {

  return (

    <section className="section">

      <div className="container">

        <Reveal delay={120}>

          <div
            className="card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '26px 28px',

              background:
                'linear-gradient(135deg, #FFFFFF 0%, #FAFFFC 58%, #F2FBF7 100%)',

              border:
                '1px solid rgba(16,185,129,.12)',
            }}
          >

            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: '180px',
                height: '180px',
                right: '-80px',
                top: '-90px',
                borderRadius: '50%',
                border:
                  '1px solid rgba(16,185,129,.10)',
                boxShadow:
                  '0 0 0 25px rgba(16,185,129,.025), 0 0 0 50px rgba(16,185,129,.015)',
                pointerEvents: 'none',
              }}
            />


            <div
              style={{
                position: 'relative',
                zIndex: 2,

                display: 'grid',

                gridTemplateColumns:
                  '1fr auto',

                alignItems: 'center',

                gap: '30px',
              }}
            >

              <div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    marginBottom: '13px',
                    padding: '7px 10px',
                    borderRadius: '999px',
                    background: '#EAF3FF',
                    color: '#3676E8',
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '.06em',
                  }}
                >

                  <Sparkles
                    size={13}
                  />

                  SOCIAL IMPACT

                </div>


                <h2
                  style={{
                    margin: '0 0 8px',
                    fontSize: '26px',
                    lineHeight: 1.15,
                    color: '#10243A',
                  }}
                >
                  Trusted Digital Society
                </h2>


                <p
                  className="muted"
                  style={{
                    maxWidth: '760px',
                    margin: 0,
                    fontSize: '13px',
                    lineHeight: 1.7,
                  }}
                >
                  JAGA dirancang untuk mendukung
                  masyarakat yang lebih aman,
                  terinformasi, dan mampu mengambil
                  keputusan digital dengan lebih baik.
                </p>


                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '15px',
                    color: '#557083',
                    fontSize: '10px',
                    fontWeight: 700,
                  }}
                >

                  <CheckCircle2
                    size={15}
                    color="#16B778"
                  />

                  Mendukung ekosistem digital
                  yang lebih aman dan terpercaya.

                </div>

              </div>


              <div
                style={{
                  minWidth: '105px',
                  minHeight: '105px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '22px',

                  background:
                    'linear-gradient(145deg, #0EAD70, #39D99A)',

                  color: 'white',

                  boxShadow:
                    '0 14px 35px rgba(16,185,129,.20)',

                  transform:
                    'rotate(-2deg)',
                }}
              >

                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    opacity: .82,
                    letterSpacing: '.08em',
                  }}
                >
                  SDG
                </span>


                <strong
                  style={{
                    marginTop: '2px',
                    fontSize: '31px',
                    lineHeight: 1,
                    fontWeight: 900,
                  }}
                >
                  16
                </strong>


                <span
                  style={{
                    marginTop: '5px',
                    padding: '4px 7px',
                    borderRadius: '999px',
                    background:
                      'rgba(255,255,255,.18)',
                    fontSize: '8px',
                    fontWeight: 700,
                  }}
                >
                  TRUST & SAFETY
                </span>

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  )
}


export default SocialImpactSection