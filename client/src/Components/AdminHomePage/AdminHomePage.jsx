import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, NavbarBrand } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Brasao_ufra.png";
import DefaultTutorialPageAdmin from "../DefaultTutorialPageAdmin/DefaultTutorialPageAdmin";
import HandleCharacteristcsPageAdmin from "../HandleCharacteristcsPageAdmin/HandleCharacteristcsPageAdmin";
import HandleEspecie from "../HandleEspecie/HandleEspecie";

const AdminHomePage = () => {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   axios.get("https://api-museu-entomologiaufra.herokuapp.com/filos").then((result)=>{
  //     setTesteData(result.data)
  //     console.log(result.data)
  //   })
  // },[])

  // const forms = {
  //   filo: {
  //     finalPath:"filos",
  //     field:"nome",
  //     title:"Filo"
  //   },
  //   classe: {
  //     finalPath:"classes",
  //     field:"nome",
  //     title:"Classe",
  //     fields:true,
  //     finalRelationshipPath:"filos",
  //     titleRelationship:"Filo",
  //     nameRelationship:"filo.id"
  //   },
  // }

  const [characteristcsStatus, setCharacteristcsStatus] = useState("default");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Container fluid>
          <img src={Logo} width="50px" height="50px" alt="Logo da Ufra" />
          <NavbarBrand className="ms-2" href="/">
            Museu de Entomologia
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/admin"
                  onClick={() => {
                    setCharacteristcsStatus("dafault");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Taxonomia
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("filo");
                      }}
                    >
                      Filo
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("classe");
                      }}
                    >
                      Classe
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("ordem");
                      }}
                    >
                      Ordem
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("familia");
                      }}
                    >
                      Familia
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("genero");
                      }}
                    >
                      Gênero
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("especie");
                      }}
                    >
                      Espécie
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Morfologia
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("antena");
                      }}
                    >
                      Antena
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("aparelhoBucal");
                      }}
                    >
                      Aparelho Bucal
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("asa");
                      }}
                    >
                      Asa
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("abdomen");
                      }}
                    >
                      Abdomen
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("perna");
                      }}
                    >
                      Perna
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Biologia
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("metamorfose");
                      }}
                    >
                      Metamorfose
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ecologia
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("comportamento");
                      }}
                    >
                      Comportamento
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCharacteristcsStatus("habitat");
                      }}
                    >
                      Habitat
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Container>
      </nav>

      {/* {characteristcsStatus && <HandleCharacteristcsPageAdmin {...forms[characteristcsStatus]} />} */}

      {characteristcsStatus == "default" && <DefaultTutorialPageAdmin />}

      {characteristcsStatus == "filo" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"filos"}
          field={"nome"}
          title={"Filo"}
          fields={false}
          fields_={[
            {
              label: "Nome",
              name: "nome",
              type: "text",
            },
          ]}
        />
      )}

      {characteristcsStatus == "classe" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"classes"}
          title={"Classe"}
          fields_={[
            {
              label: "Nome",
              name: "nome",
              type: "text",
            },
            {
              label: "Filo",
              name: "filo_id",
              type: "select",
              path: "filos",
            },
          ]}
        />
      )}

      {characteristcsStatus == "familia" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"familias"}
          title={"Família"}
        />
      )}

      {characteristcsStatus == "genero" && (
        <HandleCharacteristcsPageAdmin finalPath={"generos"} title={"Gênero"} />
      )}

      {characteristcsStatus == "antena" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"antenas"}
          field={"nome"}
          title={"Antena"}
          fields={false}
        />
      )}

      {characteristcsStatus == "aparelhoBucal" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"bocas"}
          field={"nome"}
          title={"Aparelho Bucal"}
          fields={false}
        />
      )}

      {characteristcsStatus == "asa" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"asas"}
          field={"nome"}
          title={"Asa"}
          fields={false}
        />
      )}

      {characteristcsStatus == "abdomen" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"abdomens"}
          field={"nome"}
          title={"Abdomen"}
          fields={false}
        />
      )}

      {characteristcsStatus == "perna" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"pernas"}
          field={"nome"}
          title={"Perna"}
          fields={false}
        />
      )}

      {characteristcsStatus == "metamorfose" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"metamorfoses"}
          title={"Metamorfose"}
          fields_={[
            {
              label: "Nome",
              name: "nome",
              type: "text",
            },
            {
              label: "Filo",
              name: "filo_id",
              type: "select",
              path: "filos",
            },
          ]}
        />
      )}

      {characteristcsStatus == "ordem" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"ordem"}
          title={"Ordem"}
          descriptionTitle={"Descrição"}
          fields_={[
            {
              label: "Nome",
              name: "nome",
              type: "text",
            },
            {
              label: "Filo",
              name: "filo_id",
              type: "select",
              path: "filos",
            },
          ]}
        />
      )}

      {characteristcsStatus == "comportamento" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"comportamentos"}
          field={"nome"}
          title={"Comportamento"}
          fields={false}
        />
      )}

      {characteristcsStatus == "habitat" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"habitats"}
          field={"nome"}
          title={"Habitat"}
          fields={false}
        />
      )}

      {characteristcsStatus == "especie" && (
        <HandleEspecie
          finalPath={"especies"}
          title={"Espécie"}
        />
      )}

      {/* {characteristcsStatus == "especie" && <AddAndViewInsectPage />} */}
    </>
  );
};

export default AdminHomePage;
