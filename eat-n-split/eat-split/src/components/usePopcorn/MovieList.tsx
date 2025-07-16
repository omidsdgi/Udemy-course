import React from "react";
import {Movie, MovieType} from "@/components";

interface MovieListProps {
    movies: MovieType[]
    onSelectMovie:(id:string) => void;
}

export function MovieList({movies,onSelectMovie}:MovieListProps) {

    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie}/>
            ))}
        </ul>
    );
}