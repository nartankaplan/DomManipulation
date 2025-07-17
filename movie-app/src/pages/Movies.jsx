import { useState } from 'react'
import MovieCard from '../components/MovieCard'

const Movies = () => {
  // Tüm film verileri - Home sayfasından ve slideshowMovies'ten birleştirildi
  const [allMovies] = useState([
    { id: 'privateryan', title: 'Saving Private Ryan', image: '/images/privateryan.jpg', imdb: '8.6' },
    { id: 'thedarkknight', title: 'The Dark Knight', image: '/images/thedarkknight.jpg', imdb: '9.0' },
    { id: 'kuruotlarustune', title: 'Kuru Otlar Üstüne', image: '/images/kuruot.png', imdb: '7.8' },
    { id: 'walle', title: 'Wall-E', image: '/images/walle.jpg', imdb: '8.4' },
    { id: 'ineksaban', title: 'İnek Şaban', image: '/images/ineksaban.jpg', imdb: '7.5' },
    { id: 'godfather', title: 'The Godfather', image: '/images/godfather.jpg', imdb: '9.2' },
    { id: 'seven', title: 'Se7en', image: '/images/seven.jpg', imdb: '8.6' },
    { id: 'kader', title: 'Kader', image: '/images/kader.jpg', imdb: '7.2' }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('default') // 'default', 'high-to-low', 'low-to-high'

  // Film filtreleme ve sıralama
  const getFilteredAndSortedMovies = () => {
    let filtered = allMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (sortOrder === 'high-to-low') {
      filtered = filtered.sort((a, b) => parseFloat(b.imdb) - parseFloat(a.imdb))
    } else if (sortOrder === 'low-to-high') {
      filtered = filtered.sort((a, b) => parseFloat(a.imdb) - parseFloat(b.imdb))
    }

    return filtered
  }

  const filteredMovies = getFilteredAndSortedMovies()

  return (
    <div className="wrapper">
      <h1>All Movies</h1>
      
      {/* Arama ve sıralama kontrolleri */}
      <div className="controls-container" style={{ 
        display: 'flex', 
        gap: '20px', 
        marginBottom: '30px',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {/* Arama kutusu */}
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 20px',
            borderRadius: '25px',
            border: '2px solid #8A2BE2',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            fontSize: '16px',
            width: '300px',
            outline: 'none'
          }}
        />

        {/* IMDB sıralama */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{
            padding: '12px 20px',
            borderRadius: '25px',
            border: '2px solid #8A2BE2',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            fontSize: '16px',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="default">Sort by IMDB</option>
          <option value="high-to-low">IMDB: High to Low</option>
          <option value="low-to-high">IMDB: Low to High</option>
        </select>
      </div>

      <div className="movies-list">
        {filteredMovies.length > 0 ? (
          <div className="movie-list">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No movies found matching your search.</p>
        )}
      </div>
    </div>
  )
}

export default Movies 