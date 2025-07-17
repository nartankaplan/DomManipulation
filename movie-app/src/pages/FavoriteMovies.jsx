import MovieCard from '../components/MovieCard'
import { useFavorites } from '../context/FavoritesContext'

const FavoriteMovies = () => {
  const { favorites } = useFavorites()

  return (
    <div className="wrapper">
      <h1>Favorite Movies</h1>
      <div className="favorite-movies-list">
        {favorites.length > 0 ? (
          <>
            <p style={{ marginBottom: '20px', opacity: 0.8 }}>
              You have {favorites.length} favorite movie{favorites.length === 1 ? '' : 's'}
            </p>
            <div className="movie-list">
              {favorites.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              You haven't added any favorite movies yet.
            </p>
            <p style={{ opacity: 0.7 }}>
              Click the ❤️ button on any movie to add it to your favorites!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoriteMovies 