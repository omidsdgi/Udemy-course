import Button from "@/components/eatSplit/Button";
import {FormEvent, useState} from "react";
import {FriendType} from "@/pages";


 interface Props {
     onAddFriend:(friend: FriendType)=> void;
 }

export function FormAddFriend ({onAddFriend}: Props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!name || !image)return null

        const uuid=Number(crypto.randomUUID())
        const id= Date.now()

        const newFriend:FriendType = {
            id,
            name,
            image:`${image}?=${uuid}`,
            balance:0,
        }
        onAddFriend(newFriend)
        setName("")
        setImage("https://i.pravatar.cc/48")
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