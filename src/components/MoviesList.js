import React from 'react'

export default function MoviesList({loading, moviesArray}) {
    console.log(moviesArray)
    return (
        <div>

            {loading && <h1>Pobieramy filmy</h1>}
            {moviesArray.length && (
                <ul>
            {moviesArray.map(el=>{
                return <li>
                    <img src={el.Poster} />
                    <p>{el.Title}</p>
                </li>
            })}
        </ul>
            )}
        </div>
    )
}
