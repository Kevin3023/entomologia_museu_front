import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const FiloForm = ({ data, title, handleClose, handleSave }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  const handleData = (e) => {
    e.preventDefault();


    handleSave()
  };

  return (
    <>
      <form /*onSubmit={handleData}*/>
        <label className="form-label fs-5">{title}</label>
        <input
          className="form-control"
          type="text"
          name={data.nome || title}
          placeholder={`Inserir ${title} aqui`}
          /* onChange={handleInputChange} */
          value={data.nome || ""}
        />
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

export default FiloForm;
