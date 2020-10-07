import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';

import Home from './pages/Home';
import Feed from './pages/Feed';
import NotFoundPage from './pages/NotFoundPage';
import PageDefault from './pages/PageDefaullt';
import Payments from './pages/Payments';
import VagaPage from './pages/VagaPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/feed" component={PageDefault} />
                <Route path="/page-default" component={Feed} />
                <Route path="/vagas/1" component={VagaPage}/> 
                <Route path="/payments" component={Payments}/>
                <Route component={NotFoundPage} />
                {/* <Redirect to="/404"/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;