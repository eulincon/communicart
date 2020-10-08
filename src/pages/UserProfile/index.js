import React, { useState } from "react";
import "./styles.css";

import MainComponents from "../../components/MainComponents";
import Sidebar from "../../components/Sidebar";

const UserProfile = () => {
  return (
    <MainComponents>
      <Sidebar />
      <div className="row">
        <div className="col-sm-3 img-container d-flex justify-content-center align-content-center">
          <img
            src="https://ibb.co/vv0gjHt"
            alt=""
            className="img-round w-100"
          />
        </div>
        <div className="col-sm-9 text-white">
          <h1>Hillary Endo</h1>
          <h4>Cadastro feito em 08/09/2020</h4>
          <h4>Tipo de freelancer: {"Pessoa Física"}</h4>
          <h4>Bio:</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            soluta saepe dolorem a ratione necessitatibus ipsam incidunt
            adipisci voluptatibus. Ut iusto eligendi delectus, iure eius sunt
            temporibus repellendus dicta consequatur? Placeat incidunt impedit
            culpa asperiores possimus alias illo laudantium accusantium dolore
            enim veritatis quas id unde dolorum suscipit, porro doloribus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, nam
            molestiae. Aut, alias nihil? Vero non quae nulla architecto cum. In
            doloribus aliquam totam, odio magnam quod cum architecto ut!
          </p>
        </div>
      </div>
      <hr className="divider" />
    </MainComponents>
  );
};

export default UserProfile;
