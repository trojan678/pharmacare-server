import React from "react";
import Drugs from "Drugs";

function Druglist({ Drugslisted}) {
    return (
        <div className="drg-container">
            <div className="drg-Druglist">
                {Drugslisted.map(m =>(
                    <Drug key={d.id}Drugslisted={d}/>
                ))}
                </div>
                </div>
    );
}

export default Druglist;