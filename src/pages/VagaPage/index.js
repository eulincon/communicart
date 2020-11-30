import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import SkeletonPage from "../../components/SkeletonPage";
import VagaDetails from "../../components/VagaDetails";
import Loading from "../../components/Loading";
import { useAuth } from "../../contexts/auth";
import TableCandidatura from "../../components/VagaDetails/TableCandidatura";

const VagaPage = () => {
  const [loading, setLoading] = useState(true);
  const [vaga, setVaga] = useState({});
  let { id } = useParams();
  const {user} = useAuth();

  useEffect(() => {
    async function carregarVaga(vagaId) {
      api.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "@RNAuth:token"
      )}`;
      await api
        .get(`/api/vagas/${vagaId}`)
        .then((res) => {
          setVaga({ ...res.data });
          setLoading(false);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setLoading(false);
            setVaga(null);
          }
        });
    }
    carregarVaga(id);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <SkeletonPage sidebar={true} footer={true}>
      <h1 className="text-center text-white">Detalhes da vaga</h1>
      <VagaDetails vaga={vaga} />
      {user.id === vaga.perfilId ? (
        <>
          <br/><hr style={{backgroundColor:'white'}}/>
          <h3 className="text-light text-center">Candidatos</h3>
          <TableCandidatura idVaga={vaga.id}/>
        </>
      ) : null}
      
    </SkeletonPage>
  );
};

export default VagaPage;
