import React from "react";
import {WatchedMovieType} from "@/components/usePopcorn/type/Types";
interface WatchedMovieProps {
    movie: WatchedMovieType;
    onDeleteWatched: (id:string) => void;
}
export function WatchedMovie({movie,onDeleteWatched}: WatchedMovieProps) {

    return (
        <li >
            <img src={movie.poster} alt={`${movie.title} poster`}/>
            <h3>{movie.title}</h3>
            <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>
                <button className='btn-delete' onClick={()=>onDeleteWatched(movie.imdbID)}> ❌ </button>
            </div>
        </li>
    );
}