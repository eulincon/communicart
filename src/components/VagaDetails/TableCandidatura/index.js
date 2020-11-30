import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

const TableCandidatura = ({idVaga}) => {
  const [candidaturas, setCandidaturas] = useState([]);
  useEffect(()=>{
    async function getCandidaturasPorVaga(){
      await api.get(`/api/vagas/${idVaga}/candidatos`)
        .then(response => {setCandidaturas(response.data)})
        .catch(err => {
          console.log(err.data)
          alert('Ops, ocorreu um erro ao acessar candidaturas por vaga. :/')
        })
    }
    getCandidaturasPorVaga();
  }, []);

  return (
    <>
    {candidaturas.length === 0 ? <p className="text-light text-center">Nenhuma candidatura no momento</p> : (
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {candidaturas.map((perfil, index) => {
            let i = 1;
            return(
              <tr key={index}>
                <th scope="row">{i++}</th>
                <td>{perfil.pf.nome}</td>
                <td>
                  <Link to={`/contratante/vagas/${idVaga}/candidaturas/${perfil.id}`} className="btn btn-primary btn-sm">Visualizar</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )}
    </>
  )
}

export default TableCandidatura;