const steps = [
  'Informasi',
  'Bukti',
  'Review'
]

function Stepper({ currentStep }) {

  return (

    <div className="report-stepper">

      {steps.map((step, index) => {

        const stepNumber = index + 1

        const completed =
          stepNumber < currentStep

        const active =
          stepNumber === currentStep

        return (

          <div
            className="report-step-wrapper"
            key={step}
          >

            <div
              className={
                `report-step
                ${active ? 'active' : ''}
                ${completed ? 'completed' : ''}`
              }
            >

              <span>
                {completed ? '✓' : stepNumber}
              </span>

              <strong>
                {step}
              </strong>

            </div>


            {index < steps.length - 1 && (

              <div
                className={
                  `report-step-line
                  ${completed ? 'completed' : ''}`
                }
              />

            )}

          </div>

        )

      })}

    </div>

  )
}

export default Stepper