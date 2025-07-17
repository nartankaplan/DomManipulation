import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import Slideshow from '../components/Slideshow'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // Sayfa yüklendiğinde scroll'u en üste getir
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Film verileri
  const movies = [
    { id: 'privateryan', title: 'Saving Private Ryan', image: '/images/privateryan.jpg', imdb: '8.6' },
    { id: 'thedarkknight', title: 'The Dark Knight', image: '/images/thedarkknight.jpg', imdb: '9.0' },
    { id: 'kuruotlarustune', title: 'Kuru Otlar Üstüne', image: '/images/kuruot.png', imdb: '7.8' },
    { id: 'walle', title: 'Wall-E', image: '/images/walle.jpg', imdb: '8.4' },
    { id: 'ineksaban', title: 'İnek Şaban', image: '/images/ineksaban.jpg', imdb: '7.5' }
  ]

  const slideshowMovies = [
    { id: 'godfather', title: 'The Godfather', image: '/images/godfather.jpg' },
    { id: 'seven', title: 'Se7en', image: '/images/seven.jpg' },
    { id: 'kader', title: 'Kader', image: '/images/kader.jpg' }
  ]

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )



  return (
    <div className="wrapper">
      <div className="top-banner">
        <div className="banner-text">
          <h1>Enjoy on your TV</h1>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className="banner-image">
          <img src="/images/tv.jpg" alt="TV" />
        </div>
      </div>
      
      <div className="top-banner">
        <div className="banner-image">
          <img src="/images/download.png" alt="Download" />
        </div>
        <div className="banner-text">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
      
      <div className="top-banner">
        <div className="banner-text">
          <h1>Watch everywhere</h1>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="banner-image">
          <img src="/images/desktop.png" alt="Desktop" />
        </div>
      </div>
      
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className='bx bx-search'></i>
      </div>
      
      <h1>Mostly Viewed Movies</h1>
      <div className="movie-list">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      <h1>Also you may like</h1>
      <Slideshow movies={slideshowMovies} />
      
      <div className="help-wrapper">
        <h2 className="help-title">Need More Help?</h2>
        <p>Terms of Use</p>
        <p>Privacy</p>
        <p>Cookie Preferences</p>
        <p>Corporate Information</p>
      </div>
      
      <p>Designed by Nartan Kaplan.</p>
    </div>
  )
}

export default Home 