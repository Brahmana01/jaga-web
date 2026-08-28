import {
  useEffect,
  useRef,
  useState,
} from 'react'


function AnimatedCounter({
  value = 0,
  duration = 1800,
  suffix = '',
}) {

  const ref =
    useRef(null)

  const animationFrameRef =
    useRef(null)

  const [display, setDisplay] =
    useState(0)

  const [started, setStarted] =
    useState(false)


  useEffect(() => {

    const element =
      ref.current

    if (!element) {
      return
    }


    if (
      typeof IntersectionObserver ===
      'undefined'
    ) {

      setStarted(true)

      return
    }


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (
            entry.isIntersecting
          ) {

            setStarted(true)

            observer.unobserve(
              entry.target
            )

          }

        },
        {
          threshold: 0.3,
        }
      )


    observer.observe(element)


    return () => {

      observer.disconnect()

    }

  }, [])


  useEffect(() => {

    if (!started) {
      return
    }


    if (animationFrameRef.current) {

      cancelAnimationFrame(
        animationFrameRef.current
      )

    }


    let startTime = null


    const animate = (
      currentTime
    ) => {

      if (startTime === null) {

        startTime =
          currentTime

      }


      const progress =
        Math.min(
          (
            currentTime -
            startTime
          ) / duration,
          1
        )


      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        )


      const nextValue =
        Math.floor(
          value * eased
        )


      setDisplay(
        nextValue
      )


      if (
        progress < 1
      ) {

        animationFrameRef.current =
          requestAnimationFrame(
            animate
          )

      } else {

        setDisplay(
          value
        )

      }

    }


    animationFrameRef.current =
      requestAnimationFrame(
        animate
      )


    return () => {

      if (
        animationFrameRef.current
      ) {

        cancelAnimationFrame(
          animationFrameRef.current
        )

        animationFrameRef.current =
          null

      }

    }

  }, [
    started,
    value,
    duration,
  ])


  return (

    <span ref={ref}>

      {display.toLocaleString(
        'id-ID'
      )}

      {suffix}

    </span>
  )
}


export default AnimatedCounter