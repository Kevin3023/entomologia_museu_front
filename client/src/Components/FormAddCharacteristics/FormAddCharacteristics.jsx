import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./FormAddCharacteristics.css";

const FormAddCharacteristics = ({ finalPath, field, title}) => {
  const initialValues = {
    [field]: "",
  };

  const [valores, setValores] = useState([]);


  // useEffect(() => {
  //   axios.get("http://localhost:3001/taxonomia/options").then((res) => {
  //     setValores(res.data);
  //   });
  // }, []);

  let validationSchemaConfig = {
    //[field]: Yup.string().required("Esse valor não pode ser vazio!"),    
  }


  const validationSchema = Yup.object().shape(validationSchemaConfig);

  const onSubmit = (data) => {
    console.log("- - - - - - - -")
    console.log(data)
    console.log("- - - - - - - -")
    axios.post(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`, data).then((response) => {
      console.log(response);
      document.location.reload(true);
    });
  };

  return (
    <>
      <div className="container bg-light mt-5 pt-3">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (          
            <Form>
              {console.log(formik)}
              <label className="mb-1" >Nome {title}</label>
              <br />

              <Field className="form-control mb-3" name={field} placeholder="Insira a caracteristica aqui..." />
              
              <div className="modal-footer">
                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button> */}
                  <button type="submit" className="btn btn-primary">
                    Salvar
                  </button>
                </div>
            </Form>
          )}
        </Formik>

      </div>

    </>
  );
};

export default FormAddCharacteristics;

// field with option
{/* <label className="mb-1">Nome do Pai</label>
            <ErrorMessage name="TaxonomiaId" component="span" />

            <Field className='form-select mb-3' as="select" name="TaxonomiaId">
              {valores.map((value, key) => {
                return (
                  <option key={key} value={value.value.toString()}>
                    {value.label}
                  </option>
                );
              })}
            </Field> */}