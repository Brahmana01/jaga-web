import { useState, useEffect } from 'react'
import { Search, Smartphone, ShieldAlert } from 'lucide-react'

const categoryLabels = {
  pinjol_ilegal: 'Pinjol Ilegal',
  judi_online: 'Judi Online',
  investasi_bodong: 'Investasi Bodong',
  lainnya: 'Lainnya',
}

function getRiskLevel(reportCount) {
  if (reportCount >= 20) return { label: 'Tinggi', className: 'high' }
  if (reportCount >= 5) return { label: 'Sedang', className: 'medium' }
  return { label: 'Rendah', className: 'low' }
}

function ThreatEntitiesPage() {
  const [entities, setEntities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchThreats = async () => {
      setIsLoading(true)
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await fetch(`${apiUrl}/check/threats`)
        const json = await response.json()
        setEntities(json.data || [])
      } catch (err) {
        console.error('Gagal memuat threat entities:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchThreats()
  }, [])

  const filteredEntities = entities.filter((entity) =>
    !searchTerm || entity.Name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalEntities = entities.length

  return (
    <div>

      <div className="admin-page-header">
        <div>
          <span>THREAT INTELLIGENCE</span>
          <h1>Threat Entities</h1>
          <p>Entitas yang teridentifikasi dari laporan masyarakat.</p>
        </div>
      </div>

      <div className="admin-stat-grid">
        <div className="stat-card">
          <ShieldAlert size={22} />
          <div>
            <span>Total Entitas</span>
            <strong>{totalEntities}</strong>
          </div>
        </div>
      </div>

      <div className="admin-panel">

        <div className="report-filter-bar">
          <div className="admin-search">
            <Search size={17} />
            <input
              placeholder="Cari entitas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {isLoading ? (
          <p style={{ padding: 20 }}>Memuat data...</p>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ENTITAS</th>
                  <th>KATEGORI</th>
                  <th>LAPORAN</th>
                  <th>RISIKO</th>
                </tr>
              </thead>

              <tbody>
                {filteredEntities.map((entity) => {
                  const risk = getRiskLevel(entity.ReportCount)
                  return (
                    <tr key={entity.ID}>
                      <td>
                        <Smartphone size={16} style={{ marginRight: 8 }} />
                        {entity.Name}
                      </td>
                      <td>{categoryLabels[entity.Category] || entity.Category}</td>
                      <td>{entity.ReportCount}</td>
                      <td>
                        <span className={`admin-risk ${risk.className}`}>
                          {risk.label}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

      </div>

    </div>
  )
}

export default ThreatEntitiesPage