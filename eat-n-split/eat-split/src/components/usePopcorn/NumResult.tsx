import Link from "next/link";
import {MovieType} from "@/components/usePopcorn/type/Types";

export function NumResult({movies}: {movies: MovieType[]}) {
    return (
        <>

        <p className="num-results">
            Found{movies && <strong>{movies.length}</strong>} results <Link href='/StarRating'>--Mehraneh</Link>
        </p>
        </>
    );
}