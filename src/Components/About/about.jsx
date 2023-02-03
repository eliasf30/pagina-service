import "./about.css"
import imagen from "./images/imagenCV.PNG"


export default function About() {
    return (

        <div className="about_div" id="About">
            <img className="imagenCV" src={imagen} alt="imagenCV" />


            <div id="text_div" className="text_div" >
                <h3>Sobre nosotros</h3>
                <p> Mi nombre es Nestor Fernando, soy gasista y electricista matriculado y hago arreglos de plomería. Tengo 30 años de experiencia arreglando baños, cocinas, electrodomésticos, entre otros. Vivo en Córdoba Capital, Argentina. 
                    
                </p>
                <p>hacemos presupuesto sin cargo, y su consulta no molesta. Aceptamos tarjeta debito, credito, transferencia y efectivo.</p>
                
            </div>
        </div>
        )
}