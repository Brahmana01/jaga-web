import {
  ShieldAlert,
  Search,
  Smartphone,
  Phone,
  TrendingUp
} from 'lucide-react'

import {threatEntities} from '../../data/adminDummy'
import Reveal from '../../components/animation/Reveal'

function ThreatEntitiesPage() {

  return (

    <div>

      <div className="admin-page-header">

        <div>

          <span>
            THREAT INTELLIGENCE
          </span>

          <h1>
            Threat Entities
          </h1>

          <p>
            Entitas yang teridentifikasi dari
            laporan masyarakat.
          </p>

        </div>

      </div>

      <Reveal>
      <div className="entity-summary-grid">

        <div className="entity-summary">

          <ShieldAlert />

          <div>

            <span>
              Total Entitas
            </span>

            <strong>
              247
            </strong>

          </div>

        </div>


        <div className="entity-summary">

          <TrendingUp />

          <div>

            <span>
              Entitas Baru
            </span>

            <strong>
              +18
            </strong>

          </div>

        </div>


        <div className="entity-summary">

          <Smartphone />

          <div>

            <span>
              Aplikasi
            </span>

            <strong>
              193
            </strong>

          </div>

        </div>


        <div className="entity-summary">

          <Phone />

          <div>

            <span>
              Nomor
            </span>

            <strong>
              54
            </strong>

          </div>

        </div>

      </div>
      </Reveal>

      <Reveal delay={150}>
      <div className="admin-panel entity-panel">

        <div className="entity-toolbar">

          <div className="admin-search">

            <Search size={17} />

            <input
              placeholder="Cari entitas..."
            />

          </div>

          <select className="admin-filter">

            <option>
              Semua Jenis
            </option>

            <option>
              Aplikasi
            </option>

            <option>
              Nomor
            </option>

          </select>

        </div>


        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>

                <th>
                  ENTITAS
                </th>

                <th>
                  JENIS
                </th>

                <th>
                  LAPORAN
                </th>

                <th>
                  RISIKO
                </th>

                <th>
                  STATUS
                </th>

              </tr>

            </thead>


            <tbody>

              {threatEntities.map((entity) => (

                <tr key={entity.name}>

                  <td>

                    <div className="entity-name">

                      <div className="entity-avatar">

                        {entity.type === 'Aplikasi'
                          ? <Smartphone size={16} />
                          : <Phone size={16} />
                        }

                      </div>

                      <strong>
                        {entity.name}
                      </strong>

                    </div>

                  </td>


                  <td>
                    {entity.type}
                  </td>


                  <td>
                    <strong>
                      {entity.reports}
                    </strong>
                  </td>


                  <td>

                    <span
                      className={
                        `admin-risk ${entity.risk}`
                      }
                    >
                      {entity.risk === 'high'
                        ? 'Tinggi'
                        : 'Sedang'}
                    </span>

                  </td>


                  <td>

                    <span
                      className={
                        entity.status === 'Terverifikasi'
                          ? 'admin-status verified'
                          : 'admin-status verification'
                      }
                    >
                      {entity.status}
                    </span>

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

export default ThreatEntitiesPage