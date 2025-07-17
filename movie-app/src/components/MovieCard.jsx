import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites()

  const handleHeartClick = (e) => {
    e.preventDefault() // Link'e gitmeyi engelle
    toggleFavorite(movie)
  }

  return (
    <div className="movie-item" data-title={movie.title}>
      <div className="movie-card-container">
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.image} alt={movie.title} />
        </Link>
        <button 
          className={`heart-button ${isFavorite(movie.id) ? 'favorited' : ''}`}
          onClick={handleHeartClick}
          title={isFavorite(movie.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          ❤️
        </button>
      </div>
      <div className="movie-info">
        IMDB: {movie.imdb}/10
      </div>
    </div>
  )
}

export default MovieCard 