interface MovieDetailsType {
    selectedId:string| null;
    onCloseMovie:(id:string |null)=>void
}
export function MovieDetails({selectedId,onCloseMovie}:MovieDetailsType) {
    return (
        <div className="details" >
            <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
            {selectedId}
        </div>
    );
}