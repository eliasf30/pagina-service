import "./navbar.css"
import logo from "./images/logo.png"


import { MdCall } from 'react-icons/md';
import { Link } from "react-scroll";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsWhatsapp } from 'react-icons/bs';
export default function Navbar() {

    const [Section, UseSection] = useState("")

    const [toggleMenu, UseToggleMenu] = useState("closed")

    console.log(toggleMenu)

    return (



        <div className="navbar_div">
            <div className="burger_div">
                {
                    (toggleMenu === "closed") ?

                        <button className="burger_button" onClick={() => { UseToggleMenu("open") }}>
                            <GiHamburgerMenu className="burger" />
                        </button>
                        :
                        <button className="burger_button" onClick={() => { UseToggleMenu("closed") }}>
                            <GiHamburgerMenu className="burger" />
                        </button>
                }
            </div>
            <div className="logo_div">
                <img className="logo" src={logo}></img>
            </div>






            <div className="ul_div">
                <ul>
                    <Link smooth={true} duration={500} to="inicio">
                        <button onClick={() => UseSection("Inicio")} className="navbar_Button" disabled={Section == "Inicio"}>Inicio</button>
                    </Link>
                    <Link to="About" offset={-105} duration={500} smooth={true} >
                        <button onClick={() => UseSection("Nosotros")} className="navbar_Button" disabled={Section == "Nosotros"}>Nosotros</button>
                    </Link>
                    <Link to="servicios" offset={-105} duration={500} smooth={true} >
                        <button onClick={() => UseSection("Servicios")} className="navbar_Button" disabled={Section == "Servicios"}>Servicios</button>
                    </Link>
                    <Link to="contactos" duration={500} smooth={true} >
                        <button onClick={() => UseSection("Contactos")} className="navbar_Button" disabled={Section == "Contactos"}>Contactos</button>
                    </Link>
                </ul>

            </div>
            <div className="buttons_div">

                <button className="presupuesto_button"><a target="_blank" href="https://api.whatsapp.com/send?phone=3515397807">Pedí presupuesto ➤</a></button>
                <MdCall className="number_icon" />
                <div className="number_div">
                    <p>Llámanos:</p>
                    <h5>3515397807</h5>
                </div>

            </div >
            <div className="whatsapp_div">
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5493515397807">
                    <BsWhatsapp className="whatsappIcon" />

                </a>
            </div>
        </div>

    )
}