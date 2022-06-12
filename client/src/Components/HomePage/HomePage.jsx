import React, { useEffect } from "react";
import FormSearchBug from "../FormSearchBug/FormSearchBug";
import NavMain from "../NavMain/NavMain";

import ListEspecies from "../ListEspecies/ListEspecies";
import FooterMain from "../FooterMain/FooterMain";
import { useState } from "react";


const HomePage = ({
  handleSubmit,
  handleInputChange,
  inputValue,
  setInputValue,
  data,
}) => {

  //    if exists data in data, the component BugInformation is rendered
  let validationData = data > 0


  return (
    <>
      <NavMain />
      <FormSearchBug
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        setInputValue={setInputValue}
      />
      {data.length ? <ListEspecies data={data} /> : <div className="container bg-light mt-5"><h1 className="text-center">Empty Content</h1></div>}

      <FooterMain/>

    </>
  );
};

export default HomePage;
