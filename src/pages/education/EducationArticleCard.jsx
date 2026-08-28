import {
  ArrowRight,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import Reveal
  from '../../components/animation/Reveal'


function EducationArticleCard({
  article,
  index,
}) {

  const Icon =
    article.icon


  return (

    <Reveal
      delay={index * 130}
    >

      <article
        className={`
          card
          interactive-card
          education-article-card
          education-article-card-v2
          education-article-${article.tone}
        `}
      >

        <div className="education-article-top">

          <span
            className={`
              badge
              badge-${article.tone}
            `}
          >
            {article.badge}
          </span>


          <div className="education-article-icon">

            <Icon
              size={19}
            />

          </div>

        </div>


        <div className="education-article-copy">

          <h3>
            {article.title}
          </h3>


          <p>
            {article.description}
          </p>

        </div>


        <Link
          to={`/edukasi/${article.slug}`}
          className="education-article-link"
        >

          <span>
            Baca materi
          </span>


          <ArrowRight
            size={14}
          />

        </Link>


        <div
          className="education-article-orb"
          aria-hidden="true"
        />

      </article>

    </Reveal>

  )
}


export default EducationArticleCard