import React, { useEffect, useState } from "react";
import CardJobOffer from "../../components/CardJobOffer";
import SkeletonPage from "../../components/SkeletonPage";
import api from "../../services/api";


const JobOffers = () => {
  const [vagas, setVagas] = useState([]);
  
  async function getVagas() {
    api.defaults.headers.Authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MDYxODEzMzYsInVzcmlkIjoxLCJwcm9maWQiOjF9.iOXiNZShNj1rC3S-FeL7Yz2bzpsE4NxCXfI3_irk5doSbTFQf-Icoy-oCRHBOlMyIiyXOYEBB0Z_AizUw_TiSQ'
    await api.get(`/api/vagas/usuarios/${1}`)
    .then(response => {setVagas(response.data)})
    .catch(err => {
      console.log(err)
      alert("Ops, um erro inesperado aconteceu ao carregas as vagas. :/");
    });
  }
  
  useEffect(() => {
    getVagas();
  }, [])
  
  return (
    <SkeletonPage sidebar={true} footer={true}>
      <h3 className="text-white text-center">Seus jobs cadastrados</h3>
      {vagas.map((vaga) => {
        console.log(vaga)
        return <CardJobOffer key={vaga.id} vaga={vaga}/>
      })}
    </SkeletonPage>
  );
};

export default JobOffers;
