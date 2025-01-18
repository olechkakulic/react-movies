import React from "react";
import { Movie } from "./Movie";
function Movies(props) {
//   ставим массив по умолчанию
  const {movies = []} =props;
  return (
    <div className="movies">
      {movies.length ? props.movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          //   это чтобы дофига ключей не передавать вот так
          //   title={movie.Title}
          //   year={movie.Year}
          //   imdbID={movie.imdbID}
          //   type={movie.Type}
          //   poster={movie.Poster}
          {...movie}
        />
      )) : <h4>Ничего не найдено</h4>}
    </div>
  );
}

export { Movies };
