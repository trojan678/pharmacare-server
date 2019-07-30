import React from "react";
import { link } from "@reach/router";

function NavBar (){
    return (
        <div className="drgls-container">
            <nav className="drgls-nav">
                <span className="drgls-title">Pharmacare</span>
                <link to="/search">search</link>
                <link to="/Pharmacare">Pharmacare</link>
                </nav>
        </div>


    );
}

export default NavBar;