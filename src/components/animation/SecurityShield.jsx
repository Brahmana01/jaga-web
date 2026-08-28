// ==============================================
// JAGA - SECURITY SHIELD
// ==============================================

import {
  useEffect,
  useRef,
  useState,
} from 'react'


function SecurityShield({
  showStatus = true,
}) {

  const [glitch, setGlitch] =
    useState(false)

  const glitchTimeoutRef =
    useRef(null)

  const nextTimeoutRef =
    useRef(null)


  useEffect(() => {

    let mounted = true


    const triggerGlitch = () => {

      if (!mounted) {
        return
      }


      // =========================================
      // AKTIFKAN GLITCH
      // =========================================

      setGlitch(true)


      // =========================================
      // MATIKAN GLITCH SETELAH 280ms
      // =========================================

      glitchTimeoutRef.current =
        setTimeout(() => {

          if (!mounted) {
            return
          }


          setGlitch(false)

        }, 280)


      // =========================================
      // JADWAL GLITCH BERIKUTNYA
      // 3 - 6 DETIK RANDOM
      // =========================================

      const nextDelay =
        Math.floor(
          Math.random() * 3000
        ) + 3000


      nextTimeoutRef.current =
        setTimeout(
          triggerGlitch,
          nextDelay
        )
    }


    // =========================================
    // GLITCH PERTAMA
    // =========================================

    nextTimeoutRef.current =
      setTimeout(
        triggerGlitch,
        3500
      )


    // =========================================
    // CLEANUP
    // =========================================

    return () => {

      mounted = false


      if (
        glitchTimeoutRef.current
      ) {

        clearTimeout(
          glitchTimeoutRef.current
        )

        glitchTimeoutRef.current =
          null
      }


      if (
        nextTimeoutRef.current
      ) {

        clearTimeout(
          nextTimeoutRef.current
        )

        nextTimeoutRef.current =
          null
      }

    }

  }, [])


  return (

    <div
      className={`
        security-shield-wrapper
        ${
          glitch
            ? 'security-shield-glitch'
            : ''
        }
      `}
    >


      {/* =====================================
          AMBIENT GLOW
      ===================================== */}

      <div
        className="shield-glow"
        aria-hidden="true"
      />


      {/* =====================================
          ORBIT ONE
      ===================================== */}

      <div
        className="
          shield-orbit
          shield-orbit-one
        "
        aria-hidden="true"
      />


      {/* =====================================
          ORBIT TWO
      ===================================== */}

      <div
        className="
          shield-orbit
          shield-orbit-two
        "
        aria-hidden="true"
      />


      {/* =====================================
          MAIN SHIELD
      ===================================== */}

      <div
        className="security-shield"
      >

        <svg
          viewBox="0 0 300 340"
          className="security-shield-svg"
          role="img"
          aria-label="JAGA Security Shield"
        >

          <defs>


            {/* =================================
                MAIN GRADIENT
            ================================= */}

            <linearGradient
              id="shieldGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >

              <stop
                offset="0%"
                stopColor="#34E59A"
              />


              <stop
                offset="50%"
                stopColor="#10B981"
              />


              <stop
                offset="100%"
                stopColor="#07875E"
              />

            </linearGradient>


            {/* =================================
                EDGE GRADIENT
            ================================= */}

            <linearGradient
              id="shieldEdge"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >

              <stop
                offset="0%"
                stopColor="#8FFFC9"
              />


              <stop
                offset="100%"
                stopColor="#16C784"
              />

            </linearGradient>


            {/* =================================
                SHIELD GLOW FILTER
            ================================= */}

            <filter
              id="shieldGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >

              <feGaussianBlur
                stdDeviation="7"
                result="blur"
              />


              <feMerge>

                <feMergeNode
                  in="blur"
                />

                <feMergeNode
                  in="SourceGraphic"
                />

              </feMerge>

            </filter>

          </defs>


          {/* =================================
              OUTER SHIELD
          ================================= */}

          <path
            d="
              M150 18
              L266 62
              L252 190
              C244 253 208 298 150 325
              C92 298 56 253 48 190
              L34 62
              Z
            "
            fill="url(#shieldGradient)"
            stroke="url(#shieldEdge)"
            strokeWidth="5"
            filter="url(#shieldGlow)"
          />


          {/* =================================
              INNER SHIELD
          ================================= */}

          <path
            d="
              M150 42
              L239 76
              L227 184
              C220 232 193 268 150 291
              C107 268 80 232 73 184
              L61 76
              Z
            "
            fill="rgba(4, 30, 51, .28)"
            stroke="rgba(255,255,255,.22)"
            strokeWidth="2"
          />


          {/* =================================
              SECURITY RING
          ================================= */}

          <circle
            cx="150"
            cy="164"
            r="55"
            fill="rgba(255,255,255,.08)"
            stroke="rgba(255,255,255,.28)"
            strokeWidth="2"
          />


          {/* =================================
              INNER CHECK SHIELD
          ================================= */}

          <path
            d="
              M150 115
              C132 130 116 131 116 131
              V163
              C116 188 131 205 150 214
              C169 205 184 188 184 163
              V131
              C184 131 168 130 150 115
              Z
            "
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />


          {/* =================================
              CHECKMARK
          ================================= */}

          <path
            d="
              M136 165
              L146 175
              L167 151
            "
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </svg>


        {/* =================================
            SCAN LINE
        ================================= */}

        <div
          className="shield-scan-line"
          aria-hidden="true"
        />

      </div>


      {/* =====================================
          BUILT-IN STATUS
          HANYA JIKA showStatus = true
      ===================================== */}

      {showStatus && (

        <>

          {/* =================================
              WARNING STATUS
          ================================= */}

          <div
            className="
              shield-status
              shield-status-warning
            "
          >

            <span
              className="
                status-dot
                status-dot-warning
              "
            />


            <div>

              <strong>
                Waspada
              </strong>


              <small>
                Risiko terdeteksi
              </small>

            </div>

          </div>


          {/* =================================
              SAFE STATUS
          ================================= */}

          <div
            className="
              shield-status
              shield-status-safe
            "
          >

            <span
              className="
                status-dot
                status-dot-safe
              "
            />


            <div>

              <strong>
                Lindungi Data
              </strong>


              <small>
                JAGA Security Layer
              </small>

            </div>

          </div>

        </>

      )}


      {/* =====================================
          MICRO PARTICLES
      ===================================== */}

      <span
        className="
          shield-particle
          particle-one
        "
        aria-hidden="true"
      />


      <span
        className="
          shield-particle
          particle-two
        "
        aria-hidden="true"
      />


      <span
        className="
          shield-particle
          particle-three
        "
        aria-hidden="true"
      />


      <span
        className="
          shield-particle
          particle-four
        "
        aria-hidden="true"
      />

    </div>
  )
}


export default SecurityShield