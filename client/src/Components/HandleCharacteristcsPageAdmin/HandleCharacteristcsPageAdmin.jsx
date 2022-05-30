import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import FormAddSingleCharacteristic from "../FormAddSingleCharacteristic/FormAddSingleCharacteristic";
import FormAddTwoCharacteristics from "../FormAddTwoCharacteristcs/FormAddTwoCharacteristcs";
import HandleButtons from "../HandleButtons/HandleButtons";
import ModalEditItem from "../ModalEditItem/ModalEditItem";

const HandleCharacteristcsPage = ({
  finalPath,
  field,
  title,
  fields,
  titleRelationship,
  finalRelationshipPath,
  nameRelationship,
  tableName,
  fields_,
}) => {
  const [objectList, setObjectList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});
  const [nome, setNome] = useState("");

  const update = () => {
    axios
      .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`)
      .then((result) => {
        setObjectList(result.data);
      });
  };

  const handleDelete = id => {
    axios
    .delete(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}/${id}`)
    .then(() => update());
  }

  const handleEdit = id => {
    axios
    .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}/${id}`)
    .then((result) => {
      setData(result.data);
      setModalShow(true);
    });
  }

  const handleSave = id => {
    
    setModalShow(false);
  }

  useEffect(update, [finalPath]);

  return (
    <div className="container rounded border-secondary bg-light p-4 mt-5">
      <ModalEditItem show={modalShow} title={title} content={<input onChange={event => setNome(event.target.value)} value={nome} />} handleClose={() => setModalShow(false)} handleSave={handleSave}/>
      <Button variant="success">Adicionar</Button>
      {objectList.length > 0 && (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {Object.keys(objectList[0]).filter(v => v !== 'id').map((v, k) => <th key={k}>{v.toUpperCase()}</th>)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {objectList.map((element, index) => {
              return (
                <tr key={index}>
                  {Object.keys(element).filter(v => v !== 'id').map( (v,k) => <td key={k}>{element[v].nome ?? element[v]}</td>)}
                  <td className="d-flex justify-content-end">
                    <Button variant="primary" onClick={() => handleEdit(element.id)}>Editar</Button>
                    <Button variant="danger" onClick={() => window.confirm("Deseja excluir este item?") && handleDelete(element.id)}>Excluir</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HandleCharacteristcsPage;
