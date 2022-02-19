import React from "react";
import logo from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/logo.png';
import { useState, useEffect } from "react";
import './Menu.css'

function Menu() {
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        }
    }, []);

    const stickNavbar = () => {
        if (window !== undefined){
        let windowHeight = window.scrollY;
        windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    }
    return (
        <header>
            <div className="header--info">
                <p>Frete Grátis nas compras acima de R$ 199,90</p>
                <ul>
                    <li>duvidas e sac</li>
                    <li>nossas lojas</li>
                    <li><i className="fas fa-asterisk"></i> entrar</li>
                </ul>
            </div>
            <div className={`menu--area ${stickyClass}`} >
                <div className="header--logo">
                        <img src={logo} alt="logo" />
                </div>
                <nav className="header--menu">
                    <ul>
                        <li>masculino</li>
                        <li>feminino</li>
                        <li>juvenil</li>
                        <li>skate</li>
                        <li className="menu--color">outlet</li>
                    </ul>
                </nav>
                <div className="header--search">
                    <input type="text" placeholder="Procurar" autoComplete="off"/>
                    <button><i className="fa fa-search"></i></button>
                </div>
                <div className="header--shopbag">
                    <i className="fa fa-shopping-bag"></i>
                </div>
            </div>
        </header>
    )
}

export default Menu;