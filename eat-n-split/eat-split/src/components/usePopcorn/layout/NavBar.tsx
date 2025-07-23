import {ReactNode, useState} from "react";
import {Logo, NumResult, Search} from "@/components";

export function NavBar({children}: {children: ReactNode}) {

    return (
        <nav className="nav-bar">
            {children}
        </nav>
    );
}