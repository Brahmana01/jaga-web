import { useState, useEffect } from 'react'
import {
  Search,
  Download,
  ArrowUpRight
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

const categoryLabels = {
  pinjol_ilegal: 'Pinjol Ilegal',
  judi_online: 'Judi Online',
  investasi_bodong: 'Investasi Bodong',
  lainnya: 'Lainnya',
}

const severityLabels = {
  ringan: 'Ringan',
  sedang: 'Sedang',
  berat: 'Berat',
}

const statusLabels = {
  pending: 'Menunggu',
  diterima: 'Terverifikasi',
  ditolak: 'Ditolak',
}

function ReportsPage() {
  const [reports, setReports] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [severityFilter, setSeverityFilter] = useState('')

  const fetchReports = async (status = '') => {
    setIsLoading(true)
    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const token = localStorage.getItem('jaga_token')

      const url = status
        ? `${apiUrl}/report/?status=${status}`
        : `${apiUrl}/report/`

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      })

      const json = await response.json()
      setReports(json.data || [])

    } catch (err) {
      console.error('Gagal memuat laporan:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchReports(statusFilter)
  }, [statusFilter])

  const filteredReports = reports.filter((report) => {
    const matchSearch =
      !searchTerm ||
      report.ReportedName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(report.ID).includes(searchTerm)

    const matchSeverity = !severityFilter || report.Severity === severityFilter

    return matchSearch && matchSeverity
  })

  return (
    <div>

      <div className="admin-page-header">
        <div>
          <span>DATA LAPORAN</span>
          <h1>Laporan Masyarakat</h1>
          <p>Kelola dan tinjau seluruh laporan yang masuk ke JAGA.</p>
        </div>

        <button className="btn btn-light">
          <Download size={16} />
          Export
        </button>
      </div>

      <Reveal>
      <div className="admin-panel">

        <div className="report-filter-bar">

          <div className="admin-search">
            <Search size={17} />
            <input
              placeholder="Cari ID atau aplikasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="admin-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Semua Status</option>
            <option value="pending">Menunggu</option>
            <option value="diterima">Terverifikasi</option>
            <option value="ditolak">Ditolak</option>
          </select>

          <select
            className="admin-filter"
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
          >
            <option value="">Semua Keparahan</option>
            <option value="ringan">Ringan</option>
            <option value="sedang">Sedang</option>
            <option value="berat">Berat</option>
          </select>

        </div>

        {isLoading ? (
          <p style={{ padding: 20 }}>Memuat data...</p>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID LAPORAN</th>
                  <th>APLIKASI</th>
                  <th>KATEGORI</th>
                  <th>KEPARAHAN</th>
                  <th>STATUS</th>
                  <th>TANGGAL</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {filteredReports.map((report) => (
                  <tr key={report.ID}>
                    <td><strong>{report.ID}</strong></td>
                    <td>{report.ReportedName}</td>
                    <td>{categoryLabels[report.Category] || report.Category}</td>
                    <td>
                      <span className={`admin-risk ${report.Severity}`}>
                        {severityLabels[report.Severity] || report.Severity}
                      </span>
                    </td>
                    <td>
                      <span className={`admin-status ${report.Status}`}>
                        {statusLabels[report.Status] || report.Status}
                      </span>
                    </td>
                    <td>{new Date(report.CreatedAt).toLocaleDateString('id-ID')}</td>
                    <td>
                      <Link to={`/admin/laporan/${report.ID}`} className="table-action">
                        <ArrowUpRight size={17} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
      </Reveal>

    </div>
  )
}

export default ReportsPage