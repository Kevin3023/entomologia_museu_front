import React from 'react'

const AddAndViewInsectPage = () => {
    return (
        <div className="container rounded border-secondary bg-light p-4 mt-5">
        
        alou
        {/* <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form> */}
              {/* {console.log(formik)} */}
  
              {/* <label className="mb-1">Metamorfose</label>
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
        </Formik> */}
  
        {/* <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>{title}</th>
              <th>{descriptionTitle}</th>
            </tr>
          </thead> */}
          {/* <tbody>
                  <tr>
                      <td>tipo metamorfose</td>
                      <td>descricao metamorfose</td>
                  </tr>
              </tbody> */}
          {/* <tbody>
            {objectList.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.tipo_metamorfose}</td>
                  <td>{element.descricao_meta}</td>
                  <td className="d-flex justify-content-end">
                    <HandleButtons
                      finalPath={finalPath}
                      idItem={element.id}
                      update={() => update()}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </div>
    );
}
 
export default AddAndViewInsectPage;