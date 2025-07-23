import {useEffect, useState} from "react";
import Error from "next/error";
import {MovieType, OMDbResponse} from "@/components/usePopcorn/type/Types";
import {KEY} from "@/components";

export function useMovies(query:string) {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string |null>(null)


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

            }) ()
            return function (){
                controller.abort()
            }
        },[query])


    return {movies,isLoading,error }
}