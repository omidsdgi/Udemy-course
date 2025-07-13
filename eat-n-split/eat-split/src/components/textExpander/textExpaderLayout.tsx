import React from "react";
import {TextExpander} from "@/components";

const globalStyle:React.CSSProperties={
    padding:10,
    margin:10,
    fontFamily:"sans-serif",
    fontSize:20,
    lineHeight:1.5,
    color:"black"
}


export function TextExpanderLayout() {
    return (
        <div style={globalStyle}>
            <TextExpander>
                Space travel is the ultimate adventure! Imagine soaring past the stars
                and exploring new worlds. It&#39;s the stuff of dreams and science fiction,
                but believe it or not, space travel is a real thing. Humans and robots
                are constantly venturing out into the cosmos to uncover its secrets and
                push the boundaries of what&#39;s possible.
            </TextExpander>

            <TextExpander
                collapsedNumWords={10}
                expandButtonText="Show text"
                collapseButtonText="Collapse text"
                buttonColor="#ff6622"
            >
                Space travel requires some seriously amazing technology and
                collaboration between countries, private companies, and international
                space organizations. And while it&#39;s not always easy (or cheap), the
                results are out of this world. Think about the first time humans stepped
                foot on the moon or when rovers were sent to roam around on Mars.
            </TextExpander>

            <TextExpander expanded={true} >
                Space missions have given us incredible insights into our universe and
                have inspired future generations to keep reaching for the stars. Space
                travel is a pretty cool thing to think about. Who knows what we&#39;ll
                discover next!
            </TextExpander>
        </div>
    );
}