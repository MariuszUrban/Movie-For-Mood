import React from "react";
import AliceCarousel from 'react-alice-carousel';
import '../../sass/components/_moviesList.scss'

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
  let responsive = {
  0: { items: 1 },
  1024: { items: 1 },
}
  return (
    <div className='moviesList'>
      {loading && <h1>Looking for movies</h1>}
     
     {diff.length && <AliceCarousel 
     fadeOutAnimation={true}
     responsive={responsive}
     mouseTrackingEnabled>
       {diff.map((el)=> {
         return (
           
           <p><img src={el.Poster} alt='' onDragStart={handleOnDragStart} className='moviesCarousel'/>{el.Title}</p>
         )
       })} 
     </AliceCarousel> }
    </div>
  );
}

