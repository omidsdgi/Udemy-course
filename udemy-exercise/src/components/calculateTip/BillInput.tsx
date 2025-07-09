import React from "react";


export function BillInput({bill,onBill}) {
    return (
        <div>
        <label htmlFor="bill">How much was the bill</label>
        <input id="bill" type="text" placeholder="Bill value" autoComplete="off" value={bill} onChange={(e)=>onBill(Number(e.target.value))}/>
        </div>
    );
}