import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Login from './pages/Login'
import Register from './pages/Register'
import MovieDetail from './pages/MovieDetail'
import Search from './pages/Search'
import FavoriteMovies from './pages/FavoriteMovies'
import Friends from './pages/Friends'
import ViewPlan from './pages/ViewPlan'
import ForgotPassword from './pages/ForgotPassword'
import './styles/App.css'

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorite-movies" element={<FavoriteMovies />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/view-plan" element={<ViewPlan />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  )
}

export default App
