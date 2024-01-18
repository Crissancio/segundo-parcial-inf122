import React, { useState }from "react";
import trash from '../images/trash_1.svg';
import check from '../images/check-circle_1.svg';
import '../styles/Meta.css'

function Meta({meta,onComplete,onDelete}){

    const [completado,setCompletado] = useState(false)
    
    const completeA = () =>{
        onComplete();
        setCompletado(!completado);
    };
    
    return(
        <div className="meta-container">
            <div className="text-container">
                <p className={completado? "task-complete":"text-meta"}>
                    {meta.texto}
                </p>
                <div className="contenedor-botones">
                    <button onClick={()=>onDelete(meta.id)}>
                        <img src={trash} alt='trash'/>
                    </button>
                    <button onClick={completeA}> 
                        <img src={check} alt='check'/>
                    </button>
                </div>
            </div>
            
        </div>
    );
}
export default Meta;