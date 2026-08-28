import { Outlet } from 'react-router-dom'

import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'


function MainLayout() {

  return (

    <div className="app">

      <Navbar />


      <main className="site-main">

        <Outlet />

      </main>


      <Footer />

    </div>
  )
}


export default MainLayout