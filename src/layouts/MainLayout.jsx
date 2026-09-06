import { Outlet } from 'react-router-dom'

import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import ChatWidget from '../components/chat/ChatWidget'


function MainLayout() {

  return (

    <div className="app">

      <Navbar />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />

      <ChatWidget />

    </div>
  )
}


export default MainLayout