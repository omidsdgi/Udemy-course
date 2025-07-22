import {
    Box, ErrorMessage, Loader,
    Logo,
    Main, MovieDetails,
    MovieList,
    NavBar,
    NumResult,
    Search,
    WatchedMovieList,
    WatchedSummary
} from "@/components";
import React, {useEffect, useState} from "react";
import Error from "next/error";
import {MovieType, OMDbResponse, WatchedMovieType} from "@/components/usePopcorn/type/Types";


export const KEY='f84fc31d' as const;

// const tempMovieData:MovieType[] = [
//     {
//         imdbID: "tt1375666",
//         Title: "Inception",
//         Year: "2010",
//         Poster:
//             "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     },
//     {
//         imdbID: "tt0133093",
//         Title: "The Matrix",
//         Year: "1999",
//         Poster:
//             "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//     },
//     {
//         imdbID: "tt6751668",
//         Title: "Parasite",
//         Year: "2019",
//         Poster:
//             "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//     },
// ];

// const tempWatchedData:WatchedMovieType[] = [
//     {
//         imdbID: "tt1375666",
//         Title: "Inception",
//         Year: "2010",
//         Poster:
//             "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//         runtime: 148,
//         imdbRating: 8.8,
//         userRating: 10,
//     },
//     {
//         imdbID: "tt0088763",
//         Title: "Back to the Future",
//         Year: "1985",
//         Poster:
//             "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//         runtime: 116,
//         imdbRating: 8.5,
//         userRating: 9,
//     },
// ];


export function UsePopcorn() {
    const [query, setQuery] = useState<string>("")
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [watched, setWatched] = useState<WatchedMovieType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string |null>(null)
    const [selectedId, setSelectedId] = useState<string | null>(null);


const handleSelectMovie = (id:string) => {
    setSelectedId(selectedId => id=== selectedId? null : id);
}

const handleCloseMovie=()=>{
    setSelectedId( null)
}

const handleAddWatched=(movie:WatchedMovieType)=>{
    setWatched((watched)=>[...watched,movie])

    // localStorage.setItem("watchedMovie",JSON.stringify([...watched,movie]))
    }

    const handleDeleteWatched=(id:string)=>{
    setWatched(watched=> watched.filter(movie=>movie.imdbID !==id))
    }


    useEffect(() => {
        document.title = "usePopcorn 🎬";
    }, []);


    useEffect(() => {
        localStorage.setItem("watchedMovie", JSON.stringify(watched));
    }, [watched]);

    useEffect(() => {
        const storedValue = localStorage.getItem("watchedMovie");
        if (storedValue) {
            setWatched(JSON.parse(storedValue));
        }
    }, []);

    useEffect(function () {
const controller=new AbortController();
        (async function fetchMovies(){
            if (query.length<3){
                setMovies([]);
                setError("")
                return
            }
            try{
                setIsLoading(true)
                setError("")

                const  res=await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,{signal:controller.signal})

                if (!res.ok) throw new Error("Failed to fetch movies");

                const data:OMDbResponse =await res.json()

                if (data.Response === 'False'){
                    throw new Error("movie not found")
                }
                setMovies(data.Search?? [])
                setError("")
            } catch (err) {
                if (err instanceof Error) {
                if (err.name !=="AbortError"){
                    setError(err.message );
                }
                } else {
                    setError("Unknown error");
                }
            }finally {
                setIsLoading(false)
            }
handleCloseMovie()
        }) ()
        return function (){
            controller.abort()
        }
    },[query])

    return (
        <>
            <NavBar >
                <Logo/>
                <Search query={query} setQuery={setQuery}/>
                <NumResult movies={movies}/>
            </NavBar>
            <Main>
                <Box>
                    {isLoading && <Loader/>}
                    {!isLoading  && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>}
                    {error && <ErrorMessage message={error}/>}
                </Box>

                <Box >
                    {selectedId ?(
                        <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatched} watched={watched}/>
                    ) :(
                        <>
                            <WatchedSummary watched={watched} />
                            <WatchedMovieList watched={watched} onDeleteWatched={handleDeleteWatched}/>
                        </>
                    )}
                </Box>
            </Main>
        </>
    );
}