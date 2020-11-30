import React, { useEffect, useState } from "react";
import CardVaga from "../../components/CardVaga";
import SkeletonPage from "../../components/SkeletonPage";
import Loading from "../../components/Loading";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

const Vagas = () => {
  let { status, tipoUsuario } = useParams();
  let {user} = useAuth();
  const [vagas, setVagas] = useState([]);
  
  const titulo = () => {
    return <p className="text-light text-center">{tipoUsuario} - Vagas {status}</p>
  }
  
  useEffect(() => {
    async function getVagas(){
      const response = await api.get(`/api/vagas/listByStatus?statusVaga=${status}`)
        .then(response => setVagas(response.data) )
        .catch(err => {
          console.log(err); 
          return [];
        });
      return response;
    }
    return setVagas(getVagas());
  }, [status])
  
  return (
    <SkeletonPage sidebar={true} footer={false}>
      {titulo()};
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

export default Vagas;
