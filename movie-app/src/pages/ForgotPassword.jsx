import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Auth.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password reset link sent to your email!')
  }

  return (
    <div className="forgot-password-page">
      <div className="logo">
        <img src="/images/logov2.png" alt="Logo" />
      </div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className='bx bx-envelope'></i>
          </div>
          <button type="submit" className="btn">Send Reset Link</button>
          <div className="register-link">
            <p>Remember your password? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword 