import React from "react";
import {WatchedMovieType} from "@/components/usePopcorn/type/Types";
interface WatchedMovieProps {
    movie: WatchedMovieType;
}
export function WatchedMovie({movie}: WatchedMovieProps) {
    return (
        <li >
            <img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <h3>{movie.Title}</h3>
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
            </div>
        </li>
    );
}