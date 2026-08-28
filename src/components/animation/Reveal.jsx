import {
  useEffect,
  useRef,
  useState,
} from 'react'


function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
}) {

  const ref =
    useRef(null)

  const [visible, setVisible] =
    useState(false)


  useEffect(() => {

    const element =
      ref.current

    if (!element) {
      return
    }


    /*
      Fallback:
      Jika browser tidak mendukung
      IntersectionObserver, elemen
      tetap ditampilkan.
    */

    if (
      typeof IntersectionObserver ===
      'undefined'
    ) {

      setVisible(true)

      return
    }


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (
            entry.isIntersecting
          ) {

            setVisible(true)

            observer.unobserve(
              entry.target
            )
          }

        },
        {
          threshold,
          rootMargin:
            '0px 0px -30px 0px',
        }
      )


    observer.observe(element)


    return () => {

      observer.disconnect()

    }

  }, [threshold])


  return (

    <div
      ref={ref}
      className={[
        'jaga-reveal',
        `jaga-reveal-${direction}`,
        visible
          ? 'is-visible'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')
      }
      style={{
        '--reveal-delay':
          `${delay}ms`,
      }}
    >

      {children}

    </div>
  )
}


export default Reveal