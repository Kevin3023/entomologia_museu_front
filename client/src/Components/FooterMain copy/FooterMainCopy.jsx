import React from "react";
import { Col, Row } from "react-bootstrap";

const FooterMain = () => {
  return (
    <div className="container-fluid">
      <Row className="bg-dark text-white d-flex align-items-center">
        <Col className="text-center py-3" lg={4}>
          <h4>
            Universidade Federal Rural
            <br />
            da Amazônia
          </h4>
          Estr. Principal da Ufra, 2150 - Curió Utinga, Belém - PA
          <br />
          Belém - PA (91) 3205-4081
        </Col>

        <Col className="text-center py-3" lg={4}>
          <h4 className="text-uppercase mb-4">Siga-nos</h4>
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://www.facebook.com/UFRAOficial/"
            rel="noreferrer"
            target="_blank"
          >
            Facebook
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://novo.ufra.edu.br/"
            rel="noreferrer"
            target="_blank"
          >
            Site ufra
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://www.instagram.com/ufraoficial/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </Col>
        <Col className="text-center py-3" lg={4}>
          <h4>
            Museu de Entomologia da Ufra
          </h4>
        </Col>
      </Row>
      <Row className="bg-white text-dark py-1">
        <Col className="text-center" lg={12}>
          <small>Copyright © BSI/UFRA-PA 2022</small>
        </Col>
      </Row>
    </div>
  );
};

export default FooterMain;
