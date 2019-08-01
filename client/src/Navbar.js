import React from "react";
import { Link } from "@reach/router";

function NavBar (){
    return (
        <div className="drgls-container">
            <nav className="drgls-nav">
                <span className="drgls-title">Pharmacare</span>
                <Link to="/search">Search</Link>
                <Link to="/Pharmacare">Pharmacare</Link>
                <Link to="/Admin">Admin</Link>
                </nav>
        </div>


    );
}

export default NavBar;