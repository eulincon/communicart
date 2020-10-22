import React from "react";

import MenuLateral from "../MenuLateral";
import Footer from "../Footer";
import Container from "../Container";

const MainComponents = ({ children }) => {
  return (
    <div className="container-fluid">
      <header className="bg-dark row p-4">
        <small className="text-white">H E A D E R P R O V I S Ó R I O</small>
      </header>
      <div className="row">
        <MenuLateral />
        <Container>{children}</Container>
      </div>
      <div className="row mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default MainComponents;
