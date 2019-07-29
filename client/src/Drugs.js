import React from "react";

function Drugs({ medicinelist }) {
    const {  poster_url,  } = medicinelist;
    

    return (
        <div className="drgls-movie">
            <img className="drgls-poster" src={poster_url} alt={title} />
            <div className="drgls-medicine-body">
                <div className="drgls-title">{title}</div>
                
            </div>
            <div className="drgls-medicine-footer">
                <a href={`/drug/${id}`} className="drgls-btn drgls-btn-Drugs">
                    See medicine
                </a>
            </div>
        </div>
    );
}

export default Drugs;