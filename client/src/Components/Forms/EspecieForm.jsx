import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EspecieForm = ({ data, handleClose, onSubmit }) => {
  let relationships = [
    "filos",
    "classes",
    "ordem",
    "familias",
    "generos",
    "antenas",
    "bocas",
    "asas",
    "abdomens",
    "pernas",
    "metamorfoses",
    "comportamentos",
    "habitats",
  ];

  useEffect(() => {
    console.log("Especie form");
    console.log(data);

    // TAXONOMIA

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[0]}`
      )
      .then((result) => {
        setListFiloData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[1]}`
      )
      .then((result) => {
        setListClasseData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[2]}`
      )
      .then((result) => {
        setListOrdemData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[3]}`
      )
      .then((result) => {
        setListFamiliaData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[4]}`
      )
      .then((result) => {
        setListGeneroData(result.data);
      });

    //   MORFOLOGIA

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[5]}`
      )
      .then((result) => {
        setListAntenaData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[6]}`
      )
      .then((result) => {
        setListAparelhoBucalData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[7]}`
      )
      .then((result) => {
        setListAsaData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[8]}`
      )
      .then((result) => {
        setListAbdomenData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[9]}`
      )
      .then((result) => {
        setListPernaData(result.data);
      });

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[10]}`
      )
      .then((result) => {
        setListMetamorfoseData(result.data);
      });

    //   BIOLOGIA

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[11]}`
      )
      .then((result) => {
        setListComportamentoData(result.data);
      });

    // ECOLOGIA

    axios
      .get(
        `https://api-museu-entomologiaufra.herokuapp.com/${relationships[12]}`
      )
      .then((result) => {
        setListHabitatData(result.data);
      });
  }, [data]);

  const [nome_cientifico, setNomeCientifico] = useState(
    data.nome_cientifico || ""
  );
  const [nome_comum, setNomeComum] = useState(data.nome_comum || "");
  const [curiosidades, setCuriosidades] = useState(data.curiosidade || "");


  //   TAXONOMIA
  const [listFiloData, setListFiloData] = useState([]);
  const [listClasseData, setListClasseData] = useState([]);
  const [listOrdemData, setListOrdemData] = useState([]);
  const [listFamiliaData, setListFamiliaData] = useState([]);
  const [listGeneroData, setListGeneroData] = useState([]);

  // MORFOLOGIA
  const [listAntenaData, setListAntenaData] = useState([]);
  const [listAparelhoBucalData, setListAparelhoBucalData] = useState([]);
  const [listAsaData, setListAsaData] = useState([]);
  const [listAbdomenData, setListAbdomenData] = useState([]);
  const [listPernaData, setListPernaData] = useState([]);

  // BIOLOGIA
  const [listMetamorfoseData, setListMetamorfoseData] = useState([]);

  // ECOLOGIA
  const [listComportamentoData, setListComportamentoData] = useState([]);
  const [listHabitatData, setListHabitatData] = useState([]);

  // HANDLE INPUT CHANGES

  const handleInputChangeNomeCientifico = (e) => {
    console.log("***** handleInputChangeNomeCientifico", e.target.value);
    setNomeCientifico(e.target.value);
  };

  const handleInputChangeNomeComum = (e) => {
    console.log("***** handleInputChangeNomeComum", e.target.value);
    setNomeComum(e.target.value);
  };

  const handleInputChangeCuriosidade = (e) => {
    console.log("***** handleInputChangeCuriosidade", e.target.value);
    setCuriosidades(e.target.value);
  };

  const handleData = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const finalData = Object.fromEntries(formData);

    if (data.id) {
      finalData.id = data.id;
    }

    finalData.genero = {
      id: finalData.genero_id,
    };
    finalData.familia = {
      id: finalData.familia_id,
    };
    finalData.ordem = {
      id: finalData.ordem_id,
    };
    finalData.classe = {
      id: finalData.classe_id,
    };
    finalData.filo = {
      id: finalData.filo_id,
    };
    finalData.habitat = {
      id: finalData.habitat_id,
    };
    finalData.metamorfose = {
      id: finalData.metamorfose_id,
    };
    finalData.comportamento = {
      id: finalData.comportamento_id,
    };
    finalData.pernas = {
      id: finalData.perna_id,
    };
    finalData.asas = {
      id: finalData.asa_id,
    };
    finalData.abdomen = {
      id: finalData.abdomen_id,
    };
    finalData.aparelho_bucal = {
      id: finalData.aparelho_bucal_id,
    };
    finalData.antenas = {
      id: finalData.antena_id,
    };

    delete finalData.filo_id; // erasing filo_id because it doesn't exist :)
    delete finalData.classe_id; // erasing classe_id because it doesn't exist :)
    delete finalData.ordem_id; // erasing ordem_id because it doesn't exist :)
    delete finalData.genero_id; // erasing familia_id because it doesn't exist :)
    delete finalData.familia_id; // erasing familia_id because it doesn't exist :)
    delete finalData.habitat_id; // erasing familia_id because it doesn't exist :)
    delete finalData.metamorfose_id; // erasing familia_id because it doesn't exist :)
    delete finalData.comportamento_id; // erasing familia_id because it doesn't exist :)
    delete finalData.perna_id; // erasing familia_id because it doesn't exist :)
    delete finalData.asa_id; // erasing familia_id because it doesn't exist :)
    delete finalData.abdomen_id; // erasing familia_id because it doesn't exist :)
    delete finalData.aparelho_bucal_id; // erasing familia_id because it doesn't exist :)
    delete finalData.antena_id; // erasing familia_id because it doesn't exist :)

    console.log("*** handle submit", finalData);
    window.confirm("deseja salvar/alterar o item ?")
      ? onSubmit(finalData) /*function that send the data */
      : console.log("nhew");
  };

  return (
    <>
      <form onSubmit={handleData}>
        <label className="form-label fs-5">Nome científico</label>
        <input
          className="form-control mb-3"
          type="text"
          name="nome_cientifico"
          placeholder={`Inserir gênero aqui`}
          onChange={handleInputChangeNomeCientifico}
          value={nome_cientifico}
        />

        <label className="form-label fs-5">Nome vulgar</label>
        <input
          className="form-control mb-3"
          type="text"
          name="nome_comum"
          placeholder={`Inserir gênero aqui`}
          onChange={handleInputChangeNomeComum}
          value={nome_comum}
        />

        <label className="form-label fs-5">Curiosidade</label>
        <textarea
          className="form-control mb-3"
          rows="4" cols="50"
          type="text"
          name="curiosidades"
          placeholder={`Inserir curiosidade aqui`}
          onChange={handleInputChangeCuriosidade}
          value={curiosidades}
        />

        {/* TAXONOMIA */}
        <label className="form-label fs-5">Filo</label>
        <select name="filo_id" className="form-select mb-3">
          {listFiloData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Classe</label>
        <select name="classe_id" className="form-select mb-3">
          {listClasseData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Ordem</label>
        <select name="ordem_id" className="form-select mb-3">
          {listOrdemData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Família</label>
        <select name="familia_id" className="form-select mb-3">
          {listFamiliaData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Gênero</label>
        <select name="genero_id" className="form-select mb-3">
          {listGeneroData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        {/* MORFOLOGIA */}

        <label className="form-label fs-5">Antena</label>
        <select name="antena_id" className="form-select mb-3">
          {listAntenaData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Aparelho Bucal</label>
        <select name="aparelho_bucal_id" className="form-select mb-3">
          {listAparelhoBucalData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Asa</label>
        <select name="asa_id" className="form-select mb-3">
          {listAsaData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Abdomen</label>
        <select name="abdomen_id" className="form-select mb-3">
          {listAbdomenData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Perna</label>
        <select name="perna_id" className="form-select mb-3">
          {listPernaData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        {/* BIOLOGIA */}
        <label className="form-label fs-5">Metamorfose</label>
        <select name="metamorfose_id" className="form-select mb-3">
          {listMetamorfoseData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        {/* ECOLOGIA */}
        <label className="form-label fs-5">Comportamento</label>
        <select name="comportamento_id" className="form-select mb-3">
          {listComportamentoData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <label className="form-label fs-5">Habitat</label>
        <select name="habitat_id" className="form-select mb-3">
          {listHabitatData.map((value, key) => {
            return (
              <option key={key} value={value.id}>
                {value.nome}
              </option>
            );
          })}
        </select>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Modal.Footer>
      </form>
    </>
  );
};

export default EspecieForm;
