import {
    Box, ErrorMessage, Loader,
    Logo,
    Main, MovieDetails,
    MovieList,
    NavBar,
    NumResult,
    Search, useMovies,
    WatchedMovieList,
    WatchedSummary
} from "@/components";
import React, {useEffect, useRef, useState} from "react";
import {WatchedMovieType} from "@/components/usePopcorn/type/Types";


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
    const [watched, setWatched] = useState<WatchedMovieType[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const {movies,isLoading,error}=useMovies(query);
    const handleSelectMovie = (id:string) => {
        setSelectedId(selectedId => id=== selectedId? null : id);
    }

    function handleCloseMovie(){
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


    const hasLoaded = useRef(false);

// مرحله 1: فقط یک بار بخون از localStorage
    useEffect(() => {
        const storedValue = localStorage.getItem("watchedMovie");
        if (storedValue) {
            setWatched(JSON.parse(storedValue));
        }
        hasLoaded.current = true;
    }, []);

// مرحله 2: فقط وقتی مقدار از localStorage خونده شد، ذخیره کن
    useEffect(() => {
        if (!hasLoaded.current) return;
        localStorage.setItem("watchedMovie", JSON.stringify(watched));
    }, [watched]);

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