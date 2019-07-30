import React from "react";

function Drugs({ drug }) {
    const { id, Drug_name } = drug;


    return (
        <div className="drgls-drug">
             
            <div className="drgls-Drug-body">
                <div className="drgls-id">{id}</div>
                <div classname="drgls-Drug_name">{Drug_name}</div>

            </div>
            <div className="drgls-Drug-footer">
                <a href={`/chemist/${id}`} className="drgls-btn drgls-btn-Drugs">
                    See medicine
                </a>
             </div>
        </div>
    );
}

export default Drugs;