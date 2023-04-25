import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="background-color">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="slider-container">
        <h1 className="action-heading">Action Movies</h1>
        <MoviesSlider movieList={actionMovies} />
      </div>
      <div className="slider-container">
        <h1 className="action-heading">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
