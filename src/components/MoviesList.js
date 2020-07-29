import React from 'react'

export default function MoviesList({loading, moviesArray}) {
    console.log('MOVIES POSTER', moviesArray)

    const arr = moviesArray
    const arrFIlter = arr.filter( e => e.Poster === 'N/A');
    
    console.log('N A', arrFIlter)

    return (
        <div>

            {loading && <h1>Pobieramy filmy</h1>}
            {moviesArray.length && (
                <ul>
            {moviesArray.map(el=>{
                return <li>
                    <img src={el.Poster} alt=''/>
                    <p>{el.Title}</p>
                </li>
            })}
        </ul>
            )}
        </div>
    )
}
