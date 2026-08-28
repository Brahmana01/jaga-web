import { Outlet } from 'react-router-dom'

function AdminLayout() {

  return (

    <div className="admin-layout">

      <aside className="admin-sidebar">

        <div className="admin-brand">

          <div className="admin-brand-icon">
            🛡
          </div>

          <div>
            <strong>
              JAGA
            </strong>

            <span>
              Admin Panel
            </span>
          </div>

        </div>


        <nav className="admin-nav">

          <a href="/admin">
            Dashboard
          </a>

          <a href="/admin/laporan">
            Laporan
          </a>

          <a href="/admin/threat-entities">
            Threat Entities
          </a>

        </nav>


        <div className="admin-sidebar-footer">

          <span>
            JAGA
          </span>

          <small>
            Security Platform
          </small>

        </div>

      </aside>


      <section className="admin-content">

        <header className="admin-topbar">

          <div>
            <strong>
              JAGA Security Center
            </strong>
          </div>

          <div className="admin-user">
            Admin
          </div>

        </header>


        <main className="admin-main">

          <Outlet />

        </main>

      </section>

    </div>

  )
}

export default AdminLayout