import React from "react";
import { useNavigate } from "react-router-dom";
import bug from "../../assets/img/louvaDeusGrande.jpeg";
import "./styles.css"

const FormSearchBug = ({
  handleSubmit,
  handleInputChange,
  inputValue,
  dataSearch,
}) => {
  let navigate = useNavigate();

  return (
    <>
      {dataSearch.length ? (
        <div className="p-5 rounded container-fluid mt-5 align-items-center justify-content-center w-75 bg-light">
          <h2 className="mb-4 title-card">
            Foram encontrados {dataSearch.length} insetos:
          </h2>
          <div className="row row-cols-1 row-cols-md-3">
            {dataSearch.map((inseto, index) => {
              return (
                <div
                  key={index}
                  className="col mb-5"
                  onClick={() => {
                    navigate(`/${inseto.nome_comum}`);
                  }}
                >
                  <div className="card shadow">
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
      ) : (
        <div></div>
      )}
    </>
  );
};

export default FormSearchBug;
