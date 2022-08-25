import { useState } from "react";



function BarreAjout(props){
    

    const [inputUser, setInputUser]=useState('')

    const ajouter =()=>{
            props.newtache({
            id:Math.floor(Math.random()*1000),
            
            text:inputUser
        });
        setInputUser('')
    }
    const change =(e)=>{
        setInputUser(e.target.value)
    }

    return(
        <>
        <div className="container">
            
            <div className="row py-4">
                <div className="col-10">
                <input className="form-control form-control-lg" 
                type="text" placeholder="ajouter une tache" aria-label=".form-control-lg example" 
                value={inputUser} onChange={change}/> 
                </div>
                <div className="col-2">
                <button type="button" className="btn btn-light" onClick={ajouter}> + Ajouter</button>
                </div>
            </div>
        </div>
        
        <div className="container">
            
        </div>
       
        </>
    );
}
export default BarreAjout;
