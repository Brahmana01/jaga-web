import {
  ShieldCheck,
  LockKeyhole,
  AlertTriangle,
  Search,
  Smartphone,
} from 'lucide-react'


import EducationHeader
  from './EducationHeader'


import EducationCategoryCard
  from './EducationCategoryCard'


import EducationArticleCard
  from './EducationArticleCard'


import './EducationPage.css'


function EducationPage() {

  const categories = [

    {
      icon: ShieldCheck,
      tone: 'green',
      title: 'Kenali Pinjaman Ilegal',
      description:
        'Pelajari ciri-ciri pinjaman online ilegal dan tanda-tanda yang perlu diwaspadai.',
    },

    {
      icon: LockKeyhole,
      tone: 'blue',
      title: 'Lindungi Data Pribadi',
      description:
        'Ketahui data apa saja yang harus dijaga ketika menggunakan layanan digital.',
    },

    {
      icon: AlertTriangle,
      tone: 'orange',
      title: 'Hindari Penipuan',
      description:
        'Kenali pola penipuan digital dan langkah yang dapat dilakukan untuk menghindarinya.',
    },

  ]


  const articles = [

    {
      slug: 'cara-mengecek-aplikasi-pinjaman',
      badge: 'KEAMANAN',
      tone: 'safe',
      icon: Search,
      title:
        'Cara Mengecek Aplikasi Pinjaman',
      description:
        'Pelajari langkah sederhana sebelum memasang aplikasi pinjaman.',
    },

    {
      slug: 'izin-aplikasi-berbahaya',
      badge: 'WASPADA',
      tone: 'warning',
      icon: Smartphone,
      title:
        'Tanda-Tanda Aplikasi Berbahaya',
      description:
        'Kenali izin aplikasi dan pola komunikasi yang mencurigakan.',
    },

    {
      slug: 'lindungi-data-pribadi',
      badge: 'DATA PRIBADI',
      tone: 'blue',
      icon: LockKeyhole,
      title:
        'Menjaga Data Pribadi',
      description:
        'Ketahui cara menjaga informasi pribadi ketika menggunakan internet.',
    },

  ]


  return (

    <div className="page education-page">

      <div className="container">


        {/* =========================================
            HEADER
        ========================================= */}

        <EducationHeader />


        {/* =========================================
            CATEGORY
        ========================================= */}

        <section className="education-section">

          <div className="grid grid-3 education-category-grid">

            {categories.map(
              (category, index) => (

                <EducationCategoryCard
                  key={category.title}
                  category={category}
                  index={index}
                />

              )
            )}

          </div>

        </section>


        {/* =========================================
            ARTICLE
        ========================================= */}

        <section className="section education-section">

          <div className="section-title education-section-title">

            <div>

              <span className="section-eyebrow">
                MATERI EDUKASI
              </span>


              <h2>
                Informasi untuk tetap waspada.
              </h2>

            </div>


            <p>
              Informasi praktis untuk membantu
              kamu lebih aman di ruang digital.
            </p>

          </div>


          <div className="grid grid-3 education-article-grid">

            {articles.map(
              (article, index) => (

                <EducationArticleCard
                  key={article.title}
                  article={article}
                  index={index}
                />

              )
            )}

          </div>

        </section>


      </div>

    </div>

  )
}


export default EducationPage