import React from "react";
import {WatchedMovie} from "@/components";
import {WatchedMovieType} from "@/components/usePopcorn/type/Types";

interface WatchedMovieListProps {
    watched: WatchedMovieType[];
    onDeleteWatched: (id: string) => void;
}

export function WatchedMovieList({watched,onDeleteWatched}: WatchedMovieListProps) {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie key={movie.imdbID} movie={movie} onDeleteWatched={onDeleteWatched}  />
            ))}
        </ul>
    );
}