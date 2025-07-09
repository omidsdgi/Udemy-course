import React from "react"
import {on} from "next/dist/client/components/react-dev-overlay/pages/bus";

export function Button({bgColor,onClick,color,margin,children}) {
    return (
      <button style={{backgroundColor:"#7950f2", color:"#fff",margin:"4px 12px", }} onClick={onClick}>{children}</button>
    );
}

