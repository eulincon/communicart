import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import SkeletonPage from '../../components/SkeletonPage';
import VagaDetails from '../../components/VagaDetails';
import TableCandidatura from '../../components/VagaDetails/TableCandidatura';
import api from '../../services/api';

const CandidatosVagaPage = () => {
  const [loading, setLoading] = useState(true);
  const [vaga, setVaga] = useState({});
  let { id } = useParams();

  useEffect(() => {
    async function carregarVaga(vagaId) {
      await api
        .get(`/api/vagas/${vagaId}`)
        .then((res) => {
          console.log(res.data)
          setVaga({ ...res.data });
          setLoading(false);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            console.log(err)
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

  return <SkeletonPage sidebar={true} footer={true}>
    <h1 className="text-center text-white">Detalhes da vaga</h1>
    <VagaDetails vaga={vaga} />
    <br/>
    <hr style={{backgroundColor:'white'}}/>
    <h3 className="text-light text-center">Candidatos</h3>
    <TableCandidatura idVaga={vaga.id}/>
</SkeletonPage>
}

export default CandidatosVagaPage;