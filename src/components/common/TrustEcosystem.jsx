import {
  Search,
  Brain,
  FileWarning,
  BadgeCheck,
  ShieldCheck,
} from 'lucide-react'


const nodes = [
  {
    title: 'Cek',
    subtitle: 'Deteksi',
    icon: Search,
    motion: 'micro-search',
  },

  {
    title: 'Analisis',
    subtitle: 'Risiko',
    icon: Brain,
    motion: 'micro-brain',
  },

  {
    title: 'Laporkan',
    subtitle: 'Informasi',
    icon: FileWarning,
    motion: 'micro-report',
  },

  {
    title: 'Verifikasi',
    subtitle: 'Validasi',
    icon: BadgeCheck,
    motion: 'micro-verify',
  },

  {
    title: 'Lindungi',
    subtitle: 'Warga',
    icon: ShieldCheck,
    motion: 'micro-shield',
  },
]


const networkLines = [
  [10, 18, 28, 30],
  [28, 30, 45, 18],
  [45, 18, 64, 32],
  [64, 32, 82, 18],

  [10, 18, 18, 52],
  [28, 30, 35, 57],
  [45, 18, 50, 52],
  [64, 32, 67, 61],
  [82, 18, 86, 50],

  [18, 52, 35, 57],
  [35, 57, 50, 52],
  [50, 52, 67, 61],
  [67, 61, 86, 50],

  [35, 57, 45, 82],
  [67, 61, 59, 84],
]


const networkNodes = [
  [10, 18],
  [28, 30],
  [45, 18],
  [64, 32],
  [82, 18],

  [18, 52],
  [35, 57],
  [50, 52],
  [67, 61],
  [86, 50],

  [45, 82],
  [59, 84],
]


function TrustEcosystem() {

  const setParallax =
    (
      container,
      backX,
      backY,
      midX,
      midY,
      frontX,
      frontY
    ) => {

      container.style.setProperty(
        '--trust-back-x',
        `${backX}px`
      )

      container.style.setProperty(
        '--trust-back-y',
        `${backY}px`
      )

      container.style.setProperty(
        '--trust-mid-x',
        `${midX}px`
      )

      container.style.setProperty(
        '--trust-mid-y',
        `${midY}px`
      )

      container.style.setProperty(
        '--trust-front-x',
        `${frontX}px`
      )

      container.style.setProperty(
        '--trust-front-y',
        `${frontY}px`
      )
    }


  const handlePointerMove = (
    event
  ) => {

    if (
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      return
    }


    if (
      window.innerWidth < 900
    ) {
      return
    }


    const container =
      event.currentTarget


    const rect =
      container.getBoundingClientRect()


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


    setParallax(
      container,

      x * -2,
      y * -2,

      x * -4,
      y * -4,

      x * -6,
      y * -6
    )
  }


  const resetParallax = (
    event
  ) => {

    setParallax(
      event.currentTarget,
      0,
      0,
      0,
      0,
      0,
      0
    )
  }


  return (

    <section className="section">

      <div className="container">

        <div
          className="trust-ecosystem"
          onPointerMove={
            handlePointerMove
          }
          onPointerLeave={
            resetParallax
          }
        >


          {/* =================================
              BACKGROUND NETWORK
          ================================= */}

          <div
            className="trust-network-bg"
            aria-hidden="true"
          >

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >

              {networkLines.map(
                (line, index) => (

                  <line
                    key={`line-${index}`}
                    x1={line[0]}
                    y1={line[1]}
                    x2={line[2]}
                    y2={line[3]}
                  />

                )
              )}


              {networkNodes.map(
                (node, index) => (

                  <circle
                    key={`node-${index}`}
                    cx={node[0]}
                    cy={node[1]}
                    r="0.8"
                  />

                )
              )}

            </svg>

          </div>


          {/* =================================
              CONTENT
          ================================= */}

          <div className="trust-content">

            <span className="section-eyebrow">
              JAGA DIGITAL TRUST
            </span>


            <h2>
              Dari satu pemeriksaan,
              menjadi ekosistem kepercayaan.
            </h2>


            <p className="trust-description">
              Informasi bergerak melalui proses
              deteksi, analisis, pelaporan,
              verifikasi, hingga perlindungan
              pengguna berikutnya.
            </p>


            {/* =================================
                TRUST NETWORK
            ================================= */}

            <div className="trust-network">

              {nodes.map(
                (node, index) => {

                  const Icon =
                    node.icon


                  return (

                    <div
                      className="trust-node-wrapper"
                      key={node.title}
                    >

                      <div
                        className="trust-node"
                        style={{
                          '--node-delay':
                            `${index * 0.55}s`,
                        }}
                      >

                        <div
                          className={
                            `trust-node-icon ${node.motion}`
                          }
                        >

                          <Icon
                            size={21}
                            aria-hidden="true"
                          />

                        </div>


                        <strong>
                          {node.title}
                        </strong>


                        <span>
                          {node.subtitle}
                        </span>

                      </div>


                      {index <
                        nodes.length - 1 && (

                        <div
                          className="trust-connector"
                          style={{
                            '--signal-delay':
                              `${index * 0.55}s`,
                          }}
                          aria-hidden="true"
                        >

                          <span />

                        </div>

                      )}

                    </div>

                  )
                }
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}


export default TrustEcosystem