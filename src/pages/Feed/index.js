import React, { useEffect, useState } from "react";
import CardVaga from "../../components/CardVaga";
import SkeletonPage from "../../components/SkeletonPage";
import api from "../../services/api";

const Feed = () => {
  const [vagas, setVagas] = useState([]);
  const [setLoading] = useState(true);
  
  useEffect(() => {
    
      async function getVagas() {
        console.log("running");
        await api.get("api/vagas").then((res) => {
          setVagas([...res.data]);
          setLoading(false);
        });
        console.log(vagas);
      }
    
    getVagas()
  }, [setLoading, vagas]);

  return (
    <SkeletonPage sidebar={true} footer={false}>
      {vagas.map((vaga) => {
        return <CardVaga key={vaga.id} vaga={vaga} />;
      })}
    </SkeletonPage>
  );
};

export default Feed;
