import {
  Search,
  Filter,
  Download,
  ArrowUpRight
} from 'lucide-react'

import Reveal from '../../components/animation/Reveal'
import { Link } from 'react-router-dom'

import { reports } from '../../data/adminDummy'

function ReportsPage() {

  return (

    <div>

      <div className="admin-page-header">

        <div>

          <span>
            DATA LAPORAN
          </span>

          <h1>
            Laporan Masyarakat
          </h1>

          <p>
            Kelola dan tinjau seluruh laporan
            yang masuk ke JAGA.
          </p>

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
              placeholder="Cari ID, aplikasi, atau nomor..."
            />

          </div>


          <select className="admin-filter">
            <option>
              Semua Status
            </option>

            <option>
              Menunggu
            </option>

            <option>
              Verifikasi
            </option>

            <option>
              Terverifikasi
            </option>

            <option>
              Ditolak
            </option>
          </select>


          <select className="admin-filter">
            <option>
              Semua Risiko
            </option>

            <option>
              Tinggi
            </option>

            <option>
              Sedang
            </option>

            <option>
              Rendah
            </option>
          </select>


          <button className="btn btn-light">
            <Filter size={16} />
            Filter
          </button>

        </div>


        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>

                <th>ID LAPORAN</th>

                <th>APLIKASI</th>

                <th>KATEGORI</th>

                <th>RISIKO</th>

                <th>STATUS</th>

                <th>TANGGAL</th>

                <th />

              </tr>

            </thead>


            <tbody>

              {reports.map((report) => (

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
                    {report.category}
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
                    {report.date}
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
      </Reveal>

    </div>

  )
}

export default ReportsPage