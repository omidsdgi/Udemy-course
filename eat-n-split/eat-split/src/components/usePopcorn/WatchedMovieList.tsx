import React from "react";
import {WatchedMovie} from "@/components";
import {WatchedMovieType} from "@/components/usePopcorn/type/Types";

interface WatchedMovieListProps {
    watched: WatchedMovieType[];
}

export function WatchedMovieList({watched}: WatchedMovieListProps) {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie key={movie.imdbID} movie={movie}  />
            ))}
        </ul>
    );
}