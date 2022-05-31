import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bug from "../../assets/img/louvaDeusGrande.jpeg";


const ListEspecies = ({data}) => {
    
    let navigate = useNavigate()

    useEffect(() => {
        console.log(data)
    })
    return ( <>
        
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3">
            {
                data.map((inseto, index) => {
                    return(
          <div key={index} className="col mb-5" onClick={() => {
              navigate(`/${inseto.nome_comum}`)
            }}>
            <div className="card">
              <img src={bug} className="card-img-top" alt="imagem do inseto" title={inseto.nome_comum}/>
              <div className="card-body">
                <h5 className="card-title"><b>{inseto.nome_comum}</b></h5>
                <p className="card-text">
                  <b>Habitat:</b> {inseto.habitat}
                </p>
                <p className="card-text">
                  <b>Asa:</b> {inseto.asa}
                </p>
                <p className="card-text">
                  <b>Pernas:</b> {inseto.perna}
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
 
export default ListEspecies;