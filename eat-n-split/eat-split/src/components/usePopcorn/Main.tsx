import {useState} from "react";
import React from "react";
import {ListBox, WatchedBox} from "@/components";

export function Main() {
    return (
        <main className="main">
            <ListBox/>
            <WatchedBox/>
        </main>
    );
}