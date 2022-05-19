import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BugInformation from "../BugInformation/BugInformation";

const InsetoDetails = ({ data }) => {
  const params = useParams();

  useEffect(()=>{
    console.log(params)
  })

  const catchTheInsect = (insect) => {
    console.log(insect);
    return insect.nomeVulgar === params.nomeVulgarInseto;
  };

  let exactInsect = data.filter(catchTheInsect);
  let dataInsect = exactInsect[0];

  return (
    <>
      <BugInformation dataInsect={dataInsect} />
    </>
  );
};

export default InsetoDetails;