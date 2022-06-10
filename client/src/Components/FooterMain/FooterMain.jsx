import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LogoUfra from "../../assets/img/Brasao_ufra.png"

const FooterMain = () => {
    return  <>
         <Row className="bg-dark text-white d-flex align-items-center">
    <Col className="text-center py-3" lg={4}>
      <h4>
        Secretaria de Segurança
        <br />
        Pública e Defesa Social
      </h4>
      R. Arcipreste Manoel Teodoro, 305.
      <br />
      Belém - PA (91) 3184-2500
    </Col>

    <Col className="text-center py-3" lg={4}>
      <h4 className="text-uppercase mb-4">Siga-nos</h4>
      <a
        className="btn btn-outline-light btn-social mx-1"
        href="https://www.facebook.com/Seguppa"
        rel="noreferrer"
        target="_blank"
      >
icone
      </a>
      <a
        className="btn btn-outline-light btn-social mx-1"
        href="http://www.twitter.com/seguppara"
        rel="noreferrer"
        target="_blank"
      >
icone      </a>
      <a
        className="btn btn-outline-light btn-social mx-1"
        href="http://www.instagram.com/segup.pa"
        rel="noreferrer"
        target="_blank"
      >
icone      </a>
    </Col>
    <Col className="text-center py-3" lg={4}>
      <h4>
        Eleições do Sistema Estadual de Segurança Pública e Defesa Social
      </h4>
    </Col>
  </Row>
  <Row className="bg-white text-dark py-1">
    <Col className="text-center" lg={12}>
      <small>Copyright © BSI/UFRA-PA 2022</small>
    </Col>
  </Row>
    
    </>

}
 
export default FooterMain;
