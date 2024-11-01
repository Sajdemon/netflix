import "./Movie.css";
import data from "../data";
import MovieDelete from "./MovieDelete";
import { useState } from "react";
import AllDelete from "./AllDelete";
import AllRefresh from "./Refresh";

const Movie = () => {
  const [movieList, setMovieList] = useState(data);

  const deleteOneMovie = (idecko) => {
    const filteredMovie = movieList.filter((oneMovie) => {
      return oneMovie.id !== idecko;
    });
    setMovieList(filteredMovie);
  };

  const Delete = () => {
    setMovieList([]);
  };

  const Refresh = () => {
    setMovieList(data);
  };
  return (
    <section>
      <div className="all-movies">
        {movieList.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;

          return (
            <div className="one-movie" key={id}>
              <img src={image} alt="náhled filmu" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <MovieDelete deleteMovie={() => deleteOneMovie(id)} />
            </div>
          );
        })}
      </div>
      <div className="btm-box">
        <AllDelete delete={Delete} />
        <AllRefresh refresh={Refresh} />
      </div>
    </section>
  );
};

export default Movie;
