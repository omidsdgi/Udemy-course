import {Counter} from "@/components/counter/counter";
import {Accordion, RangeCounter, TravelList} from "@/components";
import {TipCalculator} from "@/components/calculateTip/TipCalculator";



export default function Home() {
    return (
        <div >
            <TravelList/>
            <Counter/>
            <RangeCounter/>
            <Accordion />
            <TipCalculator/>
        </div>
    )
}
