import React from "react";
import { Modal } from "react-bootstrap";

const ModalEditItem = (props) => {

  return (
    <Modal backdrop="static" show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        {/* {console.log(props.data)} */}
        <Modal.Title>Adicionar / Editar {props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {props.content}
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditItem;
