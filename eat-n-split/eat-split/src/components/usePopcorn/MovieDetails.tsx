import {useEffect, useState} from "react";
import {KEY, Loader} from "@/components";
import StarRating from "@/components/usePopcorn/star/StarRating";
import {WatchedMovieType} from "@/components/usePopcorn/type/Types";

interface MovieDetailsProps {
    selectedId: string | null;
    onCloseMovie: () => void;
    watched:WatchedMovieType[];
    onAddWatched: (movie: WatchedMovieType) => void;
}
interface MovieDetailData {
    Title?: string;
    Year?: string;
    Poster?: string;
    Runtime?: string;
    imdbRating?: string;
    Plot?: string;
    Released?: string;
    Actors?: string;
    Director?: string;
    Genre?: string;
}
export function  MovieDetails({selectedId,onCloseMovie,onAddWatched,watched}:MovieDetailsProps) {
    const [movie, setMovie] = useState<MovieDetailData>({})
    const [isLoading, setIsLoading] = useState(false)
    const [userRating, setUserRating] = useState(0)

    const isWatched =selectedId !==null && watched.map((movie) => movie.imdbID).includes(selectedId);
    const watchedUserRating = watched.find(
        (movie) => movie.imdbID === selectedId
    )?.userRating;

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
const handleAdd=()=>{
        const newWatchedMovie:{
            year: string;
            imdbID: string;
            runtime: number;
            imdbRating: number;
            title: string;پا
            poster: string
            userRating: number;
        } = {
            imdbID:selectedId||'',
            title:title || '',
            year:year ||'',
            poster:poster|| '',
            imdbRating:Number(Number(imdbRating).toFixed(2)),
            runtime: runtime ? Number(runtime.split(" ")[0]) : 0,
            userRating
        }
        onAddWatched(newWatchedMovie)
    onCloseMovie()
    }
    useEffect(() => {
        async function getMovieDetails(){
            setIsLoading(true);
            const res=await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`)
            const data=await res.json()
            setMovie(data)
            setIsLoading(false)
        }
        if (selectedId) {
            getMovieDetails()
        }
    },[selectedId])
    console.log("selectedId:", selectedId);
    console.log("isWatched:", isWatched);
    console.log("userRating:", userRating);
    return (
        <div className="details">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <header>
                        <button className="btn-back" onClick={onCloseMovie}>
                            &larr;
                        </button>
                        <img src={poster} alt={`Poster of ${movie} movie`} />
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>
                                {released} &bull; {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐️</span>
                                {imdbRating} IMDb rating
                            </p>
                        </div>
                    </header>

                   <section>
                        <div className="rating">
                            {!isWatched ? (
                                <>
                                    <StarRating
                                        maxRating={10}
                                        size={24}
                                        onSetRating={setUserRating}
                                    />
                                    {userRating > 0 && (
                                        <button className="btn-add" onClick={handleAdd}>
                                            + Add to list
                                        </button>
                                    )}
                                </>
                            ) : (
                                <p>
                                    You rated with movie {watchedUserRating} <span>⭐️</span>
                                </p>
                            )}
                        </div>
                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Starring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </>
            )}
        </div>
    );
}