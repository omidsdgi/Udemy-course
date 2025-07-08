import React, {useState} from 'react';

export function Form({onAddItems}) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!description) return;
        const newItem={description, quantity, package:false,id:Date.now()};
        console.log(newItem)
        setQuantity(1)
        setDescription('')

        onAddItems(newItem)

    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setQuantity(+e.target.value)}>
                {Array.from({length:20},(_,i)=>i+1)
                    .map((num)=>
                        (<option key={num} value={num}>{num}</option>))
                }
            </select>
            <input type="text" placeholder='item...' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button>Add</button>
        </form>
    );
}

