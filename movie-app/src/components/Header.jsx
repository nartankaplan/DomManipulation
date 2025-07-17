import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/images/logov2.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/login" className="login-button">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 