import axios from "axios";
import React from "react";

const HandleButtons = ({ finalPath, idItem, update }) => {
  const handleDeleteItem = () => {
    //criar window confirm onde precisar de window confirm
    window.confirm("Deseja excluir esse item ?") ? axios
      .delete(
        `https://api-museu-entomologiaufra.herokuapp.com/${finalPath}/${idItem}`
      )
      .then((result) => {
        console.log(result);
        update();
      })
      :
      console.log("nada")
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Editar
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" 
              data-bs-dismiss="modal"// --> use for close modal when it's done
              onClick={() => {console.log("funcionou")}}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="ms-3 btn btn-danger" onClick={handleDeleteItem}>
        Excluir
      </button>
    </>
  );
};

export default HandleButtons;