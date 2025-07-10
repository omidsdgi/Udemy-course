import Button from "@/components/eatSplit/Button";
import {useState} from "react";


export function FormAddFriend ({onAddFriend,friends}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")

    const handleSubmit = (e) => {
        e.preventDefault()
onAddFriend(newFriend)
        if(!name || !image)return null

        const id=crypto.randomUUID()
        const newFriend = {
            name,
            image:`${image}?=${id}`,
            balance:0,
            id,
        }
    }
    return(
        <form className='form-add-friend' onSubmit={handleSubmit}>
            <label >🚻Friend name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

            <label>🔅 Image URL</label>
            <input width={48} height={48} type="text" value={image}  onChange={(e)=>setImage(e.target.value)}/>
            <Button>Add</Button>
        </form>
    )
}