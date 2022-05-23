import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Brasao_ufra.png";
import HandleCharacteristcsPageAdmin from "../HandleCharacteristcsPageAdmin/HandleCharacteristcsPageAdmin";

const AdminHomePage = () => {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   axios.get("https://api-museu-entomologiaufra.herokuapp.com/filos").then((result)=>{
  //     setTesteData(result.data)
  //     console.log(result.data)
  //   })
  // },[])

  const [characteristcsStatus, setCharacteristcsStatus] = useState("");


  return (
    <>
      {/* {testeData.map((element, index) => {
        return (
          <h1 className="text-white" key={index} >{element.nome}</h1>
        )
      })} */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={Logo} width="50px" height="50px" alt="Logo da Ufra" />
          <a className="navbar-brand ms-2" href="/">
            Museu de Entomologia
          </a>
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
                <a className="nav-link" aria-current="page" href="/admin">
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
                    <a className="dropdown-item" href="#">
                      Antena
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Aparelho Bucal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Asa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Abdomen
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
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
                    <a className="dropdown-item" href="#">
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
                    <a className="dropdown-item" href="#">
                      Comportamento
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Habitat
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* {showRightComponent()} */}

      {characteristcsStatus === "filo" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"filos"}
          field={"nome"}
          title={"Filo"}
          fields={false}
        />
      )}

      {characteristcsStatus === "classe" && (
        <HandleCharacteristcsPageAdmin
          finalPath={"classes"}
          field={"nome"}
          title={"Classe"}
          fields={true}
          finalRelationshipPath={"filos"}
          titleRelationship={"Filo"}
        />
      )}



    </>
  );
};

export default AdminHomePage;
