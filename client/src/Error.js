import React from "react";

function Error({ message }) {
    return (
        <div className="drgls-fullpage-text">
            <p>{message}</p>
        </div>
    );
}

Error.defaultProps = {
         message: "Sorry, a server error occurred. Please retry."
     };

export default Error;