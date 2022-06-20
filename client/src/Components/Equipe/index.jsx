import React from "react";
import FooterMain from "../FooterMain/FooterMain";
import NavMain from "../NavMain/NavMain";
import './styles.css';

const Equipe = () => {
    
    return (
        <>
            <NavMain/>
            <div className='equipe-container'>
                <div className='equipe-intro'>
                    <h3 className='text-intro'>NOSSO TIME</h3>
                </div>
                <div className='equipe-imgs'>
                    <div className='container-bg'>
                        <div className='equipe-bg1'>

                        </div>
                        <div className='equipe-intro1'>
                            <h3 className='equipe-text'> <a className='link' target='new' href='https://www.linkedin.com/in/kevin-gomes-0616061bb/'>KEVIN GOMES</a></h3>
                        </div>
                    </div>
                    <div className='container-bg'>
                        <div className='equipe-bg2'>

                        </div>
                        <div className='equipe-intro1'>
                            <h3 className='equipe-text'> <a className='link' target='new' href='https://www.linkedin.com/in/denis-junior-b34b74205/'>DENIS JUNIOR</a></h3>
                        </div>
                    </div>
                    <div className='container-bg'>
                        <div className='equipe-bg3'>

                        </div>
                        <div className='equipe-intro1'>
                            <h3 className='equipe-text'>JOHN MOURA</h3>
                        </div>
                    </div>
                </div>
            </div>
                        
            <FooterMain/>
        </>
    )
}

export default Equipe;
