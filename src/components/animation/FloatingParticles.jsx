import {
  useMemo,
} from 'react'


function FloatingParticles({
  count = 18,
}) {

  const particles =
    useMemo(() => {

      return Array.from(
        { length: count },
        (_, index) => ({

          id: index,

          left:
            `${Math.random() * 100}%`,

          top:
            `${Math.random() * 100}%`,

          delay:
            `-${Math.random() * 6}s`,

          duration:
            `${5 + Math.random() * 6}s`,

          size:
            `${2 + Math.random() * 3}px`,

        })
      )

    }, [count])


  return (

    <div
      className="jaga-particles"
      aria-hidden="true"
    >

      {particles.map(
        (particle) => (

          <span
            key={particle.id}
            className="jaga-particle"
            style={{
              '--particle-left':
                particle.left,

              '--particle-top':
                particle.top,

              '--particle-delay':
                particle.delay,

              '--particle-duration':
                particle.duration,

              '--particle-size':
                particle.size,
            }}
          />

        )
      )}

    </div>
  )
}


export default FloatingParticles