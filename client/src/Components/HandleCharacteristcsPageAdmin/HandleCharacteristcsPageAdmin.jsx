import axios from "axios";
import React, { useEffect, useState } from "react";
import FormAddSingleCharacteristic from "../FormAddSingleCharacteristic/FormAddSingleCharacteristic";
import FormAddTwoCharacteristics from "../FormAddTwoCharacteristcs/FormAddTwoCharacteristcs";
import HandleButtons from "../HandleButtons/HandleButtons";

const HandleCharacteristcsPage = ({
  finalPath,
  field,
  title,
  fields,
  titleRelationship,
  finalRelationshipPath,
  nameRelationship,
  tableName
}) => {


  const [objectList, setObjectList] = useState([]);
  const [dataList, setDataList] = useState([])

  const update = () => {
    axios
      .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`)
    .then((result) => {
      setObjectList(result.data);
    });
    
  }

  useEffect(update, [finalPath]);

  return (
    <>
      {fields ? (
        <div className="container rounded border-secondary bg-light p-4 mt-5">
          <FormAddTwoCharacteristics
            finalPath={finalPath}
            field={field}
            title={title}
            setObjectList={setObjectList}
            titleRelationship={titleRelationship}
            nameRelationship={nameRelationship}
            finalRelationshipPath={finalRelationshipPath}
          />
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>{titleRelationship}</th>
              </tr>
            </thead>
            <tbody>
              {objectList.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element.nome}</td>
                    <td>{element[tableName].nome}</td>
                    <td className="d-flex justify-content-end">
                      <HandleButtons
                        finalPath={finalPath}
                        idItem={element.id}
                        update={() => update()}
                        title={title}
                        field={field}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="container rounded border-secondary bg-light p-4 mt-5">
          <FormAddSingleCharacteristic
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
                      <HandleButtons
                        finalPath={finalPath}
                        idItem={element.id}
                        update={() => update()}
                        title={title}
                        field={field}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default HandleCharacteristcsPage;
