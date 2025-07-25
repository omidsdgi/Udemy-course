import Options from "@/components/Options";

export default function Question({question,answer,points, dispatch}) {
    console.log(question)
    return (
        <div>
            <h4>{question.question}</h4>
        <Options question={question} answer={answer} dispatch={dispatch} points={points}/>
        </div>
    );
}