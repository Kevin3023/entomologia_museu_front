import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bug from "../../assets/img/louvaDeusGrande.jpeg";

const ListEspecies = ({ data }) => {
  let navigate = useNavigate();

  useEffect(() => {
    // console.log("list especies")
    // console.log(data)
    // console.log("list especies")
  }, [data]);

  return (
    <>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3">
          {data.map((inseto, index) => {
            return (
              <div
                key={index}
                className="col mb-5"
                onClick={() => {
                  navigate(`/${inseto.nome_comum}`);
                }}
              >
                <div className="card my-bg">
                  <img
                    src={inseto.image_url}
                    className="card-img-top imagem"
                    alt="imagem do inseto"
                    title={inseto.nome_comum}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>{inseto.nome_comum}</b>
                    </h5>
                    <p className="card-text">
                      <b>Nome Científico:</b> <i>{inseto.nome_cientifico}</i>
                    </p>
                    <p className="card-text">
                      <b>Habitat:</b> {inseto.habitat.nome}
                    </p>
                    <p className="card-text">
                      <b>Metamorfose:</b> {inseto.metamorfose.nome}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListEspecies;
