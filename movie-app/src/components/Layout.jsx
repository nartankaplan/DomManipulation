import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="layout">
      <Header />
      <div className="container">
        <Sidebar collapsed={sidebarCollapsed} />
        <button 
          className={`toggle-button ${sidebarCollapsed ? 'collapsed' : ''}`}
          onClick={toggleSidebar}
        >
          {sidebarCollapsed ? '→' : '←'}
        </button>
        <main className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout 