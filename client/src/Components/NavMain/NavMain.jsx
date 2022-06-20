import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Brasao_ufra.png";
import './styles.css';
import Brasao from './brasao.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavMain = () => {
  const [active, setMode] = useState(true);
    const ToggleMode =() => {
        const tela = matchMedia('(max-width: 520px)').matches;
        if (tela){
            setMode(!active);
        }
    }
    
    return (
        <>
            <header className="main-header">
                <div className='div-img'>
                    <img className='img' src={Brasao} alt="Brasao_ufra" />
                </div>
                <div className='div-title'>
                    <Link to='/' className='logo-text'>MUSEU DE ENTOMOLOGIA</Link>
                </div>
            </header>
            <nav className='main-nav'>
                <ul className={active ? 'nav-bar' : 'nav-bar nav-bar-open'}>
                    <li><Link onClick={ToggleMode} className='nav-link' to='/'>Home</Link></li>
                    <li><Link onClick={ToggleMode} className='nav-link' to='/pesquisa'>Pesquisar</Link></li>
                    <li><Link onClick={ToggleMode} className='nav-link' to='/equipe'>Equipe</Link></li>
                    <li><Link onClick={ToggleMode} className='nav-link' to='/membros'>Membros</Link></li>
                    <li><Link onClick={ToggleMode} className='nav-link' to='/curiosidades'>Curiosidades</Link></li>
                </ul>
                
                <div onClick={ToggleMode} className= {active ? 'hamburger' : 'hamburger toggle'}>
				    <div className='line1'></div>
                    <div className='line2'></div>
				    <div className='line3'></div>
			    </div>
            </nav>

        </>
    )
};

export default NavMain;
// <nav className='navigation-container'>
//     <div className="logo-ufra">
//         <img src={Logo} width="50px" alt="" />
//         <p>Museu de Entomologia</p>
//     </div>
//     <div className="button-login">
//         {/* criar modal aqui */}
//         <button>Login</button>
//     </div>
// </nav>
