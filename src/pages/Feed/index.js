import React, { useEffect, useState } from "react";
import CardVaga from "../../components/CardVaga";
import SkeletonPage from "../../components/SkeletonPage";
import Loading from "../../components/Loading";
import api from "../../services/api";

const Feed = () => {
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function getVagas() {
    console.log("running");
    await api.get("api/vagas").then((res) => {
      setVagas([...res.data]);
      setLoading(false);
    });
  
      console.log(vagas);
  }
  useEffect(() => {  
    getVagas()
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <SkeletonPage sidebar={true} footer={false}>
      {vagas.length > 0 ? (
        vagas.map((vaga) => {
          return <CardVaga key={vaga.id} vaga={vaga} />;
        })
      ) : (
        <h3>Ainda não há vagas publicadas...</h3>
      )}
    </SkeletonPage>
  );
};

export default Feed;
