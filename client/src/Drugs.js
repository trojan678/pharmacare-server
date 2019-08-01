import React from "react";
import { Link } from "@reach/router";

function Drugs({ drug }) {
    const { id, Drug_name } = drug;


    return (
        <div className="drgls-drug">
             
            <div className="drgls-Drug-body">
                <div className="drgls-id">{id}</div>
                <div classname="drgls-Drug_name">{Drug_name}</div>

            </div>
            <div className="drgls-Drug-footer">
                <Link to={`/chemist/${id}`} className="drgls-btn drgls-btn-Drugs">
                    See medicine
                </Link>
             </div>
        </div>
    );
}

export default Drugs;