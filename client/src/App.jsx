import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./Components/AdminHomePage/AdminHomePage";
import HomePage from "./Components/HomePage/HomePage";
import CuriosidadesPage from "./Components/CuriosidadesPage/CuriosidadesPage";
import InsetoDetails from "./Components/InsetoDetails/InsetoDetails";
import LoginPage from "./Components/LoginPage/LoginPage";
import CharacteristcPage from "./Components/CharacteristcPage/CharacteristcPage";

const App = () => {
  // useEffect(() => {
  //   axios.get("https://api-museu-entomologiaufra.herokuapp.com/abdomens").then((response) => {
  //     console.log(response.data);
  //     setData(response.data);
  //   });

  //   console.log(data)

  // }, []);

  // value from user
  const [inputValue, setInputValue] = useState("");

  //data from backend
  const [data, setData] = useState([
    {
      nome_comum: "Louva Deus",
      nome_cientifico: "Nome cientifico Louva Deus",
      abdomen: "abdomen louva Deus",
      asa: "asa louva Deus",
      perna: "perna louva Deus",
      aparelho_bucal: "aparelho bucal louva Deus",
      antena: "antena louva Deus",
      metamorfose: "metamorfose louva Deus",
      comportamento: "comportamento louva Deus",
      habitat: "habitat louva Deus",
      filo: "filo louva Deus",
      classe: "Insecta louva Deus",
      ordem: "ordem louva Deus",
      familia: "familia louva Deus",
      genero: "genero louva Deus",
      curiosidade: "é um inseto que curte louvar a Deus",
    },
    {
      nome_comum: "Besourinho",
      nome_cientifico: "nome cientifico Besourinho",
      abdomen: "abdomen Besourinho",
      asa: "asa Besourinho",
      perna: "perna Besourinho",
      aparelho_bucal: "aparelho bucal Besourinho",
      antena: "antena Besourinho",
      metamorfose: "metamorfose Besourinho",
      comportamento: "comportamento Besourinho",
      habitat: "habitat Besourinho",
      filo: "filo Besourinho",
      classe: "Insecta Besourinho",
      ordem: "ordem Besourinho",
      familia: "familia Besourinho",
      genero: "genero Besourinho",
      curiosidade:
        "inseto de boa com a vida que curte batalhar com outros insetos",
    },
    {
      nome_comum: "Cavalo do Cao",
      nome_cientifico: "nome cientifico cavalo do cao",
      abdomen: "abdomen Cavalo do Cao",
      asa: "asa Cavalo do Cao",
      perna: "perna Cavalo do Cao",
      aparelho_bucal: "aparelho bucal Cavalo do Cao",
      antena: "antena Cavalo do Cao",
      metamorfose: "metamorfose Cavalo do Cao",
      comportamento: "comportamento Cavalo do Cao",
      habitat: "habitat Cavalo do Cao",
      filo: "filo Cavalo do Cao",
      classe: "Insecta Cavalo do Cao",
      ordem: "ordem Cavalo do Cao",
      familia: "familia Cavalo do Cao",
      genero: "genero Cavalo do Cao",
      curiosidade:
        "inseto desgraçado, não é atoa que o nome é cavalo do cão, capaz de matar um boi",
    },
  ]);


  //catch the value from the form that contain the input user
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    console.log(`chave: ${Object.keys(data)}, valor: ${Object.values(data)}`);
    setInputValue("");
  };

  //function for listen the input user
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={
            <HomePage
              inputValue={inputValue}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              setInputValue={setInputValue}
              data={data}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/curiosidades" element={<CuriosidadesPage data={data} />}
        />
        <Route
          path="*"
          element={
            <main>
              <h1>Página não encontrada</h1>
            </main>
          }
        />
        {/* problem in the routes */}
        <Route
          path="/:nomeVulgarInseto"
          element={<InsetoDetails data={data} />}
        />
        {/* <Route
          path="/:characteristPath"
          element={<CharacteristcPage />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
