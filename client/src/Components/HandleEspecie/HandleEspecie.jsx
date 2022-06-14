import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ModalEditItem from "../ModalEditItem/ModalEditItem";

// forms

import EspecieForm from "../Forms/EspecieForm";

const HandleEspecie = ({
  finalPath,
  title
}) => {
  const [objectList, setObjectList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [unitData, setUnitData] = useState({});

  const update = () => {
    axios
      .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`)
      .then((result) => {
        setObjectList(result.data);
      }).then(() => console.log(objectList));
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
            setUnitData(result.data);
            setModalShow(true);
          })
      : (() => {
          setUnitData({});
          setModalShow(true);
        })();
  };

  const handleSave = (data) => {
    // console.log(data);
    
    
        //add img for insect
        const formData = new FormData()
        // console.log(formData);
        formData.append("images", data.image_url)
        formData.append("project", "museumDenis")
        formData.append("folder", "especies")

        axios
          .post(
            `https://museu-storage-api.herokuapp.com/storage/upload`, formData, {headers:{
              "content-type": "multipart/form-data"
            }}).then((result)=>{
              console.log(result.data[0])

              data.image_id = result.data[0].fileName
              data.image_url = result.data[0].url

              console.log(data)
              //my old form here
                // axios
                // .post(
                //   `https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`, data)
                // .then((response) => {
                //   console.log(response);
                //   axios
                //     .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`)
                //     .then((result) => {
                //       setObjectList(result.data);
                //       setModalShow(false);
                //       alert(`${title} adicionado com sucesso`);
                //     });
                // });

            })

  // post default  
    
  };

  useEffect(update, [finalPath]);

  const MyForm = {
    "especies": EspecieForm
  }[finalPath];


  return (
    <div className="container rounded border-secondary bg-light p-4 mt-5">
      <ModalEditItem
        show={modalShow}
        title={title}
        data={unitData}
        handleClose={() => setModalShow(false)}
        content={
          <MyForm
            onSubmit={(data) => handleSave(data)}
            data={unitData}
            title={title}
            handleClose={() => setModalShow(false)}
          />
        }
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
        <table className="table table-striped table-hover mt-4">
          <thead>
            <tr>
            
              <th>Nome Vulgar</th>
              <th>Nome Científico</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {objectList.map((element, index) => {
              return (
                <tr key={index}>
                  <td>
                    {element.nome_comum}
                  </td>
                  <td><i>{element.nome_cientifico}</i></td>
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

export default HandleEspecie;