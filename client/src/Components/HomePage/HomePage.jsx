import React from "react";
import FormSearchBug from "../FormSearchBug/FormSearchBug";
import NavMain from "../NavMain/NavMain";

import ListEspecies from "../ListEspecies/ListEspecies";
import FooterMain from "../FooterMain/FooterMain";
import './styles.css';


const HomePage = ({
  handleSubmit,
  handleInputChange,
  inputValue,
  setInputValue,
  data,
  dataSearch
}) => {

  //    if exists data in data, the component BugInformation is rendered
  // let validationData = data > 0


  return (
    <>
      <NavMain />
      
      <div id="home">
		        <div className="bg">
                    <div className='intro-bg'></div>
                </div>

                <div className='line'></div>
		        <div className="intro">
                    <div>
                      <h3 className="text-welcome">BEM VINDO AO MUSEU DE ENTOMOLOGIA DA UFRA</h3>
		                  <p className="sub-text-welcome">Laboratório de pesquisa de insetos</p>
                    </div>
		        </div>
	    </div>

            <div className='main-projetos'>
                <div className='projetos-intro'>
                    <h3 className='text-projetos'>PROJETOS DE PESQUISA</h3>
                    <p className='sub-text-projetos'>Áreas de estudo atuais</p>
                </div>
            </div>
            
            <div className='main-insetos'>
                <div className='bg1'>
                    <div className='insetos-bg'></div>
                    <div className='leia-mais1'>
                    <div className='text-leia-mais'>
                        <h3>ARACNIDEOS</h3>
                        <button className='btn-leia-mais'>Leia mais</button>
                    </div>
                </div>
                </div>
                
                <div className='bg2'>
                    <div className='insetos-bg'></div>
                    <div className='leia-mais2'>
                    <div className='text-leia-mais'>
                        <h3>SCORPIONES</h3>
                        <button className='btn-leia-mais'>Leia mais</button>
                    </div>
                </div>
                </div>
                
                <div className='bg3'>
                    <div className='insetos-bg'></div>
                    <div className='leia-mais3'>
                    <div className='text-leia-mais'>
                        <h3>PARASITAS</h3>
                        <button className='btn-leia-mais'>Leia mais</button>
                    </div>
                </div>
                </div>
                
            </div>

            <div className='localidade'>
                <iframe style={{border: '0', width:'100%', height:'100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.061499281936!2d-48.44319891554131!3d-1.455654453022855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48cff6db08d99%3A0xe5861be0ad2523fe!2sUniversidade%20Federal%20Rural%20da%20Amaz%C3%B4nia%20-%20UFRA!5e0!3m2!1spt-BR!2sbr!4v1654220867787!5m2!1spt-BR!2sbr"></iframe>
            </div>

      <FooterMain/>

    </>
  );
};

export default HomePage;
