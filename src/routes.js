import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import NotFoundPage from "./pages/NotFoundPage";
import PageDefault from "./pages/PageDefaullt";
import Payments from "./pages/Payments";
import VagaPage from "./pages/VagaPage";
import Notify from "./pages/Notify";
import Registration from "./pages/Registration";
import Signup from "./pages/Signup";
import CreateProfile from "./pages/CriarPerfil";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import PasswordRecovery from "./pages/PasswordRecovery";
import PasswordRegistration from "./pages/PasswordRegistration";
import Wishlist from "./pages/Wishlist";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/recuperacao" exact component={PasswordRecovery} />
        <Route path="/novaSenha" exact component={PasswordRegistration} />
        <Route path="/home" component={Home} exact />
        <Route path="/feed" component={PageDefault} />
        <Route path="/page-default" component={Feed} />
        <Route path="/vagas/1" component={VagaPage} />
        <Route path="/usuarios/1" component={UserProfile} />
        <Route path="/payments" component={Payments} />
        <Route path="/notify" component={Notify} />
        <Route path="/cadastro" component={Registration} />
        <Route path="/signup" component={Signup} />
        <Route path="/criar-perfil" component={CreateProfile} />
        <Route path="/wishlist" component={Wishlist} />
        <Route component={NotFoundPage} />
        {/* <Redirect to="/404"/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
