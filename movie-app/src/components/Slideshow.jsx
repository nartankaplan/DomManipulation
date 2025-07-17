import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Slideshow = ({ movies }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  const showSlides = (index) => {
    if (index >= movies.length) {
      setSlideIndex(0)
    } else if (index < 0) {
      setSlideIndex(movies.length - 1)
    } else {
      setSlideIndex(index)
    }
  }

  const moveSlide = (n) => {
    showSlides(slideIndex + n)
  }

  useEffect(() => {
    showSlides(slideIndex)
  }, [slideIndex, movies.length])

  return (
    <div className="slideshow-container">
      <button className="prev" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <div className="slides" style={{ transform: `translateX(${-slideIndex * 100}%)` }}>
        {movies.map((movie, index) => (
          <div key={index} className="slide">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.image} alt={movie.title} />
            </Link>
          </div>
        ))}
      </div>
      <button className="next" onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>
  )
}

export default Slideshow 