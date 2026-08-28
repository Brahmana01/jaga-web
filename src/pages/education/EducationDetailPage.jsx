import { useParams, Link } from 'react-router-dom'
import { ShieldCheck, ArrowLeft } from 'lucide-react'
import Reveal from '../../components/animation/Reveal'

const content = {
  'cara-mengecek-aplikasi-pinjaman': {
    category: 'PENCEGAHAN',
    title: 'Cara Mengecek Aplikasi Pinjaman',
    text: 'Sebelum memasang aplikasi pinjaman, periksa identitas penyelenggara, informasi biaya, izin aplikasi, dan kanal komunikasi resminya.'
  },

  'izin-aplikasi-berbahaya': {
    category: 'KEAMANAN DATA',
    title: 'Waspadai Izin Aplikasi',
    text: 'Aplikasi yang meminta akses tidak relevan terhadap fungsi utamanya perlu mendapatkan perhatian khusus.'
  },

  'lindungi-data-pribadi': {
    category: 'KEAMANAN DATA',
    title: 'Lindungi Data Pribadi',
    text: 'Jangan membagikan OTP, password, PIN, atau informasi sensitif kepada pihak yang tidak dapat diverifikasi.'
  },

  'sudah-jadi-korban': {
    category: 'BANTUAN',
    title: 'Apa yang Harus Dilakukan Jika Jadi Korban?',
    text: 'Prioritaskan keselamatan, amankan akun, simpan bukti, dan gunakan kanal pelaporan yang sesuai.'
  }
}

function EducationDetailPage() {

  const { slug } = useParams()

  const article =
    content[slug] ||
    content['kenali-pinjol-legal']

  return (

    <div className="page">

      <div
        className="container"
        style={{ maxWidth: 850 }}
      >

        <Link
          to="/edukasi"
          className="back-link"
        >
          <ArrowLeft size={16} />
          Kembali ke Edukasi
        </Link>

        <Reveal>
        <article
          className="article card"
        >

          <div className="article-icon">
            <ShieldCheck size={32} />
          </div>

          <span className="badge badge-blue">
            {article.category}
          </span>

          <h1>
            {article.title}
          </h1>

          <p className="article-lead">
            {article.text}
          </p>


          <div className="divider" />


          <h2>
            Hal yang perlu diperhatikan
          </h2>

          <ul className="article-list">

            <li>
              Periksa identitas dan informasi
              penyelenggara.
            </li>

            <li>
              Jangan memberikan data sensitif
              tanpa alasan yang jelas.
            </li>

            <li>
              Waspadai tekanan, ancaman,
              atau permintaan transfer.
            </li>

            <li>
              Simpan bukti komunikasi jika
              terjadi masalah.
            </li>

          </ul>

        </article>
        </Reveal>

      </div>

    </div>

  )
}

export default EducationDetailPage