import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const OrdemForm = ({ data, title, handleClose, onSubmit }) => {
  let relationships = ["filos", "classes"];

  useEffect(() => {
    console.log("ordem form");
    console.log(data);

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[0]}`
      )
      .then((result) => {
        setListFiloData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[1]}`
      )
      .then((result) => {
        setListClasseData(result.data);
      }).then(() => console.log(listClasseData));
  }, [data]);

  const [nome, setNome] = useState(data.nome || "");
  const [listFiloData, setListFiloData] = useState([]);
  const [listClasseData, setListClasseData] = useState([]);

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

    finalData.classe = { //setting id of the relationship
        id: finalData.classe_id,
        filo: {
            id: finalData.filo_id
        }
    }


    delete finalData.filo_id; // erasing filo_id because it doesn't exist :)
    delete finalData.classe_id; // erasing classe_id because it doesn't exist :)


    console.log("*** handle submit", finalData);
    window.confirm("deseja salvar/alterar o item ?") ? onSubmit(finalData) /*function that send the data */ : console.log("nhew")
  };

  return (
    <>
      <form onSubmit={handleData}>
        <label className="form-label fs-5">Ordem</label>
        <input
          className="form-control mb-3"
          type="text"
          name={"nome"}
          placeholder={`Inserir ordem aqui`}
          onChange={handleInputChangeNome}
          value={nome}
        />

        <label className="form-label fs-5">Classe</label>
        <select name="classe_id" className="form-select">
          {listClasseData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Filo</label>
        <select name="filo_id" className="form-select">
          {listFiloData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
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

export default OrdemForm;
