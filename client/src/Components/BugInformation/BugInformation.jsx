import React from "react";
import BugPic from "../../assets/img/vespa.jpg";
import NavMain from "../NavMain/NavMain";

const BugInformation = ({ data }) => {
  return (
    <>
      <NavMain />

      <div className="card mb-3 w-50 mt-4 mx-auto bg-secondary">
        <h3 className="text-white text-center mt-3">{data.nome_comum}</h3>
        <img
          src={BugPic}
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
                <b>Filo:</b> {data.filo}
              </li>
              <li className="list-group-item">
                <b>Classe:</b> {data.classe}
              </li>
              <li className="list-group-item">
                <b>Ordem:</b>
                {data.ordem}
              </li>
              <li className="list-group-item">
                <b>Família:</b> {data.familia}
              </li>
              <li className="list-group-item">
                <b>Gênero:</b> {data.genero}
              </li>
              <li className="list-group-item">
                <b>Comportamento:</b> {data.comportamento}
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                <b>Aparelho Bucal:</b> {data.aparelho_bucal}
              </li>
              <li className="list-group-item">
                <b>Asa:</b> {data.asa}
              </li>
              <li className="list-group-item">
                <b>Abdomên:</b> {data.abdomen}
              </li>
              <li className="list-group-item">
                <b>Antenas:</b> {data.antena}
              </li>
              <li className="list-group-item">
                <b>Metamorfose:</b> {data.metamorfose}
              </li>
              <li className="list-group-item">
                <b>Perna:</b> {data.perna}
              </li>
              <li className="list-group-item">
                <b>Habitat:</b> {data.habitat}
              </li>
            </ul>
          </div>

          <h5 className="card-title text-white text-center mt-2">
            Curiosidade
          </h5>
          <p className="card-text text-white">{data.curiosidade}</p>
        </div>
      </div>
    </>
  );
};

export default BugInformation;
