import {
  Menu,
  X
} from 'lucide-react'

import {
  NavLink,
  Link
} from 'react-router-dom'

import { useState } from 'react'


function Navbar() {

  const [mobileOpen, setMobileOpen] =
    useState(false)


  const navItems = [
    {
      label: 'Beranda',
      path: '/'
    },

    {
      label: 'Cek Aplikasi',
      path: '/cek-aplikasi'
    },

    {
      label: 'Edukasi',
      path: '/edukasi'
    },

    {
      label: 'Laporkan',
      path: '/laporkan'
    },

    {
      label: 'Bantuan',
      path: '/bantuan-korban'
    },

    {
      label: 'Tentang Kami',
      path: '/tentang-kami'
    }
  ]


  const closeMobileMenu = () => {
    setMobileOpen(false)
  }


  return (

    <header className="navbar">

      <div className="navbar-inner">


        {/* =========================================
            BRAND
        ========================================= */}

        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMobileMenu}
        >

          <div className="navbar-logo">

            <img
              src="/jaga-favicon.png"
              alt="Logo JAGA"
            />

          </div>


          <div className="navbar-brand-text">

            <strong>
              JAGA
            </strong>

            <span>
              Jangan Asal Gadal Aplikasi
            </span>

          </div>

        </Link>


        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}

        <nav className="navbar-menu">

          {navItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'navbar-link active'
                  : 'navbar-link'
              }
            >
              {item.label}
            </NavLink>

          ))}

        </nav>


        {/* =========================================
            DESKTOP ACTIONS
        ========================================= */}

        <div className="navbar-actions">

          <Link
            to="/login"
            className="navbar-login"
          >
            Masuk
          </Link>


          <Link
            to="/laporkan"
            className="btn btn-primary"
          >
            Laporkan Sekarang
          </Link>

        </div>


        {/* =========================================
            MOBILE TOGGLE
        ========================================= */}

        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          aria-label={
            mobileOpen
              ? 'Tutup menu'
              : 'Buka menu'
          }
          aria-expanded={mobileOpen}
          aria-controls="jaga-mobile-menu"
        >

          {mobileOpen
            ? <X size={22} />
            : <Menu size={22} />
          }

        </button>

      </div>


      {/* =========================================
          MOBILE MENU
      ========================================= */}

      {mobileOpen && (

        <div
          id="jaga-mobile-menu"
          className="navbar-mobile"
        >

          {navItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? 'navbar-mobile-link active'
                  : 'navbar-mobile-link'
              }
            >
              {item.label}
            </NavLink>

          ))}


          <Link
            to="/login"
            className="navbar-mobile-link"
            onClick={closeMobileMenu}
          >
            Masuk
          </Link>


          <Link
            to="/laporkan"
            className="btn btn-primary"
            onClick={closeMobileMenu}
          >
            Laporkan Sekarang
          </Link>

        </div>

      )}

    </header>
  )
}


export default Navbar