import React from "react";
import BugPic from "../../assets/img/vespa.jpg";
import NavMain from "../NavMain/NavMain";
import "./styles.css";

const BugInformation = ({ data }) => {
  return (
    <>
      <NavMain />
      
      <div className="card mb-3 w-50 mt-4 mx-auto bg-site">
        <h3 className="text-white text-center mt-3">{data.nome_comum}</h3>
        <img
          src={data.image_url}
          className="card-img-top"
          alt={data.nome_comum}
          title={data.nome_comum}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-white mt-1">
            Características Gerais
          </h5>
          <div className="row row-cols-md-2 mx-auto">
            <ul className="list-group mb-3">
              <li className="list-group-item">
                <b>Nome Científico:</b> {data.nome_cientifico}
              </li>
              <li className="list-group-item">
                <b>Nome Vulgar:</b> {data.nome_comum}
              </li>
              <li className="list-group-item">
                <b>Filo:</b> {data.filo.nome}
              </li>
              <li className="list-group-item">
                <b>Classe:</b> {data.classe.nome}
              </li>
              <li className="list-group-item">
                <b>Ordem:</b>
                {data.ordem.nome}
              </li>
              <li className="list-group-item">
                <b>Família:</b> {data.familia.nome}
              </li>
              <li className="list-group-item">
                <b>Gênero:</b> {data.genero.nome}
              </li>
              <li className="list-group-item">
                <b>Comportamento:</b> {data.comportamento.nome}
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                <b>Aparelho Bucal:</b> {data.aparelho_bucal.nome}
              </li>
              <li className="list-group-item">
                <b>Asa:</b> {data.asas.nome}
              </li>
              <li className="list-group-item">
                <b>Abdomên:</b> {data.abdomen.nome}
              </li>
              <li className="list-group-item">
                <b>Antena:</b> {data.antenas.nome}
              </li>
              <li className="list-group-item">
                <b>Metamorfose:</b> {data.metamorfose.nome}
              </li>
              <li className="list-group-item">
                <b>Perna:</b> {data.pernas.nome}
              </li>
              <li className="list-group-item">
                <b>Habitat:</b> {data.habitat.nome}
              </li>
            </ul>
          </div>

          <h5 className="card-title text-white text-center mt-2">
            Curiosidade
          </h5>
          <p className="card-text text-white">{data.curiosidades}</p>
        </div>
      </div>
    </>
  );
};

export default BugInformation;
