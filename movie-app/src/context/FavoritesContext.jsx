import { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  // localStorage'dan favorileri yükle
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteMovies')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Favorileri localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites(prev => {
      const isAlreadyFavorite = prev.some(fav => fav.id === movie.id)
      if (isAlreadyFavorite) {
        return prev
      }
      return [...prev, movie]
    })
  }

  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
  }

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId)
  }

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id)
    } else {
      addToFavorites(movie)
    }
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
} 