import React from "react";
import AliceCarousel from 'react-alice-carousel';
import '../sass/components/_moviesList.scss'

export default function MoviesList({ loading, moviesArray }) {
  const arr = moviesArray;

  function filterByPoster(movie) {
    if (movie.Poster === "N/A") {
      return true;
    }
  }

  let arrByPoster = arr.filter(filterByPoster);
  let diff = arr.filter((x) => arrByPoster.indexOf(x) === -1);
  const handleOnDragStart = (e) => e.preventDefault();

  return (
    <div className='moviesList'>
      {loading && <h1>Looking for movies</h1>}
     
     {diff.length && <AliceCarousel mouseTrackingEnabled>
       {diff.map((el)=> {
         return (
           <img src={el.Poster} alt='' onDragStart={handleOnDragStart} className='moviesCarousel'/>
         )
       })} 
     </AliceCarousel> }



      {/* {diff.length && (
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
      )} */}
    </div>
  );
}
