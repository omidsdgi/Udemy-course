import {Friend} from "@/components";
import {FriendType} from "@/pages";
 interface FriendsListProps {
     friends: FriendType[];
     onSelection: (friend: FriendType) => void;
     selectedFriend: FriendType | null ;
 }

export function FriendsList({friends,onSelection,selectedFriend}: FriendsListProps) {
    return (
        <ul>
            {friends.map((friend) => (
               <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend}/>

            ))}
        </ul>
    );
}