import {
    Box, ErrorMessage, Loader,
    Logo,
    Main, MovieDetails,
    MovieList,
    NavBar,
    NumResult,
    Search, useLocalStorageState, useMovies,
    WatchedMovieList,
    WatchedSummary
} from "@/components";
import React, {useEffect, useRef, useState} from "react";
import {WatchedMovieType} from "@/components/usePopcorn/type/Types";


export const KEY='f84fc31d' as const;

export function UsePopcorn() {

    const [query, setQuery] = useState<string>("")
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const {movies,isLoading,error}=useMovies(query);
    const{value: watched, setValue: setWatched }=useLocalStorageState([],"watched")
    const handleSelectMovie = (id:string) => {
        setSelectedId(selectedId => id=== selectedId? null : id);
    }

    function handleCloseMovie(){
        setSelectedId( null)
    }

    const handleAddWatched=(movie:WatchedMovieType)=>{
        setWatched((watched)=>[...watched,movie])

    }

    const handleDeleteWatched=(id:string)=>{
        setWatched(watched=> watched.filter(movie=>movie.imdbID !==id))
    }


    useEffect(() => {
        document.title = "usePopcorn 🎬";
    }, []);


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