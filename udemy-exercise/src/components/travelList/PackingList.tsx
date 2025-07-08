import React, {useState} from 'react';
import {Item, ItemType} from "@/components";

interface PackingListType {
    items: ItemType[],
    onDeleteItem: (id:number) => void,
    onToggleItem: (id:number) => void,
    onClearList:() => void,
}


export function PackingList({ items, onDeleteItem,onToggleItem,onClearList}: PackingListType) {

    const [sortBy, setSortBy] = useState('input')



  let sortedItems: ItemType[]=[]
    if (sortBy === 'input') sortedItems=items
    if (sortBy === 'description') sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description))
    if (sortBy === 'packed') sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item,index) => (
                    <Item key={index} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                ))}
            </ul>
            <div className='actions'>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                    <option value={"input"} >Sort by input</option>
                    <option value={"description"} >Sort by description</option>
                    <option value={"packed"} >Sort by packed status</option>
                </select>
                <button onClick={onClearList}>ClearList</button>
            </div>
        </div>
    );
}

