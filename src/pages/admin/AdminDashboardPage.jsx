import { useState, useEffect } from 'react'
import {
  FileText,
  Clock3,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

import StatCard from '../../components/common/StatCard'

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

const categoryLabels = {
  pinjol_ilegal: 'Pinjol Ilegal',
  judi_online: 'Judi Online',
  investasi_bodong: 'Investasi Bodong',
  lainnya: 'Lainnya',
}

function AdminDashboardPage() {
  const [reports, setReports] = useState([])
  const [threatEntities, setThreatEntities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const token = localStorage.getItem('jaga_token')

        const [reportsRes, threatsRes] = await Promise.all([
          fetch(`${apiUrl}/report/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${apiUrl}/check/threats`),
        ])

        const reportsJson = await reportsRes.json()
        const threatsJson = await threatsRes.json()

        setReports(reportsJson.data || [])
        setThreatEntities(threatsJson.data || [])

      } catch (err) {
        console.error('Gagal memuat data dashboard:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const totalReports = reports.length
  const topThreats = [...threatEntities]
    .sort((a, b) => b.ReportCount - a.ReportCount)
    .slice(0, 3)

  const categoryBreakdown = reports.reduce((acc, report) => {
    const cat = report.Category
    acc[cat] = (acc[cat] || 0) + 1
    return acc
  }, {})
  const pendingReports = reports.filter((r) => r.Status === 'pending').length
  const verifiedReports = reports.filter((r) => r.Status === 'diterima').length
  const recentReports = reports.slice(0, 4)

  if (isLoading) {
    return <div>Memuat data dashboard...</div>
  }

  return (
    <div>

      <div className="admin-page-header">
        <div>
          <span>PANEL JAGA</span>
          <h1>Dashboard</h1>
          <p>Pantau laporan dan aktivitas keamanan digital masyarakat.</p>
        </div>

        <Link to="/admin/laporan" className="btn btn-primary">
          Lihat Semua Laporan
        </Link>
      </div>

      <Reveal delay={150}>
      <div className="admin-stat-grid">
        <StatCard icon={FileText} label="Total Laporan" value={totalReports} description="Semua laporan masuk" tone="blue" />
        <StatCard icon={Clock3} label="Menunggu" value={pendingReports} description="Perlu ditinjau" tone="orange" />
        <StatCard icon={CheckCircle2} label="Terverifikasi" value={verifiedReports} description="Laporan terkonfirmasi" tone="green" />
        <StatCard icon={ShieldAlert} label="Threat Entities" value={threatEntities.length} description="Entitas teridentifikasi" tone="red" />
      </div>
      </Reveal>

      <div className="admin-dashboard-grid">

        <div className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <h2>Laporan Terbaru</h2>
              <p>Laporan yang membutuhkan perhatian.</p>
            </div>
            <Link to="/admin/laporan">Lihat semua →</Link>
          </div>

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Aplikasi</th>
                  <th>Keparahan</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report) => (
                  <tr key={report.ID}>
                    <td><strong>{report.ID}</strong></td>
                    <td>{report.ReportedName}</td>
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
        </div>

        <div className="stack">

          <div className="admin-panel">
            <div className="admin-panel-header">
              <div>
                <h2>Entitas Paling Sering Dilaporkan</h2>
                <p>Top 3 berdasarkan jumlah laporan</p>
              </div>
            </div>

            <div style={{ padding: '0 20px 20px' }}>
              {topThreats.length === 0 ? (
                <p className="muted">Belum ada data.</p>
              ) : (
                topThreats.map((entity) => (
                  <div key={entity.ID} className="review-row">
                    <ShieldAlert size={18} />
                    <div>
                      <span>{entity.Name}</span>
                      <strong>{entity.ReportCount} laporan</strong>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="admin-panel">
            <div className="admin-panel-header">
              <div>
                <h2>Kategori Laporan</h2>
                <p>Sebaran berdasarkan jenis kasus</p>
              </div>
            </div>

            <div style={{ padding: '0 20px 20px' }}>
              {Object.entries(categoryBreakdown).map(([category, count]) => (
                <div key={category} className="review-row">
                  <div>
                    <span>{categoryLabels[category] || category}</span>
                    <strong>{count} laporan</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboardPage