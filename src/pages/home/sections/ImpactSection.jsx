import {
  Users,
  ShieldAlert,
  ClipboardCheck,
  CheckCircle2,
  Activity,
} from 'lucide-react'

import {
  useState,
} from 'react'

import Reveal
  from '../../../components/animation/Reveal'

import AnimatedCounter
  from '../../../components/animation/AnimatedCounter'


function ImpactVisual() {

  return (

    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '220px',
        height: '220px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >

      <div
        style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(64,229,161,.20), transparent 70%)',
          filter: 'blur(8px)',
        }}
      />


      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        style={{
          position: 'absolute',
          overflow: 'visible',
        }}
      >

        <defs>

          <radialGradient
            id="impactCore"
            cx="50%"
            cy="45%"
            r="65%"
          >

            <stop
              offset="0%"
              stopColor="#42E39C"
              stopOpacity="0.95"
            />

            <stop
              offset="48%"
              stopColor="#0FB77A"
              stopOpacity="0.60"
            />

            <stop
              offset="100%"
              stopColor="#06233D"
              stopOpacity="0"
            />

          </radialGradient>


          <filter
            id="impactBlur"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >

            <feGaussianBlur
              stdDeviation="5"
            />

          </filter>

        </defs>


        <ellipse
          cx="110"
          cy="110"
          rx="92"
          ry="40"
          fill="none"
          stroke="rgba(78,238,171,.12)"
          strokeWidth="1"
        >

          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 110 110"
            to="360 110 110"
            dur="16s"
            repeatCount="indefinite"
          />

        </ellipse>


        <ellipse
          cx="110"
          cy="110"
          rx="72"
          ry="31"
          fill="none"
          stroke="rgba(99,182,255,.16)"
          strokeWidth="1"
        >

          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 110 110"
            to="0 110 110"
            dur="11s"
            repeatCount="indefinite"
          />

        </ellipse>


        <circle
          cx="110"
          cy="110"
          r="52"
          fill="url(#impactCore)"
          filter="url(#impactBlur)"
        />


        <circle
          cx="110"
          cy="110"
          r="37"
          fill="rgba(7,39,65,.94)"
          stroke="rgba(71,231,161,.35)"
          strokeWidth="1"
        />


        <circle
          cx="110"
          cy="110"
          r="27"
          fill="none"
          stroke="rgba(255,255,255,.08)"
          strokeWidth="1"
        >

          <animate
            attributeName="r"
            values="27;30;27"
            dur="2.8s"
            repeatCount="indefinite"
          />

          <animate
            attributeName="opacity"
            values=".35;1;.35"
            dur="2.8s"
            repeatCount="indefinite"
          />

        </circle>


        <circle
          cx="110"
          cy="70"
          r="4"
          fill="#42E39C"
        >

          <animate
            attributeName="opacity"
            values=".35;1;.35"
            dur="1.7s"
            repeatCount="indefinite"
          />

        </circle>


        <circle
          cx="151"
          cy="111"
          r="4"
          fill="#65B7FF"
        >

          <animate
            attributeName="opacity"
            values=".25;1;.25"
            dur="2.2s"
            repeatCount="indefinite"
          />

        </circle>


        <circle
          cx="82"
          cy="145"
          r="4"
          fill="#8A76FF"
        >

          <animate
            attributeName="opacity"
            values=".25;1;.25"
            dur="2.5s"
            repeatCount="indefinite"
          />

        </circle>


        <path
          d="
            M110 70
            C130 78 145 94 151 111
          "
          fill="none"
          stroke="rgba(66,227,156,.28)"
          strokeWidth="1"
          strokeDasharray="4 6"
        >

          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-20"
            dur="1.8s"
            repeatCount="indefinite"
          />

        </path>


        <circle
          cx="110"
          cy="110"
          r="13"
          fill="rgba(66,227,156,.10)"
          stroke="rgba(66,227,156,.5)"
          strokeWidth="1"
        />

      </svg>

    </div>
  )
}


