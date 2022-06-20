import React from "react";
import FooterMain from "../FooterMain/FooterMain";
import NavMain from "../NavMain/NavMain";
import FormSearchBug from "../FormSearchBug/FormSearchBug";
import ListEspecies from "../ListEspecies/ListEspecies";
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Pesquisa = ({
    handleSubmit,
    handleInputChange,
    inputValue,
    setInputValue,
    data,
    dataSearch
}) => {

    let navigate = useNavigate()
    
    return (
        <>
            <NavMain/>
            <div className='pesquisa-container'>
                <div className='pesquisa-intro'>
                    <h3 className='text-intro'>PROJETOS DE PESQUISA</h3>
                    <p className='sub-text-intro'>Faça sua pesquisa aqui</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className='pesquisa'>
                        <div className='pesquisa-aux'>
                            <input className='input' type='text' placeholder='Nome do Inseto...' name="input-common-user" onChange={handleInputChange} value={inputValue} />
                            <button className='btn-search'>BUSCAR</button>
                        </div>
                        Insira o nome do inseto para a página mostrar as informacões do
                        mesmo.
                    </div>
                </form>
                
                <FormSearchBug
                    inputValue={inputValue}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    setInputValue={setInputValue}
                    dataSearch={dataSearch}
                />
                {data.length ? <ListEspecies data={data} /> : <div className="container mt-5"><h1 className="text-center pb-5">Carregando...</h1></div>}
            </div>
            
            <div className='main-insetos'>
                <div className='bg-descoberta'>
                    <div className='insetos-bg'></div>
                    <div className='leia-mais-descoberta'>
                    <div className='text-leia-mais'>
                        <h3>INSETOS CATALOGADOS, NOVAS DESCOBERTAS</h3>
                        <button className='btn-leia-mais'>Leia mais</button>
                    </div>
                </div>
                </div>
                
                <div className='bg-curiosidades'>
                    <div className='insetos-bg'></div>
                    <div className='leia-mais2'>
                    <div className='text-leia-mais'>
                        <h3>CURIOSIDADES</h3>
                        <button onClick={()=>{navigate("/curiosidades")}} className='btn-leia-mais'>Leia mais</button>
                    </div>
                </div>
                </div>
                
                <div className='bg-reproducao'>
                    <div className='insetos-bg'></div>
                    <div className='leia-mais3'>
                    <div className='text-leia-mais'>
                        <h3>REPRODUÇÃO</h3>
                        <button className='btn-leia-mais'>Leia mais</button>
                    </div>
                </div>
                </div>
                
            </div>
            
            <FooterMain/>
        </>
    );
  };
  
export default Pesquisa;
