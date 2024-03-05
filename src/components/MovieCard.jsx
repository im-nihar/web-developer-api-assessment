import "./movieCard.css";
import ratingStar from "../assets/rating-star.svg";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [onHover, setOnHover] = useState(false);

  // Function to convert date
  // Date converted from 12 Jan 2002 to 12.01.02
  const movieDateHander = (date) => {
    let newDate = new Date(date);
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    let newDateFormat = newDate.toLocaleDateString("en-GB", options);
    return newDateFormat.split("/").join(".");
  };

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
