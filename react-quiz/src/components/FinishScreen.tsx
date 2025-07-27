import {Dispatch, JSX} from "react";
import {Action, State} from "@/pages";

type FinishScreenProps = {
    points: number;
    maxPossiblePoints: number;
    highScore: number;
    dispatch: Dispatch<Action>;
};

export default function FinishScreen({
                                         points,
                                         maxPossiblePoints,
                                         highScore,
                                         dispatch
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
                {emoji} You scored <strong> {points} </strong> out
                of {maxPossiblePoints} ({Math.ceil(percentage)}%) <br/>

            </p>
            <p className='highscore'>
                ( High score : {highScore} points )
            </p>
            <button className="btn btn-ui" onClick={() =>
                dispatch({type: 'restart'})}>
               Restart
            </button>
        </>
    );
}


