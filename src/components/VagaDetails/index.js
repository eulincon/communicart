import React from 'react';

<<<<<<< HEAD
import { ReactComponent as IconFixingBugs } from '../../assets/images/vaga_details/undraw_fixing_bugs.svg';
=======
import { ReactComponent as IconFixingBugs } from '../../assets/images/vaga_details/undraw_fixing_bugs.svg'; 
import { ReactComponent as IconOptimizeImage } from '../../assets/images/vaga_details/undraw_Optimize_image.svg'; 
import { ReactComponent as IconPhotograph } from '../../assets/images/vaga_details/undraw_Photograph.svg'; 
import { ReactComponent as IconTeamUp } from '../../assets/images/vaga_details/undraw_team_up.svg'; 

>>>>>>> 2d93bccd6255dfcd1899a3c794c149ac7e1b45d9
const VagaDetails = (props) => {
    return (
        <>
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
                <div className="row jumbotron">
                    <IconFixingBugs className="col border img-thumbnail"/>
                    <IconOptimizeImage className="col border img-thumbnail"/>
                    <IconPhotograph className="col border img-thumbnail"/>
                    <IconTeamUp className="col border img-thumbnail"/>
                </div>

                <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-secondary_">Candidatar-me</button>
            </div>
        </div>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {/* <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form> */}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
};

export default VagaDetails;
