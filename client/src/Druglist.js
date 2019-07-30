import React from "react";
import Drugs from "./Drugs"

class DrugList extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               medicinelist: [
                   {
                       id: 2,
                       title: 'Capsules',
                   poster_url: 'https://images.pexels.com/photos/415825/pexels-photo-415825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                      
              },
                
               ]
       };
       }
    
     render() {
          const { medicinelist } = this.state;
    return (
        <div className="drgls-container">
            <div className="drgls-Drug-list">
                {Drugslisted.map(m =>(
                    <Drug key={d.id}Drugslisted={d}/>
                ))}
                </div>
                </div>
    );
}
}

export default Druglist;