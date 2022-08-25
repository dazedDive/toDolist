import BarreAjout from "./Barreajout"
import TachesList from "./TachesListe";
import './styles/nbtache.css'
import { useState } from "react";


function Main(props){
    const[taches,setTaches]=useState([]);
    const[tachesOver,setTachesOver]=useState([])
       
    const newtache=(e)=>{
        console.log(e)
        let newTachesList = taches.concat(e)
        setTaches(newTachesList);
    }

    const tacheDelete=(e)=>{
        console.log(e)
        let newTachesList=taches.splice(e)
    }

    return(
        <>
        <BarreAjout newtache={newtache}/>
        <ul>
            {taches.map((tache,id)=><TachesList key={id} text={tache.text}/>)}
        </ul>
        <div className="container">
        <div className="d-flex justify-content-end">
            <span className="d-flex align-items-end">
            <h3 className="nbtachestyle">Nb Tache(s):</h3>
            <h3 className="number mx-2">{taches.length}</h3>
            </span>
        </div>
        </div>
        <div className="container">
        <div className="d-flex justify-content-end">
            <span className="d-flex align-items-end">
            <h3 className="nbtachestyle">Nb Tache(s) terminée(s):</h3>
            <h3 className="number mx-2"></h3>
            </span>
        </div>
        </div>

        </>
    )
    
}
export default Main;