import { useEffect, useState } from "react";
import MovieFilter from "./MovieFilter";

import "./home.css";

const KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [moviesList, setMoviesList] = useState(MOIVELIST1); //MOIVELIST1
  const [isLoading, setIsLoading] = useState(false);

  const url = `http://www.omdbapi.com/?apikey=${KEY}&s=batman`;

  useEffect(() => {
    // getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      // setMoviesList(data.Search);
      const imdbIDs = data.Search.map((movie) => movie.imdbID);
      movieDetailsHandler(data.Search, imdbIDs);
    } catch {
      console.error(`Error fetching movie details`);
    }
  };

  const movieDetailsHandler = (movieData, imdbIDs) => {
    let movieList = [];
    getAllMovieDetails(imdbIDs)
      .then((movieDetails) => {
        let items = movieDetails.forEach((ele) => {
          let eleId = ele.imdbID;
          let obj = movieData.find((object, index) => {
            if (object.imdbID == eleId) {
              ele["extraMovieDetails"] = object;
              movieList.push(ele);
            }
          });
        });
        setMoviesList(movieList);
        setIsLoading(false);
      })
      .catch((error) => {
        setMoviesList([]); // empty list display on error
        console.error(`Error fetching movie details: ${error.message}`);
        setIsLoading(false);
      });
  };

  const getMovieDetails = async (imdbID) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${imdbID}`
      );
      return response.json();
    } catch (error) {
      console.error(
        `Error fetching data for IMDb ID ${imdbID}: ${error.message}`
      );
    }
  };

  // Function to make API calls for all IMDb IDs
  const getAllMovieDetails = async (imdbIDs) => {
    const movieDetailsPromises = imdbIDs.map((imdbID) =>
      getMovieDetails(imdbID)
    );
    const movieDetails = await Promise.all(movieDetailsPromises);
    return movieDetails;
  };

  return (
    <div className="container">
      <div className="header-container">
        <h1>Latest Movies Reviews</h1>
      </div>
      <div>
        {isLoading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="movie-filters-container">
            <MovieFilter
              moviesList={moviesList} //moviesList
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

const MOIVELIST1 = [
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Crime, Drama",
    Director: "Christopher Nolan",
    Writer: "Bob Kane, David S. Goyer, Christopher Nolan",
    Actors: "Christian Bale, Michael Caine, Ken Watanabe",
    Plot: "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
    Language: "English, Mandarin",
    Country: "United States, United Kingdom",
    Awards: "Nominated for 1 Oscar. 14 wins & 79 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.2/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "85%",
      },
      {
        Source: "Metacritic",
        Value: "70/100",
      },
    ],
    Metascore: "70",
    imdbRating: "8.2",
    imdbVotes: "1,559,730",
    imdbID: "tt0372784",
    Type: "movie",
    DVD: "09 Sep 2009",
    BoxOffice: "$206,863,479",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    extraMovieDetails: {
      Title: "Batman Begins",
      Year: "2005",
      imdbID: "tt0372784",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
  },
  {
    Title: "The Batman",
    Year: "2022",
    Rated: "PG-13",
    Released: "04 Mar 2022",
    Runtime: "176 min",
    Genre: "Action, Crime, Drama",
    Director: "Matt Reeves",
    Writer: "Matt Reeves, Peter Craig, Bob Kane",
    Actors: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
    Plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    Language: "English, Spanish, Latin, Italian",
    Country: "United States",
    Awards: "Nominated for 3 Oscars. 38 wins & 181 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "85%",
      },
      {
        Source: "Metacritic",
        Value: "72/100",
      },
    ],
    Metascore: "72",
    imdbRating: "7.8",
    imdbVotes: "772,360",
    imdbID: "tt1877830",
    Type: "movie",
    DVD: "19 Apr 2022",
    BoxOffice: "$369,345,583",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    extraMovieDetails: {
      Title: "The Batman",
      Year: "2022",
      imdbID: "tt1877830",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg",
    },
  },
  {
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    Rated: "PG-13",
    Released: "25 Mar 2016",
    Runtime: "151 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Zack Snyder",
    Writer: "Bob Kane, Bill Finger, Jerry Siegel",
    Actors: "Ben Affleck, Henry Cavill, Amy Adams",
    Plot: "Batman is manipulated by Lex Luthor to fear Superman. Superman´s existence is meanwhile dividing the world and he is framed for murder during an international crisis. The heroes clash and force the neutral Wonder Woman to reemerge.",
    Language: "English",
    Country: "United States",
    Awards: "14 wins & 33 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.5/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "29%",
      },
      {
        Source: "Metacritic",
        Value: "44/100",
      },
    ],
    Metascore: "44",
    imdbRating: "6.5",
    imdbVotes: "748,011",
    imdbID: "tt2975590",
    Type: "movie",
    DVD: "25 Nov 2016",
    BoxOffice: "$330,360,194",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    extraMovieDetails: {
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      imdbID: "tt2975590",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
  },
  {
    Title: "Batman",
    Year: "1989",
    Rated: "PG-13",
    Released: "23 Jun 1989",
    Runtime: "126 min",
    Genre: "Action, Adventure",
    Director: "Tim Burton",
    Writer: "Bob Kane, Sam Hamm, Warren Skaaren",
    Actors: "Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language: "English, French, Spanish",
    Country: "United States, United Kingdom",
    Awards: "Won 1 Oscar. 10 wins & 28 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.5/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "76%",
      },
      {
        Source: "Metacritic",
        Value: "69/100",
      },
    ],
    Metascore: "69",
    imdbRating: "7.5",
    imdbVotes: "400,812",
    imdbID: "tt0096895",
    Type: "movie",
    DVD: "24 Jul 2014",
    BoxOffice: "$251,409,241",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    extraMovieDetails: {
      Title: "Batman",
      Year: "1989",
      imdbID: "tt0096895",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    },
  },
  {
    Title: "Batman Returns",
    Year: "1992",
    Rated: "PG-13",
    Released: "19 Jun 1992",
    Runtime: "126 min",
    Genre: "Action, Crime, Fantasy",
    Director: "Tim Burton",
    Writer: "Bob Kane, Daniel Waters, Sam Hamm",
    Actors: "Michael Keaton, Danny DeVito, Michelle Pfeiffer",
    Plot: "While Batman deals with a deformed man calling himself the Penguin wreaking havoc across Gotham with the help of a cruel businessman, a female employee of the latter becomes the Catwoman with her own vendetta.",
    Language: "English",
    Country: "United States, United Kingdom",
    Awards: "Nominated for 2 Oscars. 2 wins & 29 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.1/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "82%",
      },
      {
        Source: "Metacritic",
        Value: "68/100",
      },
    ],
    Metascore: "68",
    imdbRating: "7.1",
    imdbVotes: "324,645",
    imdbID: "tt0103776",
    Type: "movie",
    DVD: "31 Jan 2013",
    BoxOffice: "$162,924,631",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    extraMovieDetails: {
      Title: "Batman Returns",
      Year: "1992",
      imdbID: "tt0103776",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
    },
  },
  {
    Title: "Batman & Robin",
    Year: "1997",
    Rated: "PG-13",
    Released: "20 Jun 1997",
    Runtime: "125 min",
    Genre: "Action, Sci-Fi",
    Director: "Joel Schumacher",
    Writer: "Bob Kane, Akiva Goldsman",
    Actors: "Arnold Schwarzenegger, George Clooney, Chris O'Donnell",
    Plot: "Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.",
    Language: "English",
    Country: "United States, United Kingdom",
    Awards: "10 wins & 22 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "3.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "12%",
      },
      {
        Source: "Metacritic",
        Value: "28/100",
      },
    ],
    Metascore: "28",
    imdbRating: "3.8",
    imdbVotes: "266,342",
    imdbID: "tt0118688",
    Type: "movie",
    DVD: "31 Jan 2013",
    BoxOffice: "$107,353,792",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    extraMovieDetails: {
      Title: "Batman & Robin",
      Year: "1997",
      imdbID: "tt0118688",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
    },
  },
  {
    Title: "Batman Forever",
    Year: "1995",
    Rated: "PG-13",
    Released: "16 Jun 1995",
    Runtime: "121 min",
    Genre: "Action, Adventure",
    Director: "Joel Schumacher",
    Writer: "Bob Kane, Lee Batchler, Janet Scott Batchler",
    Actors: "Val Kilmer, Tommy Lee Jones, Jim Carrey",
    Plot: "Batman must battle former district attorney Harvey Dent, who is now Two-Face and Edward Nygma, The Riddler with help from an amorous psychologist and a young circus acrobat who becomes his sidekick, Robin.",
    Language: "English",
    Country: "United States, United Kingdom",
    Awards: "Nominated for 3 Oscars. 10 wins & 26 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "5.4/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "41%",
      },
      {
        Source: "Metacritic",
        Value: "51/100",
      },
    ],
    Metascore: "51",
    imdbRating: "5.4",
    imdbVotes: "265,031",
    imdbID: "tt0112462",
    Type: "movie",
    DVD: "31 Jan 2013",
    BoxOffice: "$184,069,126",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    extraMovieDetails: {
      Title: "Batman Forever",
      Year: "1995",
      imdbID: "tt0112462",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
  },
  {
    Title: "The Lego Batman Movie",
    Year: "2017",
    Rated: "PG",
    Released: "10 Feb 2017",
    Runtime: "104 min",
    Genre: "Animation, Action, Adventure",
    Director: "Chris McKay",
    Writer: "Seth Grahame-Smith, Chris McKenna, Erik Sommers",
    Actors: "Will Arnett, Michael Cera, Rosario Dawson",
    Plot: "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
    Language: "English",
    Country: "United States, Denmark, Australia",
    Awards: "13 wins & 68 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.3/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "90%",
      },
      {
        Source: "Metacritic",
        Value: "75/100",
      },
    ],
    Metascore: "75",
    imdbRating: "7.3",
    imdbVotes: "170,183",
    imdbID: "tt4116284",
    Type: "movie",
    DVD: "19 May 2017",
    BoxOffice: "$175,936,671",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    extraMovieDetails: {
      Title: "The Lego Batman Movie",
      Year: "2017",
      imdbID: "tt4116284",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    },
  },
  {
    Title: "Batman: The Animated Series",
    Year: "1992–1995",
    Rated: "TV-PG",
    Released: "05 Sep 1992",
    Runtime: "23 min",
    Genre: "Animation, Action, Adventure",
    Director: "N/A",
    Writer: "Bob Kane, Eric Radomski, Bruce Timm",
    Actors: "Kevin Conroy, Loren Lester, Efrem Zimbalist Jr.",
    Plot: "The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.",
    Language: "English",
    Country: "United States",
    Awards: "Won 1 Primetime Emmy. 5 wins & 19 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "9.0/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "9.0",
    imdbVotes: "114,886",
    imdbID: "tt0103359",
    Type: "series",
    totalSeasons: "4",
    Response: "True",
    extraMovieDetails: {
      Title: "Batman: The Animated Series",
      Year: "1992–1995",
      imdbID: "tt0103359",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
    },
  },
  {
    Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
    Year: "2016",
    Rated: "R",
    Released: "23 Mar 2016",
    Runtime: "182 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Zack Snyder",
    Writer: "David S. Goyer, Chris Terrio",
    Actors: "Amy Adams, Ben Affleck, Henry Cavill",
    Plot: "Batman is manipulated by Lex Luthor to fear Superman. Superman´s existence is meanwhile dividing the world and he is framed for murder during an international crisis. The heroes clash and force the neutral Wonder Woman to reemerge.",
    Language: "English",
    Country: "United States",
    Awards: "2 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.2/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "7.2",
    imdbVotes: "74,123",
    imdbID: "tt18689424",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    extraMovieDetails: {
      Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
      Year: "2016",
      imdbID: "tt18689424",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
    },
  },
];
