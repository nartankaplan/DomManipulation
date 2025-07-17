import { useState } from 'react'
import MovieCard from '../components/MovieCard'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const allMovies = [
    { id: 'privateryan', title: 'Saving Private Ryan', image: '/images/privateryan.jpg', imdb: '8.6' },
    { id: 'thedarkknight', title: 'The Dark Knight', image: '/images/thedarkknight.jpg', imdb: '9.0' },
    { id: 'kuruotlarustune', title: 'Kuru Otlar Üstüne', image: '/images/kuruot.png', imdb: '7.8' },
    { id: 'walle', title: 'Wall-E', image: '/images/walle.jpg', imdb: '8.4' },
    { id: 'ineksaban', title: 'İnek Şaban', image: '/images/ineksaban.jpg', imdb: '7.5' },
    { id: 'godfather', title: 'The Godfather', image: '/images/godfather.jpg', imdb: '9.2' },
    { id: 'seven', title: 'Se7en', image: '/images/seven.jpg', imdb: '8.6' },
    { id: 'kader', title: 'Kader', image: '/images/kader.jpg', imdb: '8.1' }
  ]

  const handleSearch = (value) => {
    setSearchTerm(value)
    if (value.trim()) {
      const results = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  return (
    <div className="wrapper">
      <h1>Search Movies</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <i className='bx bx-search'></i>
      </div>
      
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results ({searchResults.length})</h2>
          <div className="movie-list">
            {searchResults.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
      
      {searchTerm && searchResults.length === 0 && (
        <div className="search-results">
          <p>No movies found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  )
}

export default Search 