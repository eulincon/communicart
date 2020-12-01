import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { BiUserCircle } from 'react-icons/bi'
import SkeletonPage from "../../components/SkeletonPage";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const UserProfile = () => {
  const {id, perfilId} = useParams();
  const [proposta, setProposta] = useState([]);
  const [perfil, setPerfil] = useState([]);
  const [loading, setLoading] = useState(true);
  const [haServicos, setHaServicos] = useState(false);

  const naoHaServicos = () => {
    if(perfil.servicos.design === false &&
      perfil.servicos.edicao === false &&
      perfil.servicos.fotografia === false &&
      perfil.servicos.ilustracao === false &&
      perfil.servicos.redacao === false
      ){
        return true
      } else {
        return false
      }
  }
  
  useEffect(() => {
    console.log('primeiro useEffect')
    async function getProposta(){
      // console.log(`url /api/vagas/${id}/candidaturas/${perfilId}`)
      await api.get(`/api/vagas/${id}/candidaturas/${perfilId}`)
      .then(response => {
        setProposta(response.data);
        getPerfil(response.data.id)
      })
      .catch(err => {
        alert('Ops! Ocorreu um erro ao obter os dados da proposta.')
        console.log(err.response.data);
      });
    }
    async function getPerfil(idPerfil){
      // console.log(`url /api/vagas/candidaturas/${proposta.id}/perfilCandidato`)
      await api.get(`/api/vagas/candidaturas/${idPerfil}/perfilCandidato`)
      .then(response => {
        setPerfil(response.data)
        setLoading(false)
      })
      .catch(err => {
        alert('Ops! Ocorreu um erro ao obter os dados do perfil.')
        console.log(err.response.data)
      });
    }
    getProposta();
    },[])
  
  function socialMediaLink(midia) {
    const site = midia[0];
    const link = midia[1];
    if (site === "facebook") {
      return (
        <a href={`https://${link}`} target="_blank" rel="noreferrer" className="social-media-link">
          <FaFacebookSquare size={36} />
        </a>
      );
    } else if (site === "twitter") {
      return (
        <a href={`https://${link}`} target="_blank" rel="noreferrer" className="social-media-link">
          <FaTwitterSquare size={36} />
        </a>
      );
    } else if (site === "instagram") {
      return (
        <a href={`https://${link}`} target="_blank" rel="noreferrer" className="social-media-link">
          <FaInstagramSquare size={36} />
        </a>
      );
    } else if (site === "linkedin") {
      return (
        <a href={`https://${link}`} target="_blank" rel="noreferrer" className="social-media-link">
          <FaLinkedin size={36} />
        </a>
      );
    }
  }

  if(loading){
    return (<Loading/>)
  }else{
    return (
      <SkeletonPage footer={true} sidebar={true}>
        {/* {console.log('proposta', proposta)} */}
        {console.log('perfil', perfil)}
        <div className="row">
          <div className="col-sm-3 img-container d-flex justify-content-center align-content-center">
            {/* <img
              src=""
              alt="imagem de perfil do usuário">
            </img> */}
            <BiUserCircle className="img-round w-100 text-light" size={170}/>
          </div>
          <div className="col-sm-9 text-white">
          {perfil.pf ? <h1>{perfil.pf.nomeCompleto}</h1> : <h1>{perfil.pj.nomeFantasia}</h1>}
            <h4>Tipo de freelancer: {perfil.bio ? 'Pessoa Física' : 'Pessoa Jurídica'}</h4>
            <h4>Bio:</h4>
            <p>{perfil.bio}</p>
            <div className="text-white">
              <span>Website: </span><a href={perfil.website} className="text-white" target="_blank" rel="noreferrer">{perfil.website}</a>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-white servicos">
          <h4>Serviços oferecidos:</h4>
          <ul className="ml-5">
          {Object.entries(perfil.servicos).filter(a => a[1] === true).map(a => (<li>{a[0]}</li>))}
          {naoHaServicos() ? (<p>Não há serviços cadastrados</p>) : null}
          </ul>
        </div>
        <hr className="bg-white"/>
        <div className="text-white">
          <h4>Interesses:</h4>
          {perfil.interesses}
        </div>
        <hr className="bg-white" />
        <div className="midias-sociais text-white">
          <h4>Midias sociais</h4>
          <div className="links">
            {Object.entries(perfil.midiasSociais).filter(a => a[0] !== 'id').filter(a => a[1] != null).map((midia, index) => {
              return (
                <div>
                  <span key={index}>
                    {socialMediaLink(midia)}
                  </span>
                  <a href={`http://${midia[1]}`} target="_blank" rel="noreferrer" className="text-light">{midia[1]}</a>
                </div>
              );
            })}
          </div>
        </div>
      </SkeletonPage>
    );
  }
};

export default UserProfile;