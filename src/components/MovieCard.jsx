import "../styles/movieCard.css";
import ratingStar from "../assets/rating-star.svg";
import { useState } from "react";
import { movieDateHander } from "../utils/utils";

const MovieCard = ({ movie }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className="card-container">
      <div className="movie-image">
        <img src={movie.Poster} alt={movie.Title} className="poster-image" />
      </div>
      <div className="movie-content">
        {/* {onHover && (
          <div className="hover-container">
            <p>{movie.Title}</p>
          </div>
        )} */}
        <div className="movie-title">
          <p
            className="movie-title-header"
            // onMouseEnter={() => setOnHover(true)}
            // onMouseLeave={() => setOnHover(false)}
          >
            {movie.Title}
          </p>
        </div>
        <div className="movie-details">
          <div className="movie-ratings">
            <div>
              <img src={ratingStar} alt="Movie rating star" className="star" />
            </div>
            <p className="align-header">{movie.imdbRating}</p>
          </div>
          <div>
            <p className="align-header">
              released date {movieDateHander(movie.Released)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
