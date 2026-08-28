import {
  ArrowRight,
} from 'lucide-react'

import Reveal
  from '../../components/animation/Reveal'


function EducationCategoryCard({
  category,
  index,
}) {

  const Icon =
    category.icon


  return (

    <Reveal
      delay={index * 130}
    >

      <article
        className={`
          card
          interactive-card
          education-category-card
          education-category-card-v2
          education-tone-${category.tone}
        `}
      >

        <div className="education-category-top">

          <div
            className="
              education-category-icon
              education-category-icon-v2
            "
          >

            <Icon
              size={24}
            />

          </div>


          <span className="education-category-number">

            0{index + 1}

          </span>

        </div>


        <div className="education-category-copy">

          <h2>
            {category.title}
          </h2>


          <p>
            {category.description}
          </p>

        </div>


        <div className="education-category-footer">

          <span>
            Pelajari lebih lanjut
          </span>


          <span className="education-arrow">

            <ArrowRight
              size={15}
            />

          </span>

        </div>


        <div
          className="education-card-glow"
          aria-hidden="true"
        />

      </article>

    </Reveal>

  )
}


export default EducationCategoryCard