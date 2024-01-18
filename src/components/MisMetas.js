import React from "react";
import Meta from "./Meta";
import '../styles/MisMetas.css'
import { useState } from "react";

function MisMetas(){
    const [metas, setMetas] = useState([])
    const [texto, setTexto] = useState("")
    const [completadas,setCompletadas] = useState(0)
    const [pendientes, setPendientes] = useState(0)

    const añadirMeta = ()=>{
        setMetas([...metas ,{ id:Date.now(), texto: texto }]);
        console.log(metas);
        console.log("meta añadida");
        setTexto("");
        setPendientes(pendientes+1)
    }
    const Completado = () => {
        setCompletadas(completadas+1);
        setPendientes(pendientes-1)

        console.log("completado")
    }
    const Borrar = (id) => {
        setMetas((prevMetas) => prevMetas.filter((metas) => metas.id !== id))
        setPendientes(pendientes-1)
        console.log("borrada")
    }
    return(
        <div className="contenedor-app">
            <h1 className="title">Mis Metas</h1>
            <div className="agregar-metas">
                <input type='text'
                    placeholder="Nueva Nota" 
                    onChange={(e)=>setTexto(e.target.value)}
                    value={texto}
                    />
                <button onClick={añadirMeta}>Agregar</button>
            </div>

            <div className="contenedor-metas">
                <div className="info-metas">
                    <div className="box-info">
                        <p className="complete">
                        Completadas: {completadas}
                        </p>
                    </div>
                    <div className="box-info">
                        <p className="pendiente">
                            Pendientes: {pendientes}
                        </p>
                    </div>
                </div>
                <div className="lista-metas">
                {metas.map((meta) => (
                    <Meta
                        key={meta.id}
                        meta={meta}
                        onDelete={Borrar}
                        onComplete={Completado}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}
export default MisMetas;