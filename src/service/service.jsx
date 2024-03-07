const KEY = import.meta.env.VITE_API_KEY;

// API to get movies data list
const MOVIE_URL = `http://www.omdbapi.com/?apikey=${KEY}&s=batman`;

//API to get single movie data with movie ID
const SINGLE_MOVIE_URL = `http://www.omdbapi.com/?apikey=${KEY}&i=`;

export const fetchData = async () => {
  try {
    const response = await fetch(MOVIE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

// Fetch details of each movie from the given
// Movie ID is used as a parameter
export const getMovieDetails = async (imdbID) => {
  try {
    const response = await fetch(`${SINGLE_MOVIE_URL}${imdbID}`);
    return response.json();
  } catch (error) {
    console.error(
      `Error fetching data for IMDb ID ${imdbID}: ${error.message}`
    );
  }
};

// Function to make API calls for all movie ID's
// Returns an array with promises for all movies once successful
export const getAllMovieDetails = async (imdbIDs) => {
  const movieDetailsPromises = imdbIDs.map((imdbID) => getMovieDetails(imdbID));
  const movieDetails = await Promise.all(movieDetailsPromises);
  return movieDetails;
};
