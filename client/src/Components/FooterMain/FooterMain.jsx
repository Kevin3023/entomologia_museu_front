import React from "react";
import { Col, Row } from "react-bootstrap";
import './styles.css';

const FooterMain = () => {
  return (
    <div className="container-fluid">
      <Row className="backg d-flex align-items-center">
        <Col className="text-center py-3 font" lg={4}>
          <h4 className="font">
            Universidade Federal Rural
            <br />
            da Amazônia
          </h4>
          Estr. Principal da Ufra, 2150 - Curió Utinga, Belém - PA
          <br />
          Belém - PA (91) 3205-4081
        </Col>

        <Col className="text-center py-3" lg={4}>
          <h4 className="text-uppercase mb-4 font">Siga-nos</h4>
          <a
            className="btn btn-outline-light btn-social mx-1 btn-midias"
            href="https://www.facebook.com/UFRAOficial/"
            rel="noreferrer"
            target="_blank"
          >
            Facebook
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1 btn-midias"
            href="https://novo.ufra.edu.br/"
            rel="noreferrer"
            target="_blank"
          >
            Site ufra
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1 btn-midias"
            href="https://www.instagram.com/ufraoficial/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </Col>
        <Col className="text-center py-3" lg={4}>
          <h4 className="font">
            Museu de Entomologia da Ufra
          </h4>
        </Col>
      </Row>
      <Row className="backg text-dark py-1">
        <Col className="text-center font" lg={12}>
          <small>Copyright © BSI/UFRA-PA 2022 orgulhosamente criado por Kevin Gomes, John Moura e Denis Junior</small>
        </Col>
      </Row>
    </div>
  );
};

export default FooterMain;
