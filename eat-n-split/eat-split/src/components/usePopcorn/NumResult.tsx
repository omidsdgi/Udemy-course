import Link from "next/link";

export function NumResult({movies}) {
    return (
        <>

        <p className="num-results">
            Found <strong>{movies.length}</strong> results <Link href='/StarRating'>--Mehraneh</Link>
        </p>
        </>
    );
}