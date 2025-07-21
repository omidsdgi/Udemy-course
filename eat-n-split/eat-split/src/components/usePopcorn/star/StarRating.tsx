import {Star} from "@/components/usePopcorn/star/star";
import {CSSProperties, useState} from "react";


const containerStyle:CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap:"16px"
}

const starContainerStyle:CSSProperties = {
    display: "flex",
}
interface StarRatingProps {
    maxRating?: number
    color?: string
    size?: number
    messages?: string[]
    defaultRating?: number
    onSetRating:(rating:number)=>void
}
export default function StarRating({maxRating=10,color='#fcc419',size=48,messages=[], defaultRating=0, onSetRating}:StarRatingProps) {
    const textStyle:CSSProperties = {
        lineHeight:"1",
        margin:"0",
        color,
        fontSize:`${size /1.5}px`
    }

    const [rating, setRating] = useState(defaultRating)
    const [tempRating, setTempRating] = useState(0)

    function handleRating(rating:number) {
        setRating(rating);
        onSetRating(rating);
    }


    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>
                {Array.from({length:maxRating},(_,i)=>(
                    <Star color={color} size={size}
                        key={i}
                        full={tempRating ? tempRating>=i+1 : rating >= i+1}
                        onRate={() => handleRating(i+1)}
                        onHoverIn={() => setTempRating(i + 1)}
                        onHoverOut={()=>setTempRating(0)}
                    />))}
            </div>
            <p style={textStyle}>{messages.length === maxRating ?
                messages[tempRating ?tempRating-1 : rating -1] :
                tempRating || rating ||""}</p>
        </div>

    );
}