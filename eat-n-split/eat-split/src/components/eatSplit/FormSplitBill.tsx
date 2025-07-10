import React, {FormEvent, useState} from 'react';
import Button from "@/components/eatSplit/Button";
import {FriendType} from "@/pages";

interface Props {
    selectedFriend: FriendType;
    onSplitBill: (value: number) => void;
}

export function FormSplitBill({selectedFriend,onSplitBill}:Props){
    const [bill, setBill] = useState("")
    const [paidByUser, setPaidByUser] = useState("")
    const payByFriend = bill ? Number(bill) - Number(paidByUser) :0
    const [whoIsPaying, setWhoIsPaying] = useState('user')

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault()

        if (!bill || !paidByUser) return null

        onSplitBill(whoIsPaying === "user" ? payByFriend : -paidByUser)
    }
    return (
        <form className='form-split-bill' onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>🤑 Bill value</label>
            <input type="text"
                   value={bill}
                   onChange={(e)=>setBill((e.target.value))}/>
            <label>🧍‍♂️ Your expense</label>
            <input type="text"
                   value={paidByUser}
                   onChange={(e)=>setPaidByUser((e.target.value)> bill ? paidByUser : (e.target.value))}/>
            <label> 🚻{selectedFriend.name}&#39;s expense </label>
            <input type="text"
            value={payByFriend}/>
            <label>🤪 Who is paying the bill</label>
            <select
                value={whoIsPaying}
                onChange={(e)=>setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button>Split bill</Button>
        </form>
    );
}

