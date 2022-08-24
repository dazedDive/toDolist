import BarreAjout from "./Barreajout"
import TacheListes from "./TachesListe";
import './styles/nbtache.css'
import { useState } from "react";


function Main(props){
    const{taches,setTaches}=useState([])
    const tachesAfaire=[];
    const tachesFaites=[];
    
    const newtache=(e)=>{
        const newTachesList = taches.concat(e)
        setTaches(newTachesList);
    }


    return(
        <>
        <BarreAjout newtache={newtache}/>
        <ul>
            <li>
        {taches.map((tache)=>{<TacheListes text={tache.text}/>})}
            </li>
        </ul>
        <div className="container">
        <div className="d-flex justify-content-end">
            <span className="d-flex align-items-end">
            <h3 className="nbtachestyle">Nb Tache(s):</h3>
            <h3 className="number mx-2">{tachesAfaire.length}</h3>
            </span>
        </div>
        </div>
        <div className="container">
        <div className="d-flex justify-content-end">
            <span className="d-flex align-items-end">
            <h3 className="nbtachestyle">Nb Tache(s) terminée(s):</h3>
            <h3 className="number mx-2">{tachesFaites.length}</h3>
            </span>
        </div>
        </div>

        </>
    )
    
}
export default Main;