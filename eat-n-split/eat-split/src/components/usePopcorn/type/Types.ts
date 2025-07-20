export interface MovieType {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
}

export interface WatchedMovieType extends MovieType {
    runtime: number;
    imdbRating: number;
    userRating: number;
}

export interface OMDbResponse {
    Response: 'True' | 'False';
    Search?: MovieType[];
    Error?: string;
    totalResults?: string;
}

interface WatchedMovieProps {
    movie: WatchedMovieType;
}
interface WatchedMovieListProps {
    watched: WatchedMovieType[];
}
interface WatchedSummaryProps {
    watched: WatchedMovieType[];
}
interface MovieDetailsProps {
    selectedId: string | null;
    onCloseMovie: () => void;
}