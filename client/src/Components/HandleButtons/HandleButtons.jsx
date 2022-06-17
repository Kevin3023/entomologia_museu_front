import axios from "axios";
import React, { useRef, useState } from "react";

const HandleButtons = ({
  finalPath,
  idItem,
  nomeItem,
  update,
  title,
  field,
}) => {
  const [newCharacteristc, setNewCharacteristc] = useState(nomeItem); //here will be the old value

  const ref = useRef();

  const handleDeleteItem = () => {
    //criar window confirm onde precisar de window confirm
    window.confirm("Deseja excluir esse item ?")
      ? axios
          .delete(
            `https://api-museu-entomologiaufra.herokuapp.com/${finalPath}/${idItem}`
          )
          .then((result) => {
            // console.log(result);
            update();
          })
      : console.log("nada");
  };

  const handleEditItem = () => {
    
    
  }

  const handleInputChange = (e) => {
    console.log("*** handleInputChange", e.target.value);
    setNewCharacteristc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    window.confirm('Deseja atualizar esse item ?')
    ? axios
      .put(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}/${idItem}`, data)
      .then((response) => {
        console.log(response);
        axios
          .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`)
          .then((result) => {
            console.log(result);
            update();
            setNewCharacteristc("");
          })
      }) : alert('Não foi possível editar o item')

  };

  return (
    <>
    {console.log(nomeItem)}
      <button
        type="button"
        className="btn btn-primary"
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
                Editar {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name={field} //name in database
                  placeholder={`Inserir ${title} aqui`}
                  onChange={handleInputChange}
                  value={newCharacteristc || ""}
                  className="mb-5 form-control"
                />
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal" // --> use for close modal when it's done
                    onClick={() => {
                      console.log("funcionou");
                    }}
                  >
                    Salvar
                  </button>
                </div>
              </form>
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
