import React, {useState} from "react";
interface TextExpanderProps {
    collapsedNumWords?: number;
    expandButtonText?: string;
    collapseButtonText?: string;
    buttonColor?: string;
    expanded?: boolean;
    className?: string;
    children: string;
}
export function TextExpander({
                                 collapsedNumWords = 10,
                                 expandButtonText = "Show more",
                                 collapseButtonText = "Show less",
                                 buttonColor = "blue",
                                 expanded = false,
                                 className,
                                 children,
                             }: TextExpanderProps) {
    const [isExpended, setIsExpended] = useState<boolean>(expanded)

    const displayText = isExpended
        ? children
        : children.split(" ").slice(0,collapsedNumWords).join(" ") +"..."

    const buttonStyle={
        backgroundColor: "transparent",
        border: "none",
        font: "inherit",
        cursor: "pointer",
        marginLeft: "6px",
        color: buttonColor,
    }
    return (
        <div className={className}>
            <span>{displayText}</span>
            <button onClick={() => setIsExpended((prev) => !prev)} style={buttonStyle}>
                {isExpended ? collapseButtonText : expandButtonText}
            </button>
        </div>
    );
}