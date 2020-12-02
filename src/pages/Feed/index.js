import React, { useEffect, useState } from "react";
import CardVaga from "../../components/CardVaga";
import SkeletonPage from "../../components/SkeletonPage";
import Loading from "../../components/Loading";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

const Feed = () => {
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { signed } = useAuth();

  useEffect(() => {
    async function getVagas() {
      if (signed) {
        await api
          .get("api/vagas/listByStatus?statusVaga=ATIVA")
          .then((res) => {
            setVagas([...res.data]);
            setLoading(false);
          })
          .catch((err) => {
            if (!signed) {
              alert(
                "Ops, um erro inesperado aconteceu ao carregas as vagas. :/"
              );
            }
          });
      }
    }

    getVagas();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <SkeletonPage sidebar={true} footer={false}>
      <div className="text-light d-flex justify-content-center">
        <h2>Feed de vagas disponíveis</h2>
      </div>
      <hr className="bg-light"/>
      {vagas.length > 0 ? (
        vagas.map((vaga) => {
          return <CardVaga key={vaga.id} vaga={vaga} />;
        })
      ) : (
        <h3 className="text-light">Ainda não há vagas publicadas...</h3>
      )}
    </SkeletonPage>
  );
};

export default Feed;
