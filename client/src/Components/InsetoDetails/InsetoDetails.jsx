import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BugInformation from "../BugInformation/BugInformation";

const InsetoDetails = ({ data }) => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
    // console.log(data)
  }, [data, params]);

  const catchTheInsect = (insect) => {
    // console.log(insect);
    return insect.nome_comum === params.nomeVulgarInseto;
  };

  let exactInsect = data.filter(catchTheInsect);
  const [dataInsect, setDataInsect] = useState(exactInsect[0]);
  return (
    <>
      {/* {console.log(dataInsect)} */}
      <BugInformation data={dataInsect} />
    </>
  );
};

export default InsetoDetails;
