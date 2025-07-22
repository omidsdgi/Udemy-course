import {useEffect, useRef, useState} from "react";
import {WatchedMovieType} from "@/components/usePopcorn/type/Types";

export function useLocalStorageState(initialState:WatchedMovieType[],key:string) {
    const [value, setValue] = useState<WatchedMovieType[]>([]);

    const hasLoaded = useRef(false);

    useEffect(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            setValue(JSON.parse(storedValue));
        }else{
            setValue(initialState);
        }
        hasLoaded.current = true;
    }, [key]);


    useEffect(() => {
        if (!hasLoaded.current) return;
        localStorage.setItem(key, JSON.stringify(value));
    }, [value,key]);
return{value,setValue};
}