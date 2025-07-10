import Image from "next/image";
import Button from "@/components/eatSplit/Button";
import {FriendType} from "@/pages";

export interface FriendProps {
    friend: FriendType;
    onSelection:(friend:FriendType)=>void;
    selectedFriend:FriendType | null;
}
export function Friend({friend,onSelection,selectedFriend}: FriendProps) {
    const isSelected = selectedFriend?.id === friend.id

    return (
        <li className={isSelected ? "selected" : ""}>
            <Image src={friend.image} alt={friend.name} width={46} height={46} />
            <h3>{friend.name}</h3>

            {friend.balance<0 && (
                <p className='red'> You owe {friend.name} {Math.abs(friend.balance)}$. </p>
            )}
            {friend.balance>0 && (
                <p className='green'>{friend.name} owe you {Math.abs(friend.balance)}$. </p>
            )}
            {friend.balance === 0 && (
                <p>You and {friend.name} are even. </p>
            )}

            <Button onClick={()=>onSelection(friend)}>{isSelected ? "Close" :"Select"}</Button>

        </li>
    )
}