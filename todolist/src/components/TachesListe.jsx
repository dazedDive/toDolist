import BarreAjout from "./Barreajout";
import { useState } from "react";

function TachesList(props){



    return(
        <div className="text-white text-center">
           {props.text}
        </div>
    )
}
export default TachesList;