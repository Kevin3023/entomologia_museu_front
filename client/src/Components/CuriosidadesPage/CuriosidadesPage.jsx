import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavMain from '../NavMain/NavMain';
import bug from "../../assets/img/besourinho.jpg"

const CuriosidadesPage = ({data}) => {
    
    let navigate = useNavigate()
    
    return ( <>
    <NavMain/>

    {/* especies just with curiosity */}

    <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3">
            {
                data.map((inseto, index) => {
                    return(
          <div key={index} className="col mb-5" onClick={() => {
              navigate(`/${inseto.nomeVulgar}`)
            }}>
            <div className="card">
              <img src={bug} className="card-img-top" alt="imagem do inseto" title="inseto"/>
              <div className="card-body">
                <h5 className="card-title text-center mt-3"><b>{inseto.nomeVulgar}</b></h5>
                <p className="card-text">
                {inseto.curiosidade}
                </p>
              </div>
            </div>
          </div>)
                })
            }

        </div>
      </div>

    </> );
}
 
export default CuriosidadesPage;