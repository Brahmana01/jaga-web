import {
  Search,
  ShieldCheck,
  FileWarning,
  BadgeCheck,
  LockKeyhole,
  ArrowRight,
} from 'lucide-react'


const steps = [
  {
    number: '01',
    title: 'Cek / Deteksi',
    description:
      'Kenali risiko sejak awal',
    icon: Search,
    tone: 'green',
  },

  {
    number: '02',
    title: 'Lindungi Diri',
    description:
      'Ambil tindakan yang tepat',
    icon: ShieldCheck,
    tone: 'orange',
  },

  {
    number: '03',
    title: 'Laporkan',
    description:
      'Bantu diri & orang lain',
    icon: FileWarning,
    tone: 'red',
  },

  {
    number: '04',
    title: 'Verifikasi',
    description:
      'Proses & verifikasi laporan',
    icon: BadgeCheck,
    tone: 'blue',
  },

  {
    number: '05',
    title: 'Lebih Aman',
    description:
      'Lindungi warga berikutnya',
    icon: LockKeyhole,
    tone: 'green',
  },
]


function SecurityJourney() {

  return (

    <div
      className="security-journey"
      aria-label="Alur keamanan JAGA"
    >

      {steps.map(
        (step, index) => {

          const Icon =
            step.icon


          return (

            <div
              className="journey-wrapper"
              key={step.number}
            >

              <div
                className={
                  `journey-card ${step.tone}`
                }
              >

                <div className="journey-number">
                  {step.number}
                </div>


                <div className="journey-icon">

                  <Icon
                    size={16}
                    aria-hidden="true"
                  />

                </div>


                <div className="journey-content">

                  <strong>
                    {step.title}
                  </strong>

                  <span>
                    {step.description}
                  </span>

                </div>

              </div>


              {index <
                steps.length - 1 && (

                <div
                  className="journey-arrow"
                  aria-hidden="true"
                >

                  <div
                    className="
                      journey-arrow-line
                    "
                  />

                  <ArrowRight
                    size={17}
                  />

                </div>

              )}

            </div>

          )
        }
      )}

    </div>
  )
}


export default SecurityJourney