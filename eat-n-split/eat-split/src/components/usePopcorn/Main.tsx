import {ReactNode, useState} from "react";
import React from "react";
import {ListBox, WatchedBox} from "@/components";

export function Main({children}: {children: ReactNode}) {
    return (
        <main className="main">
            {children}
        </main>
    );
}