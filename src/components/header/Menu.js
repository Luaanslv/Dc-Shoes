import React from "react";
import logo from '/home/luan/Documentos/Estudos/Dc-Shoes/dcapp/src/img/logo.png';
import './Menu.css'

function Menu() {
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
            <section className="header--logo">
                    <img src={logo} alt="logo" />
            </section>
            <nav className="header--menu">
                <ul>
                    <li><button>masculino</button></li>
                    <li><button>feminino</button></li>
                    <li><button>juvenil</button></li>
                    <li><button>skate</button></li>
                    <li><button className="menu--color">outlet</button></li>
                </ul>
            </nav>
            <div className="header--search">
                <input type="text" placeholder="Procurar" />
                <button><i className="fa fa-search"></i></button>
            </div>
            <div className="header--shopbag">
                <i className="fa fa-shopping-bag"></i>
            </div>
        </header>
    )
}

export default Menu;