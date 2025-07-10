import React from "react";
import {WatchedMovie} from "@/components";

export function WatchedMovieList({watched}) {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie key={movie.imdbID} movie={movie}/>
            ))}
        </ul>
    );
}