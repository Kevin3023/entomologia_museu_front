import axios from "axios";
import React, { useEffect, useState } from "react";
import FormAddCharacteristics from "../FormAddSingleCharacteristic/FormAddSingleCharacteristic";
import HandleButtons from "../HandleButtons/HandleButtons";
const HandleCharacteristcsPage = ({ finalPath, field, title }) => {
  const [objectList, setObjectList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`)
      .then((result) => {
        setObjectList(result.data);
        console.log(result.data);
      });
  }, [objectList]);

  return (
    <div className="container rounded border-secondary bg-light p-4 mt-5">
      <FormAddCharacteristics
        finalPath={finalPath}
        field={field}
        title={title}
        setObjectList={setObjectList}
      />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {objectList.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element.nome}</td>
            <td className="d-flex justify-content-end">
              <HandleButtons finalPath={finalPath} idItem={element.id}/>
            </td>
          </tr>
        )
      })}


        </tbody>
      </table>
    </div>
  );
};

export default HandleCharacteristcsPage;