interface ProgressType {
    index:number;
    numQuestions:number;
    points:number;
    maxPossiblePoints:number;
    answer:number;
}
export default function Progress({index,numQuestions,points,maxPossiblePoints,answer}:ProgressType) {
    return (
        <header className="progress">
            <progress max={numQuestions} value={index+ Number(answer !==null)} />
            <p>Question <strong>{index+1}</strong> / {numQuestions}</p>
            <p><strong>{points}</strong> / {maxPossiblePoints}</p>

        </header>
    );
}