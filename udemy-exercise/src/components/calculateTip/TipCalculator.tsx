import React, {useState} from "react";
import {BillInput, OutPut, Reset, SelectPercentage} from "@/components";

export function TipCalculator() {
    const [bill , setBill ] = useState("")
    const [percentage1, setPercentage1] = useState(0)
    const [percentage2, setPercentage2] = useState(0)

    const tip= +bill *((percentage1+ percentage2)/2/100)


    const handleReset = () => {
        setBill("")
        setPercentage1(0)
        setPercentage2(0)
    }

    return (
        <div className="steps">
            <BillInput bill={bill} onBill={setBill}/>
         <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
             How did you like the service?
         </SelectPercentage>
            <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
                How did you like the service?
            </SelectPercentage>

            {+bill>0 &&(
                <>
                    <OutPut bill={bill} tip={tip} />
                    <Reset onRest={handleReset} />
                </>)}
        </div>
    );
}