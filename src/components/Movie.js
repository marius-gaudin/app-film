import React from 'react'

export default function Movie({movie}) {
  return (
    <div className="card col-md-2 m-3">
        <img className="card-img-top" src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+movie.poster_path} alt={movie.title}></img>
        <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">Date : {movie.release_date}</p>
        </div>
    </div>
  )
}
