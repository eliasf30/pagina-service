import "./servicios.css"
import TechCard from "./Card/card"
import { technologies } from "./Servicios"
import { otherServices } from "./listaServicios"



export default function Servicios() {

    return (
        <div className="tech_div" id="servicios">

            <div className="service_container">
                <div className="card_container" >
                    <h3 className="card_container_h3" >¿Qué hacemos?</h3>
                    <div className="true_container">
                        {technologies.map(tech => <TechCard ID={tech.ID} {...tech} />)}
                    </div>
                </div>
                <div className="otros_servicios">
                    <div className="other_services_container">
                        <h4 className="service_h4">¿En que podemos ayudarte?</h4>

                        <ul className="service_ul">
                            {
                                otherServices.map(
                                    service => 
                                    <a className="service_a" href={service.link}>
                                        <li className="service_li">
                                            {service.title}
                                        </li>
                                        </a>
                                    
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}