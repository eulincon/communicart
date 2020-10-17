import React from 'react';

import './styles.css'
import Footer from '../../components/Footer'
import MenuLateral from '../../components/MenuLateral'

function CadastroJob() {


    async function handleLogin(e) {
        e.preventDefault();

    }


    return (
        <>
            <main className="container-fluid corpo-Cadastro">
                <div className="row d-flex ">
                    <div className="col-3 ">
                    </div>
                    <div className="col-9 cadastro-job">
                        <form className="container-fluid d-flex flex-column">
                            <h1 className="align-self-center">Cadastro Job</h1>
                            <section className="row ">
                                <div className="col-6 d-flex flex-column ">
                                    <section>
                                        <label for="tituloJob">Título do job</label>
                                        <input type="text" className="form-control" id="tituloJob" required />
                                    </section>
                                    <section>
                                        <label for="tipoJob">Tipo de job</label>
                                        <select class="custom-select" id="tipoJob" size="3">
                                            <option value="1">Edição de Imagem</option>
                                            <option value="2">Escrita</option>
                                            <option value="3">Ilustração</option>
                                            <option value="4">Foto</option>
                                            <option value="5">Edição de video</option>
                                        </select>
                                    </section>
                                    <br /><hr />
                                </div>
                                <div className="col-6">
                                    <label for="descricaoJob">Descrição</label>
                                    <textarea class="form-control" id="descricaoJob" rows="6"></textarea>
                                </div>
                            </section>
                            <br /><hr />
                            <h3 className="align-self-center">Requisitos</h3>
                            <section className="row justify-content-start">
                                <div className="col-6 d-flex flex-column ">
                                    <label for="nivelExpJob">Nível de experiência</label>
                                    <input type="text" className="form-control" id="nivelExpJob" required />
                                    <br />
                                    <label for="habilidadeJob">Habilidade específica</label>
                                    <select class="custom-select" id="habilidadeJob" size="3">
                                        <option value="1">Técnico deilustração</option>
                                        <option value="2">Tipo de áudio</option>
                                        <option value="3">Tipo de documento</option>
                                        <option value="4">Software</option>
                                    </select>
                                    <br />
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile" />
                                        <label class="custom-file-label" for="customFile">Anexar Arquivo</label>
                                    </div>
                                </div>
                            </section>
                            <br /><hr />
                            <h3 className="align-self-center">Datas e pagamento</h3>
                            <section className="row">
                                <div className="col-6 justify-content-start">
                                    <label for="faixaPreco">Faixa de preço</label>
                                    <div className="d-flex ">
                                        <input type="text" className="form-control mr-3" id="faixaPreco" placeholder="R$ min" required />
                                        <input type="text" className="form-control ml-3" placeholder="R$ max" required />
                                    </div>
                                    <br />
                                    <label for="prazoPagamento">Prazo de pagamento</label>
                                    <div className="row">
                                        <input type="date" className="form-control col-5" id="prazoPagamento" required />
                                        <section className=" col-6 ml-3" >
                                            <input className="form-check-input" type="checkbox" value="" id="prazoNegociar" />
                                            <label className="form-check-label" for="prazoNegociar">
                                                A definir/negociar
                                        </label>
                                        </section>
                                    </div>
                                    <br />
                                    <label for="prazoPagamento">Forma de pagamento</label>
                                </div>
                            </section>
                            <div className="row">
                                <select class="custom-select col-4" size="3">
                                    <option value="1">Boleto</option>
                                    <option value="2">Crédito</option>
                                    <option value="3">Debito</option>
                                    <option value="4">Paypal</option>
                                    <option value="5">Picpay</option>
                                </select>
                                <section className="col ml-3">
                                    <div className="row">
                                        <div className="col-4">
                                            <input className="form-check-input" type="checkbox" value="" id="PagamentoNegociar" />
                                            <label className="form-check-label" for="PagamentoNegociar">
                                                A definir/negociar
                                </label>
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="checkbox" value="" id="notaFiscal" />
                                            <label className="form-check-label" for="notaFiscal">
                                                Obrigatorio nota fiscal para CNPJ
                                </label>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <br /><hr />
                            <h3 className="align-self-center">Formas de Contato</h3>
                            <section className="d-flex flex-column ">
                                <div className="col-10 align-self-center">
                                <section>
                                    <input className="form-check-input" type="checkbox" value="" id="contatoEmail" />
                                <label className="form-check-label" for="contatoEmail">
                                    E-mail
                                </label>
                                </section>
                                <section>
                                    <input className="form-check-input" type="checkbox" value="" id="contatoTelefone" />
                                <label className="form-check-label" for="contatoTelefone">
                                    Telefone
                                </label>
                                </section>
                                <section>
                                    <input className="form-check-input" type="checkbox" value="" id="contatoLinkdin" />
                                <label className="form-check-label" for="contatoLinkdin">
                                    Linkedin
                                </label>
                                </section>
                                <section>
                                    <input className="form-check-input" type="checkbox" value="" id="contatoChat" />
                                <label className="form-check-label" for="contatoChat">
                                    Bate-pao
                                </label>
                                </section>
                                </div>
                            </section>
                            <br/><hr/>

                            <button type="submit" className="btn align-self-center btnPublicar">Publicar</button>
                            <br/><br/>
                        </form>
                    </div>
                </div>
            </main>
          <Footer />
        </>
    );
}
export default CadastroJob;