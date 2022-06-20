import React from "react";
import { useNavigate } from "react-router-dom";
import NavMain from "../NavMain/NavMain";
import bug from "../../assets/img/besourinho.jpg";
import FooterMain from "../FooterMain/FooterMain";
import "./styles.css"

const CuriosidadesPage = ({ data }) => {
  let navigate = useNavigate();

  return (
    <>
      <NavMain />
      
      {/* especies just with curiosity */}
      <div className="my-container">
        <div className="container mb-5">
          <div className="row row-cols-1 row-cols-md-3 mt-5">
            {data.map((inseto, index) => {
              return (
                <div
                  key={index}
                  className="col mb-5"
                  onClick={() => {
                    navigate(`/${inseto.nome_comum}`);
                  }}
                >
                  <div className="card">
                    <img
                      src={inseto.image_url}
                      className="card-img-top imagem"
                      alt="imagem do inseto"
                      title={inseto.nome_comum}
                    />
                    <div className="card-body curiosidade">
                      <h5 className="card-title text-center mt-3">
                        <b>{inseto.nome_comum}</b>
                      </h5>
                      <p className="card-text">{inseto.curiosidades || "Nulo"}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterMain/>
    </>
  );
};

export default CuriosidadesPage;
