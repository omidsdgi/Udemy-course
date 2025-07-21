import React from "react";
import {MovieType} from "@/components/usePopcorn/type/Types";

interface Prop {
    movie: MovieType;
    onSelectMovie: (id: string) => void;
}

export function Movie({movie, onSelectMovie}:Prop) {
    return (
        <li onClick={()=>onSelectMovie(movie.imdbID)} >
            <img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
}