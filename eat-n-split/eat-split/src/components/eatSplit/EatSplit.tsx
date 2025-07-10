import {FormAddFriend, FormSplitBill, FriendsList} from "@/components";
import Button from "@/components/eatSplit/Button";
import {useState} from "react";

export interface FriendType  {
    id: number;
    name: string;
    image: string;
    balance: number;
}

const initialFriends:FriendType[] = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];


export default function EatSplit() {
    const [friends, setFriends] = useState<FriendType[]>(initialFriends)
    const [showAddFriend, setShowAddFriend] = useState<boolean>(false)
    const [selectedFriend, setSelectedFriend] = useState<FriendType | null>(null)

    const handleShowAddFriend = () => {
        setShowAddFriend(prevState =>!prevState );
    }
    const handleAddFriend = (friend:FriendType) => {
        setFriends((friends) => [...friends,friend]);
        setShowAddFriend(false);
    }

    const handleSelection = (friend:FriendType) => {
        setSelectedFriend((cur)=>cur?.id === friend.id ? null : friend);
        setShowAddFriend(false);
    }

    const handleSplitBill = (value:number) => {
        setFriends((friends) =>
            friends.map((friend)=>
                friend.id === selectedFriend?.id
                    ? {...friend, balance: friend.balance + value}
                    : friend
            ));
        setSelectedFriend(null);
    }
    return (
        <div style={{ backgroundColor:"white", padding:"50px", marginTop:"100px"}} >
        <div className="app" >
            <div className='sidebar'>
                <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />

                {showAddFriend && <FormAddFriend  onAddFriend={handleAddFriend} />}
                <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'} </Button>
            </div>
            {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
        </div>
        </div>
    );
}
