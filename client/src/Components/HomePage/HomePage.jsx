import React from "react";
import FormSearchBug from "../FormSearchBug/FormSearchBug";
import NavMain from "../NavMain/NavMain";

import ListEspecies from "../ListEspecies/ListEspecies";
import FooterMain from "../FooterMain/FooterMain";

const HomePage = ({
  handleSubmit,
  handleInputChange,
  inputValue,
  setInputValue,
  data,
}) => {
  //    if exists data in data, the component BugInformation is rendered
  let validationData = data.length;

  return (
    <>
      <NavMain />
      <FormSearchBug
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        setInputValue={setInputValue}
      />
      {validationData ? <ListEspecies data={data} /> : <div></div>}

      <FooterMain/>

    </>
  );
};

export default HomePage;
