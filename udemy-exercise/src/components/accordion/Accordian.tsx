import React, {useState} from "react";
import {AccordionItem} from "@/components";

export const faqs=[
    {
        title: 'Where are these chairs assembled?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sit?'
    },
    {
        title:'How long di I have to return my chiar?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error esse eveniet magni quas rerum vero.'
    },
    {
        title: 'Do you ship to countries outside the EU?',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque itaque laborum laudantium optio perferendis quae qui quod.'
    }
]
export function Accordion() {
    const [curOpen, setCurOpen] = useState(null);
    return (
        <div className="accordion">
            {faqs.map((el, i) => (
                <AccordionItem
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    title={el.title}
                    num={i }
                    key={i}
                    >
                    {el.text}
                </AccordionItem>
            ))}
            <AccordionItem
                curOpen={curOpen}
                onOpen={setCurOpen}
                title='Test 1'
                num={23 }
                key="test 1"
            >
                <p>Allows React developers to: </p>
                <ul>
                    <li>Break up UI into components</li>
                    <li>Make  components reusable</li>
                    <li>Place state efficiently</li>
                </ul>
            </AccordionItem>
        </div>
    );
}