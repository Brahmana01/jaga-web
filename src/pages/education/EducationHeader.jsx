import {
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import Reveal
  from '../../components/animation/Reveal'


function EducationHeader() {

  return (

    <Reveal>

      <header className="education-header">

        <div className="education-header-badge">

          <span className="education-header-badge-icon">

            <ShieldCheck
              size={14}
            />

          </span>

          <span>
            EDUKASI KEAMANAN DIGITAL
          </span>

        </div>


        <div className="education-header-title-wrap">

          <h1>

            Kenali Risiko,
            <br />

            <span>
              Lindungi Diri
            </span>

          </h1>


          <div
            className="education-header-spark"
            aria-hidden="true"
          >

            <Sparkles
              size={18}
            />

          </div>

        </div>


        <p>
          Pelajari cara mengenali aplikasi
          berisiko, menjaga data pribadi,
          dan menghindari penipuan digital.
        </p>


        <div
          className="education-header-line"
          aria-hidden="true"
        />

      </header>

    </Reveal>

  )
}


export default EducationHeader