import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import FormAddSingleCharacteristic from "../FormAddSingleCharacteristic/FormAddSingleCharacteristic";
import FormAddTwoCharacteristics from "../FormAddTwoCharacteristcs/FormAddTwoCharacteristcs";
import HandleButtons from "../HandleButtons/HandleButtons";
import ModalEditItem from "../ModalEditItem/ModalEditItem";

// forms
import AbdomenForm from "../Forms/AbdomenForm";
import AntenasForm from "../Forms/AntenasForm";
import AparelhoBucalForm from "../Forms/AparelhoBucalForm";
import AsasForm from "../Forms/AsasForm";
import ClasseForm from "../Forms/ClasseForm";
import ComportamentoForm from "../Forms/ComportamentoForm";
import EspecieForm from "../Forms/EspecieForm";
import FamiliaForm from "../Forms/FamiliaForm";
import FiloForm from "../Forms/FiloForm";
import GeneroForm from "../Forms/GeneroForm";
import HabitatForm from "../Forms/HabitatForm";
import MetamorfoseForm from "../Forms/MetamorfoseForm";
import OrdemForm from "../Forms/OrdemForm";
import PernasForm from "../Forms/PernasForm";

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

  const handleDelete = (id) => {
    axios
      .delete(
        `https://api-museu-entomologiaufra.herokuapp.com/${finalPath}/${id}`
      )
      .then(() => update());
  };

  const handleEdit = (id) => {
    id
      ? axios
          .get(
            `https://api-museu-entomologiaufra.herokuapp.com/${finalPath}/${id}`
          )
          .then((result) => {
            setData(result.data);
            setModalShow(true);
          })
      : (() => {
          setData({});
          setModalShow(true);
        })();
  };

  const handleSave = (data) => {
    setModalShow(false);
  };

  useEffect(update, [finalPath]);

  const MyForm = {
    "filos": FiloForm,
    "classes": ClasseForm,
    "ordem": OrdemForm,
    "familias": FamiliaForm,
    "generos": GeneroForm,
    "especies": EspecieForm,
    "asas": AsasForm,
    "pernas": PernasForm,
    "abdomens": AbdomenForm,
    "antena": AntenasForm,
    "bocas": AparelhoBucalForm,
    "metamorfoses": MetamorfoseForm,
    "comportamentos": ComportamentoForm,
    "habitats": HabitatForm,
  }[finalPath];

  return (
    <div className="container rounded border-secondary bg-light p-4 mt-5">
      <ModalEditItem
        show={modalShow}
        title={title}
        data={data}
        content={<MyForm onSubmit={(data) => handleSave(data)} data={data} title={title} handleClose={() => setModalShow(false)}/>}
        
      />
      <h2 className="text-center">{title}</h2>
      <div className="d-flex justify-content-center">
        <Button
          variant="btn btn-outline-success"
          className="w-25"
          onClick={() => handleEdit()}
        >
          Adicionar
        </Button>
      </div>
      {objectList.length > 0 && (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {Object.keys(objectList[0])
                .filter((value) => value !== "id")
                .map((value, key) => (
                  <th key={key}>{value.toUpperCase()}</th>
                ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {objectList.map((element, index) => {
              return (
                <tr key={index}>
                  {Object.keys(element)
                    .filter((key) => key !== "id")
                    .map((value, key) => (
                      <td key={key}>{element[value].nome ?? element[value]}</td>
                    ))}
                  <td className="d-flex justify-content-end">
                    <Button
                      variant="btn btn-outline-primary"
                      onClick={() => handleEdit(element.id)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="btn btn-outline-danger"
                      className="ms-2"
                      onClick={() =>
                        window.confirm("Deseja excluir este item?") &&
                        handleDelete(element.id)
                      }
                    >
                      Excluir
                    </Button>
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
