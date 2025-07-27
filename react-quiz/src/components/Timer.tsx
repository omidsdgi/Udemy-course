import {useEffect} from "react";

export default function Timer({dispatch,secondsRemaining}) {
    const minutes=Math.floor(secondsRemaining/60)
    const seconds=secondsRemaining%60
   useEffect( ()=> {
     const Id= setInterval(()=>{
    dispatch({type:"tick"});
     },1000 )
    return()=>clearInterval(Id)
   },[dispatch])
    return (
        <div className="timer">
            {minutes <10 && "0"}
            {minutes}:
            {seconds<10 && "0"}
            {seconds}
        </div>
    );
}