import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ collapsed }) => {
  const location = useLocation()
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <i className='bx bx-home'></i>
            <span> Home</span>
          </Link>
        </li>
        <li>
          <Link to="/movies" className={location.pathname === '/movies' ? 'active' : ''}>
            <i className='bx bx-movie'></i>
            <span> Movies</span>
          </Link>
        </li>
        <li>
          <Link to="/view-plan" className={location.pathname === '/view-plan' ? 'active' : ''}>
            <i className='bx bx-calendar'></i>
            <span> View Plan</span>
          </Link>
        </li>
        <li>
          <Link to="/friends" className={location.pathname === '/friends' ? 'active' : ''}>
            <i className='bx bx-group'></i>
            <span> Friends</span>
          </Link>
        </li>
        <li>
          <Link to="/favorite-movies" className={location.pathname === '/favorite-movies' ? 'active' : ''}>
            <i className='bx bx-heart'></i>
            <span> Favorite Movies</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar 