import BarreAjout from "./Barreajout";
import Main from "./Main";
import { useState } from "react";


function TachesList(props){
    
    const terminer=()=>{
        
    }
    const supprimer=()=>{

    }



    return(
        <li className=" list-group-item text-white ">
            <div className="justify-content-center ">
           {props.text}
           <button type="button" className="btn btn-warning ms-5" onClick={terminer}>Fait</button>
           <button type="button" className="btn btn-danger mx-1" onClick={supprimer}>Effacer</button>
           </div>
        </li>
    )
}
export default TachesList;