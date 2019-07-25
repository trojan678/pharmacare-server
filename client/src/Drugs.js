import React from "react";

function patient({ Drugslisted }) {
    const { id, Drug_prescription,Huduma_number,patient_Name,location} = Drugslisted;
    let prescription = "";
    if (prescription_count === 0) {
        prescription = "Drug not listed";
     } else if  ( prescription_count === 1){
         prescription = "Available";
     } else {
         prescription = "Not available";
     }

     return (
         <div className="patient">
             
                 </div>
                 
     )
 }

 export default App;