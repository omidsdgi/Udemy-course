import {FriendType} from "@/components";
import Image from "next/image";
import Button from "@/components/eatSplit/Button";

interface FriendProps {
    friend: FriendType;
}
export function Friend({friend}: FriendProps) {
    return (
        <li>
            <Image src={friend.image} alt={friend.name} width={46} height={46} />
            <h3>{friend.name}</h3>

            {friend.balance<0 && (
                <p className='red'> You owe {friend.name} {Math.abs(friend.balance)}$. </p>
            )}
            {friend.balance>0 && (
                <p className='green'>{friend.name} owe you {Math.abs(friend.balance)}$. </p>
            )}
            {friend.balance === 0 && (
                <p>You and your  {friend.name} are even. </p>
            )}

            <Button>Select</Button>

        </li>
    )
}