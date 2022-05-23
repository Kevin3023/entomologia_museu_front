import React from "react";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./FormAddCharacteristics.css";

const FormAddCharacteristics = ({ finalPath, field, title, setObjectList}) => {
  const initialValues = {
    [field]: "",
  };

  let validationSchemaConfig = {
    //[field]: Yup.string().required("Esse valor não pode ser vazio!"),    
  }


  const validationSchema = Yup.object().shape(validationSchemaConfig);

  const onSubmit = (data) => {
    console.log("form single")

    axios.post(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`, data).then((response) => {
      console.log(response);
      axios
      .get(`https://api-museu-entomologiaufra.herokuapp.com/${finalPath}`)
      .then((result) => {
        setObjectList(result.data);
      });
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
              {/* {console.log(formik)} */}
              <label className="mb-1" >{title}</label>
              <br />

              <Field className="form-control mb-3" name={field} placeholder={`Inserir ${title} aqui...`} />
              
              <div className="modal-footer">
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

