export default function Options({question,answer,points,dispatch}) {
    const hasAnswer = answer !==null
    return (
        <div className="options">
            {question.options?.map((option: string,index:number) => (
                <button className={`btn btn-option ${index === answer? 'answer':''}
                ${hasAnswer
                    ? index=== question.correctOption
                        ? "correct"
                        : "wrong"
                    : ""
                }`}
                        key={option}
                        disabled={hasAnswer}
                        onClick={()=>dispatch({type:"newAnswer",
                            payload: index})}>
                    {option}</button>
            ))}
        </div>
    );
}