import {
  FileText,
  Clock3,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

import StatCard from '../../components/common/StatCard'
import { adminStats, reports } from '../../data/adminDummy'

function AdminDashboardPage() {

  return (

    <div>

      <div className="admin-page-header">

        <div>

          <span>
            PANEL JAGA
          </span>

          <h1>
            Dashboard
          </h1>

          <p>
            Pantau laporan dan aktivitas
            keamanan digital masyarakat.
          </p>

        </div>

        <Link
          to="/admin/laporan"
          className="btn btn-primary"
        >
          Lihat Semua Laporan
        </Link>

      </div>

      <Reveal delay={150}> 
      <div className="admin-stat-grid">

        <StatCard
          icon={FileText}
          label="Total Laporan"
          value={adminStats.totalReports}
          description="Semua laporan masuk"
          tone="blue"
        />

        <StatCard
          icon={Clock3}
          label="Menunggu"
          value={adminStats.pendingReports}
          description="Perlu ditinjau"
          tone="orange"
        />

        <StatCard
          icon={CheckCircle2}
          label="Terverifikasi"
          value={adminStats.verifiedReports}
          description="Laporan terkonfirmasi"
          tone="green"
        />

        <StatCard
          icon={ShieldAlert}
          label="Threat Entities"
          value={adminStats.threatEntities}
          description="Entitas teridentifikasi"
          tone="red"
        />

      </div>
      </Reveal>


      <div className="admin-dashboard-grid">


        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>

              <h2>
                Laporan Terbaru
              </h2>

              <p>
                Laporan yang membutuhkan perhatian.
              </p>

            </div>

            <Link to="/admin/laporan">
              Lihat semua →
            </Link>

          </div>


          <div className="admin-table-wrapper">

            <table className="admin-table">

              <thead>

                <tr>
                  <th>ID</th>
                  <th>Aplikasi</th>
                  <th>Risiko</th>
                  <th>Status</th>
                  <th />
                </tr>

              </thead>

              <tbody>

                {reports.slice(0, 4).map((report) => (

                  <tr key={report.id}>

                    <td>
                      <strong>
                        {report.id}
                      </strong>
                    </td>

                    <td>
                      {report.application}
                    </td>

                    <td>
                      <span
                        className={
                          `admin-risk ${report.risk}`
                        }
                      >
                        {report.risk === 'high'
                          ? 'Tinggi'
                          : report.risk === 'medium'
                          ? 'Sedang'
                          : 'Rendah'}
                      </span>
                    </td>

                    <td>
                      <span
                        className={
                          `admin-status ${report.status}`
                        }
                      >
                        {report.status === 'verification'
                          ? 'Verifikasi'
                          : report.status === 'pending'
                          ? 'Menunggu'
                          : report.status === 'verified'
                          ? 'Terverifikasi'
                          : 'Ditolak'}
                      </span>
                    </td>

                    <td>

                      <Link
                        to={`/admin/laporan/${report.id}`}
                        className="table-action"
                      >
                        <ArrowUpRight size={17} />
                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>


        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>

              <h2>
                Ringkasan Aktivitas
              </h2>

              <p>
                7 hari terakhir
              </p>

            </div>

            <MoreHorizontal size={19} />

          </div>


          <div className="activity-summary">

            <div className="activity-number">
              183
            </div>

            <p>
              laporan diterima minggu ini
            </p>


            <div className="activity-bar">

              <span style={{ width: '76%' }} />

            </div>


            <div className="activity-legend">

              <span>
                <i className="dot green" />
                Terverifikasi
              </span>

              <span>
                <i className="dot orange" />
                Diproses
              </span>

              <span>
                <i className="dot red" />
                Ditolak
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default AdminDashboardPage