import {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  Search,
} from 'lucide-react'


const examples = [
  'DanaCepatt',
  'Uang Kilat',
  'Pinjam Yuk',
  'Dana Cepat Indonesia',
]


const RESUME_DELAY = 12000


function TypewriterInput() {

  const [displayText, setDisplayText] =
    useState('')

  const [inputValue, setInputValue] =
    useState('')

  const [isPaused, setIsPaused] =
    useState(false)

  const [isDeleting, setIsDeleting] =
    useState(false)

  const [exampleIndex, setExampleIndex] =
    useState(0)


  const resumeTimerRef =
    useRef(null)


  const clearResumeTimer = () => {

    if (resumeTimerRef.current) {

      clearTimeout(
        resumeTimerRef.current
      )

      resumeTimerRef.current = null

    }

  }


  const scheduleResume = () => {

    clearResumeTimer()


    resumeTimerRef.current =
      setTimeout(() => {

        setIsPaused(false)

      }, RESUME_DELAY)
  }


  useEffect(() => {

    if (isPaused) {
      return
    }


    if (inputValue.trim()) {
      return
    }


    const currentText =
      examples[exampleIndex]


    const speed =
      isDeleting
        ? 45
        : 85


    const timer =
      setTimeout(() => {

        if (!isDeleting) {

          const nextText =
            currentText.slice(
              0,
              displayText.length + 1
            )


          setDisplayText(
            nextText
          )


          if (
            nextText === currentText
          ) {

            setTimeout(() => {

              setIsDeleting(true)

            }, 1400)

          }

        } else {

          const nextText =
            currentText.slice(
              0,
              Math.max(
                displayText.length - 1,
                0
              )
            )


          setDisplayText(
            nextText
          )


          if (nextText === '') {

            setIsDeleting(false)

            setExampleIndex(
              previous =>
                (
                  previous + 1
                ) %
                examples.length
            )

          }

        }

      }, speed)


    return () => {

      clearTimeout(timer)

    }

  }, [
    displayText,
    isDeleting,
    exampleIndex,
    isPaused,
    inputValue,
  ])


  useEffect(() => {

    return () => {

      clearResumeTimer()

    }

  }, [])


  const pauseAnimation = () => {

    setIsPaused(true)

    setDisplayText('')

    setIsDeleting(false)

    scheduleResume()

  }


  const handleFocus = () => {

    pauseAnimation()

  }


  const handleChange = (
    event
  ) => {

    const value =
      event.target.value


    setInputValue(value)

    pauseAnimation()

  }


  const handleBlur = () => {

    if (
      !inputValue.trim()
    ) {

      scheduleResume()

    }

  }


  return (

    <div className="typewriter-input">

      <Search
        size={19}
        className="typewriter-input-icon"
        aria-hidden="true"
      />


      <div className="typewriter-input-field">

        {!isPaused &&
          !inputValue && (

          <span
            className="
              typewriter-placeholder-text
            "
            aria-hidden="true"
          >

            {
              displayText ||
              'Ketik nama aplikasi...'
            }


            {displayText && (

              <span
                className="
                  typewriter-placeholder-cursor
                "
              >
                |
              </span>

            )}

          </span>

        )}


        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label="Nama aplikasi"
          autoComplete="off"
        />

      </div>

    </div>
  )
}


export default TypewriterInput