import React from 'react';

import { ReactComponent as IconFixingBugs } from '../../assets/images/vaga_details/undrawn_fixing_bugs.svg'; 

const VagaDetails = (props) => {
    return (
        <div className="shadow card">
            <div className="card-body">
                <h5 className="card-title">Title of the progress</h5>
                <span className="font-weight-bold">Descrição</span>
                <p className="card-text text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.v</p>
                <hr />
                <div>
                    <span className="font-weight-bold">Forma de pagamento: </span>
                </div>
                <div>
                    <span className="font-weight-bold">Faixa de preço: </span>
                </div>
                <hr />
                <div>
                    <span className="font-weight-bold">Habilidades: </span>
                </div>
                <div>
                    <span className="font-weight-bold">Experiências: </span>
                </div>
                <hr />
                <h2>Imagens aqui</h2>
                <IconFixingBugs />

                <button className="btn btn-primary">Candidatar-me</button>
            
            
            </div>
        </div>
    )
};

export default VagaDetails;