import React from "react";
import FooterMain from "../FooterMain/FooterMain";
import NavMain from "../NavMain/NavMain";
import { useNavigate } from 'react-router-dom';
import './styles.css';


const Membros = () => {

    let navigate = useNavigate()

    return (
        <>
            <NavMain/>
            <div className='membros-container1'>
                <div className='membros-container'>
                    <h3 className='text-membros'>Faça login para alterar e atualizar insetos</h3>
                    <div className="bg-light card-login mt-5">
                        <form className="w-100 mt-4 p-3">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Usuário
                                </label>
                                <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" className="form-text">
                                    Insira seu usuário para acessar a página do admin
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button onClick={()=>{
                                    navigate("/admin")
                                    }} className="btn btn-success">
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className='mt-5 sub-text-membros'>Museu da Universidade Federal Rural da Amazônia</p>
                </div>
            </div>
            
            <div className='trash'>

            </div>
            <FooterMain/>
        </>
    )
}

export default Membros;
