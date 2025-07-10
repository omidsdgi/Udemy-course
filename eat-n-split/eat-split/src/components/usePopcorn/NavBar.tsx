import {useState} from "react";
import {Logo, NumResult, Search} from "@/components";

export function NavBar() {

    return (
        <nav className="nav-bar">
         <Logo/>
          <Search/>
          <NumResult/>
        </nav>
    );
}