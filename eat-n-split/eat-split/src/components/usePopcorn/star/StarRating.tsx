import {Star} from "@/components/usePopcorn/star/star";
import {useState} from "react";


const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap:"16px"
}

const starContainerStyle = {
    display: "flex",
}
interface StarRatingProps {
    maxRating?: number
    color?: string
    size?: number
    messages?: string[]
    defaultRating?: number
}
export default function StarRating({maxRating=10,color='#fcc419',size=48,messages=[], defaultRating=0}:StarRatingProps) {
    const textStyle = {
        lineHeight:"1",
        margin:"0",
        color,
        fontSize:`${size /1.5}px`

    }
    const [rating, setRating] = useState(defaultRating)
    const [tempRating, setTempRating] = useState(0)

    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>
                {Array.from({length:maxRating},(_,i)=>(
                    <Star color={color} size={size}
                        key={i}
                        full={tempRating ? tempRating>=i+1 : rating >= i+1}
                        onRate={() => setRating(i+1)}
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