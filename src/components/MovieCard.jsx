import "./movieCard.css";
import ratingStar from "../assets/rating-star.svg";

const MovieCard = () => {
  const tempData = {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  };

  return (
    <div className="card-container">
      <div className="movie-image">
        <img
          src={tempData.Poster}
          alt={tempData.Title}
          className="poster-image"
        />
      </div>
      <div className="movie-content">
        <div className="movie-title">
          <p className="movie-title-header align-header">{tempData.Title}</p>
        </div>
        <div className="movie-details">
          <div className="movie-ratings">
            <div>
              <img src={ratingStar} alt="Movie rating star" className="star" />
            </div>
            <p className="align-header">8.4</p>
          </div>
          <div>
            <p className="align-header">released date 1.03.24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
