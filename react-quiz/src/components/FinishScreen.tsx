import {JSX} from "react";

type FinishScreenProps = {
    points: number;
    maxPossiblePoints: number;
    highScore: number;
};

export default function FinishScreen({
                                         points,
                                         maxPossiblePoints,
                                         highScore,
                                     }: FinishScreenProps): JSX.Element {
    const percentage = (points / maxPossiblePoints) * 100;

    let emoji:string;
    if (percentage === 100) emoji = "🥇";
    else if (percentage >= 80) emoji = "🎉";
    else if (percentage >= 50) emoji = "👍";
    else emoji = "🤔";

    return (
        <>
        <p className="result">
            {emoji} You scored <strong> {points} </strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%) <br/>

        </p>
    <p className='highscore'>
        ( High score     : {highScore} points   )
    </p>
        </>
);
}


