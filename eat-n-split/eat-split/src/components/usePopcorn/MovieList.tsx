import React, {useState} from "react";
import {Movie} from "@/components";


export function MovieList({movies}) {

    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie key={movie.imdbID} movie={movie}/>
            ))}
        </ul>
    );
}