const stats = [

  {
    value: 12846,
    label: 'Aplikasi diperiksa',
    icon: Users,
    tone: '#46E3A0',
  },

  {
    value: 1352,
    label: 'Aplikasi berisiko',
    icon: ShieldAlert,
    tone: '#FF647C',
  },

  {
    value: 842,
    label: 'Laporan diterima',
    icon: ClipboardCheck,
    tone: '#63A9FF',
  },

  {
    value: 623,
    label: 'Laporan terverifikasi',
    icon: CheckCircle2,
    tone: '#46E3A0',
  },

]


function ImpactSection() {

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
      ) / rect.width - 0.5


    const y =
      (
        event.clientY -
        rect.top
      ) / rect.height - 0.5


    setTilt({
      x: y * -2.2,
      y: x * 2.2,
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

        <Reveal>

          <div
            className="
              section-title
              impact-title
            "
          >

            <span className="section-eyebrow">
              JAGA IMPACT
            </span>


            <h2>
              Dampak Bersama
            </h2>


            <p>
              Setiap pemeriksaan dan laporan membantu
              membangun ekosistem digital yang lebih aman.
            </p>

          </div>

        </Reveal>


        <Reveal delay={100}>

          <div
            className="impact-card"
            onPointerMove={
              handlePointerMove
            }
            onPointerLeave={
              resetTilt
            }
            style={{
              display: 'grid',

              gridTemplateColumns:
                '1fr 240px',

              alignItems: 'center',

              gap: '20px',

              position: 'relative',

              overflow: 'hidden',

              minHeight: '270px',

              padding: '24px',

              borderRadius: '18px',

              background:
                'linear-gradient(135deg, #061D34 0%, #0A3151 100%)',

              boxShadow:
                '0 24px 55px rgba(4,28,49,.20)',

              transform:
                `perspective(1100px)
                 rotateX(${tilt.x}deg)
                 rotateY(${tilt.y}deg)`,

              transition:
                'transform .18s ease-out',

              transformStyle:
                'preserve-3d',
            }}
          >

            <div
              style={{
                position: 'absolute',
                width: '360px',
                height: '360px',
                right: '-180px',
                top: '-150px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(48,205,148,.13), transparent 68%)',
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
                  gap: '8px',
                  marginBottom: '18px',
                }}
              >

                <Activity
                  size={16}
                  color="#46E3A0"
                />


                <span
                  style={{
                    color: '#8FA8BD',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Live community impact
                </span>

              </div>


              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(2, minmax(0, 1fr))',
                  border:
                    '1px solid rgba(255,255,255,.07)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background:
                    'rgba(255,255,255,.025)',
                }}
              >

                {stats.map(
                  (item, index) => {

                    const Icon =
                      item.icon


                    return (

                      <div
                        key={item.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          minHeight: '94px',
                          padding: '15px 16px',
                          borderRight:
                            index % 2 === 0
                              ? '1px solid rgba(255,255,255,.07)'
                              : '0',
                          borderBottom:
                            index < 2
                              ? '1px solid rgba(255,255,255,.07)'
                              : '0',
                        }}
                      >

                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '12px',
                            background:
                              `${item.tone}18`,
                            color:
                              item.tone,
                            boxShadow:
                              `0 0 24px ${item.tone}12`,
                          }}
                        >

                          <Icon
                            size={20}
                          />

                        </div>


                        <div>

                          <strong
                            style={{
                              display: 'block',
                              color: 'white',
                              fontSize: '23px',
                              lineHeight: 1,
                              fontWeight: 800,
                            }}
                          >

                            <AnimatedCounter
                              value={
                                item.value
                              }
                            />

                          </strong>


                          <span
                            style={{
                              display: 'block',
                              marginTop: '6px',
                              color: '#AFC1D2',
                              fontSize: '10px',
                            }}
                          >
                            {item.label}
                          </span>

                        </div>

                      </div>

                    )
                  }
                )}

              </div>

            </div>


            <ImpactVisual />

          </div>

        </Reveal>

      </div>

    </section>
  )
}


export default ImpactSection