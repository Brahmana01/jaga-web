import {
  useEffect,
  useRef,
  useState,
} from 'react'


function TypewriterText({
  text,
  speed = 35,
  startDelay = 500,
  minWait = 7000,
  maxWait = 12000,
}) {

  const [displayText, setDisplayText] =
    useState('')

  const [isTyping, setIsTyping] =
    useState(false)


  const typingTimerRef =
    useRef(null)

  const waitTimerRef =
    useRef(null)

  const mountedRef =
    useRef(false)


  useEffect(() => {

    mountedRef.current = true


    const clearTimers = () => {

      if (typingTimerRef.current) {

        clearInterval(
          typingTimerRef.current
        )

        typingTimerRef.current = null

      }


      if (waitTimerRef.current) {

        clearTimeout(
          waitTimerRef.current
        )

        waitTimerRef.current = null

      }

    }


    const getRandomWait = () => {

      if (maxWait <= minWait) {

        return minWait

      }


      return Math.floor(
        Math.random() *
        (maxWait - minWait + 1)
      ) + minWait
    }


    const startTyping = () => {

      if (!mountedRef.current) {
        return
      }


      clearTimers()


      let index = 0


      setDisplayText('')

      setIsTyping(true)


      typingTimerRef.current =
        setInterval(() => {

          if (!mountedRef.current) {
            return
          }


          index += 1


          setDisplayText(
            text.slice(0, index)
          )


          if (
            index >= text.length
          ) {

            clearTimers()


            setIsTyping(false)


            waitTimerRef.current =
              setTimeout(
                startTyping,
                getRandomWait()
              )

          }

        }, speed)
    }


    waitTimerRef.current =
      setTimeout(
        startTyping,
        startDelay
      )


    return () => {

      mountedRef.current = false

      clearTimers()

    }

  }, [
    text,
    speed,
    startDelay,
    minWait,
    maxWait,
  ])


  return (

    <span className="typewriter-text">

      {displayText}

      {isTyping &&
        displayText.length <
          text.length && (

        <span
          className="typewriter-cursor"
          aria-hidden="true"
        >
          |
        </span>

      )}

    </span>
  )
}


export default TypewriterText