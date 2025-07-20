import {MovieType} from "@/components/usePopcorn/type/Types";
import {useEffect, useState} from "react";
import {KEY, Loader} from "@/components";
import StarRating from "@/components/usePopcorn/star/StarRating";

interface MovieDetailsProps {
    selectedId: string | null;
    onCloseMovie: () => void;
    onAddWatched: (Movie:MovieType) => void;
}
export function  MovieDetails({selectedId,onCloseMovie}:MovieDetailsProps) {
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const {
        Title:title,
        Year:year,
        Poster:poster,
        Runtime:runtime,
        imdbRating,
        Plot:plot,
        Released:released,
        Actors:actors,
        Director:director,
        Genre:genre,
    }=movie
    console.log(title,actors)

    useEffect(() => {
        async function getMovieDetails(){
            setIsLoading(true);
            const res=await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`)
            const data=await res.json()
            setMovie(data)
            setIsLoading(false)
        }
getMovieDetails()
    },[selectedId])
    return (
        <div className="details" >
            {
                isLoading ? <Loader/> :
           <>
            <header>
            <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
                <img src={poster} alt={`poster of ${movie} movie`}/>
                 <div className="details-overview">
                     <h2>{title}</h2>
                     <p>
                         {released} &bull; {runtime}
                     </p>
                     <p>{genre}</p>
                     <p>
                         <span>⭐</span>
                         {imdbRating} IMDB rating
                     </p>
                 </div>
            </header>
            <section>
                <div className="rating">
                <StarRating size={24} maxRating={10}/>
                </div>
                <p>
                    <em>{plot}</em>
                </p>
                        <p>Starring {actors}</p>
                        <p>Directed by {director}</p>
            </section>
           </>
            }
        </div>
    );
}