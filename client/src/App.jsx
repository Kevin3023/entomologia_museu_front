import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./Components/AdminHomePage/AdminHomePage";
import HomePage from "./Components/HomePage/HomePage";
import CuriosidadesPage from "./Components/CuriosidadesPage/CuriosidadesPage";
import InsetoDetails from "./Components/InsetoDetails/InsetoDetails";
import LoginPage from "./Components/LoginPage/LoginPage";

const App = () => {
  useEffect( () => {
    axios.get("https://api-museu-entomologiaufra.herokuapp.com/especies").then((result)=>{
      setEspecieData(result.data)
    })
  }, []);

  // value from user
  const [inputValue, setInputValue] = useState("");

  //data from backend
  const [especieData, setEspecieData] = useState([])

  //data of inputSeach
  const [dataSearch, setDataSearch] = useState([])

  //catch the value from the form that contain the input user
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    console.log(`chave: ${Object.keys(data)}, valor: ${Object.values(data)}`);
    setDataSearch(especieData.filter((element, value)=> Object.values(data) == element.nome_comum))
    dataSearch.length ? console.log("ok") : alert("Inseto não encontrado :(")
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
              data={especieData}
              dataSearch={dataSearch}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/curiosidades" element={<CuriosidadesPage data={especieData} />}
        />
        <Route
          path="/:nomeVulgarInseto"
          element={<InsetoDetails data={especieData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
