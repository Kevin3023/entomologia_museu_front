import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import HandleButtons from "../HandleButtons/HandleButtons";

const MetamorfosePage = ({
  finalPath,
  title,
  field1,
  field2,
  descriptionTitle,
}) => {
  const initialValues = {
    field: "",
  };

  const [objectList, setObjectList] = useState([]);

  const update = () => {
    axios
      .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`)
      .then((result) => {
        setObjectList(result.data);
        // console.log(result.data);
      });
  };

  useEffect(update, [finalPath]);

  let validationSchemaConfig = {
    //[field]: Yup.string().required("Esse valor não pode ser vazio!"),
  };

  const validationSchema = Yup.object().shape(validationSchemaConfig);

  const onSubmit = (data) => {
    axios
      .post(
        `https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`,
        data
      )
      .then((response) => {
        console.log(response);
        axios
          .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`)
          .then((result) => {
            setObjectList(result.data);
          });
      });
  };

  return (
    <div className="container rounded border-secondary bg-light p-4 mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {/* {console.log(formik)} */}

            <label className="mb-1">Metamorfose</label>
            <Field
              className="form-control mb-3"
              name={field1}
              placeholder="Insira a metamorfose aqui..."
             />

            <label className="mb-1">Descrição</label>
            <br />
            <Field
              className="form-control mb-3"
              name={field2}
              placeholder="Insira a descrição aqui..."
            />

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>{title}</th>
            <th>{descriptionTitle}</th>
          </tr>
        </thead>
        {/* <tbody>
                <tr>
                    <td>tipo metamorfose</td>
                    <td>descricao metamorfose</td>
                </tr>
            </tbody> */}
        <tbody>
          {objectList.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.nome}</td>
                <td>{element.descricao}</td>
                <td className="d-flex justify-content-end">
                  <HandleButtons
                    finalPath={finalPath}
                    idItem={element.id}
                    update={() => update()}
                    title={title}
                    // field={field} -> special case
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MetamorfosePage;
