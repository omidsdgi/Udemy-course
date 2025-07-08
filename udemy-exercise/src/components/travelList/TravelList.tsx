import React, {useState} from "react";
import {Form, Logo, PackingList, Stats} from "@/components";

 const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 12, packed: false },
    { id: 4, description: "Bags", quantity: 12, packed: false },
];

export interface ItemType {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
}

export function TravelList() {
    const [items, setItems] = useState(initialItems)


    const handleAddItems = (item:ItemType) => {
        setItems((prevState)=>[...prevState,item])
    }

    const handleDeleteItem = (id:number) => {
        setItems(items.filter(item=>item.id !==id))
        }

        const handleToggleItem = (id:number) => {
            setItems(prevState => prevState.map(item => item.id === id ?
                {...item, packed: !item.packed} : item))
        }
    const handleClearList = () => {
        const confirmed=window.confirm("Are you sure you want to delete this item?")

        if (confirmed) {
        setItems([])
        }
    }

    return (
        <div className="app">
            <Logo/>
            <Form onAddItems={handleAddItems}/>
            <PackingList onClearList={handleClearList} items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
            <Stats items={items}  />
        </div>
    )
}