import {useState} from "react";
import React from 'react';

export function RangeCounter() {
    const [counter, setCounter] = useState(0)
    const [range, setRange] = useState(1)

    const date = new Date('july 4 2025');
    date.setDate(date.getDate() + counter);

    const restHandler=()=>{
        setCounter(0)
        setRange(1)
    }

    return (

    <div className= 'steps'>
<div>
    <input type="range" value={range}  min="0" max="10" step={1} onChange={e=>setRange(+e.target.value)} />
    <span>Step: {range}</span>
</div>
    <div className= 'message' style= {{flexDirection: 'row',justifyContent: 'center' }}>
        <button style={{backgroundColor:"#7950f2", color:"#fff",padding:"4px 12px", fontSize:"30px",margin:"10px" }} onClick={() => setCounter(c => c - range)}>-</button>
        <input type="text" value={counter} onChange={e=>setCounter(+e.target.value)} />
    <button style={{backgroundColor:"#7950f2", color:"#fff",padding:"2px 12px", fontSize:"30px",margin:"10px" }}  onClick={() => setCounter(c => c + range)}>+</button>
    </div>
    <p className={'message'}>
    <span>{counter === 0
        ?" today is "
        : counter >0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was ` }</span>
    <span>{date.toDateString() }</span>
    </p>
        {(counter !==0 || range !== 1) ?
            <div>
                <button onClick={restHandler}>Rest</button>
            </div> : null}
    </div>

    )

}