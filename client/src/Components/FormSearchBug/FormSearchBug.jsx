import React from "react";
import { useNavigate } from "react-router-dom";
import bug from "../../assets/img/louvaDeusGrande.jpeg";

const FormSearchBug = ({
  handleSubmit,
  handleInputChange,
  inputValue,
  dataSearch,
}) => {
  let navigate = useNavigate();

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light mt-5 justify-content-center py-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3 ">
            <select name="teste" className="select">
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c" selected>c</option>

            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Nome do Inseto..."
              name="input-common-user"
              onChange={handleInputChange}
              value={inputValue}
            />
            <button className="btn btn-outline-secondary">Pesquisar</button>
          </div>
          <div id="passwordHelpBlock" className="form-text">
            Insira o nome do inseto para a página mostrar as informacões do
            mesmo.
          </div>
        </form>
      </div>

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
                      src="https://source.unsplash.com/1600x900/?insect"
                      className="card-img-top"
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
