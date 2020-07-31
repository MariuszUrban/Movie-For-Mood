import React from "react";

export default function MoviesList({ loading, moviesArray }) {
  const arr = moviesArray;

  function filterByPoster(movie) {
    if (movie.Poster === "N/A") {
      return true;
    }
  }

  let arrByPoster = arr.filter(filterByPoster);
  let diff = arr.filter((x) => arrByPoster.indexOf(x) === -1);

  return (
    <div>
      {loading && <h1>Pobieramy filmy</h1>}
      {diff.length && (
        <ul>
          {diff.map((el) => {
            return (
              <li>
                <img src={el.Poster} alt="" />
                <p>{el.Title}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
