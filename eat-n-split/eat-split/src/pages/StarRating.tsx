import StarRating from "@/components/usePopcorn/star/StarRating";

function Test(){
    <StarRating color="beige"  />;
}

export default function Home() {
    return (
        <div  style={{backgroundColor:"white",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"start"}} >
            <StarRating maxRating={5} messages={["Terrible", 'Bad','Ok','Good','Amazing']} defaultRating={2}/>
            <StarRating maxRating={5} color={"blue"} size={24} />
        </div>
    )
}