import {
  Search,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import TypewriterText
  from '../../../components/animation/TypewriterText'

import TypewriterInput
  from '../../../components/animation/TypewriterInput'

import HeroSecurityComposite
  from '../../../components/animation/HeroSecurityComposite'

import FloatingParticles
  from '../../../components/animation/FloatingParticles'


function HeroSection() {

  return (

    <section className="hero hero-motion">

      <FloatingParticles
        count={22}
      />


      <div
        className="container hero-inner"
        style={{
          gridTemplateColumns:
            'minmax(0, .94fr) minmax(0, 1.06fr)',

          gap:
            '20px',

          alignItems:
            'center',
        }}
      >


        {/* =====================================
            LEFT
        ===================================== */}

        <div
          className="hero-copy"
          style={{
            position:
              'relative',

            zIndex:
              40,

            maxWidth:
              '510px',

            paddingRight:
              '6px',
          }}
        >

          <span className="hero-eyebrow">
            🛡️ Keamanan Digital Masyarakat
          </span>


          <h1>
            Cek dulu sebelum{' '}

            <span>
              pinjam!
            </span>
          </h1>


          <p>

            <TypewriterText
              text={
                'JAGA membantu kamu mengenali risiko aplikasi pinjaman online, melindungi data, dan menentukan langkah yang tepat.'
              }
              speed={25}
              startDelay={700}
              minWait={9000}
              maxWait={18000}
            />

          </p>


          <div className="search-box">

            <TypewriterInput />


            <Link
              to="/cek-aplikasi"
              className="btn btn-primary"
            >

              <Search
                size={18}
              />

              Cek Sekarang

            </Link>

          </div>


          <div className="hero-tags">

            <span>
              Contoh pencarian:
            </span>


            <span className="hero-tag">
              DanaCepatt
            </span>


            <span className="hero-tag">
              Uang Kilat
            </span>


            <span className="hero-tag">
              Pinjam Yuk
            </span>


            <span className="hero-tag">

            </span>

          </div>

        </div>


        {/* =====================================
            RIGHT
        ===================================== */}

        <div
          className="hero-visual"
          style={{
            position:
              'relative',

            width:
              '100%',

            minWidth:
              '0',

            minHeight:
              '450px',

            display:
              'flex',

            alignItems:
              'center',

            justifyContent:
              'flex-end',

            overflow:
              'visible',

            zIndex:
              10,

            paddingLeft:
              '12px',
          }}
        >

          <HeroSecurityComposite />

        </div>

      </div>

    </section>
  )
}


export default HeroSection