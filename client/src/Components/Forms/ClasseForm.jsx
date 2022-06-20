import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ClasseForm = ({ data, title, handleClose, onSubmit }) => {
  let relationships = ["filos"];

  useEffect(() => {
    console.log("classe form");
    console.log(data);

    axios
        .get(`https://api-museu-entomologiaufra.herokuapp.com/${relationships[0]}`)
        .then((result) => {
          setListFiloData(result.data);
        })
      

  }, [data]);

  const [nome, setNome] = useState(data.nome || "");
  const [filo_id, setFiloId] = useState(data.filo.id || "");
  
  const [listFiloData, setListFiloData] = useState([]);

  const handleInputChangeNome = (e) => {
    console.log("***** handleInputChangeNome", e.target.value);
    setNome(e.target.value);
  };

  const handleData = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const finalData = Object.fromEntries(formData);

    if (data.id) {
      finalData.id = data.id;
    }

    finalData.filo = { //setting id of the relationship
      id: finalData.filo_id
    }

    delete finalData.filo_id // erasing filo_id because it doesn't exist :)

    console.log("*** handle submit", finalData);
    window.confirm("deseja salvar/alterar o item ?") ? onSubmit(finalData) /*function that send the data */ : console.log("nhew")
  };

  return (
    <>
      <form onSubmit={handleData}>
        <label className="form-label fs-5">Classe</label>
        <input
          className="form-control mb-3"
          type="text"
          name={"nome"}
          placeholder={`Inserir classe aqui`}
          onChange={handleInputChangeNome}
          value={nome}
        />

        <label className="form-label fs-5">Filo</label>
        <select name="filo_id" value={filo_id} className="form-select" onChange={filo => setFiloId(filo.target.value)}>
          {listFiloData.map((value, key) => {
              return(
              <option key={key} value={value.id}>
                {value.nome}
              </option>)
          })}
        </select>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Modal.Footer>
      </form>
    </>
  );
};

export default ClasseForm;
