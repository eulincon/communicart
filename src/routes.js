import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';

import Home from './pages/Home';
import Feed from './pages/Feed';
import NotFoundPage from './pages/NotFoundPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/feed" component={Feed} />
                <Route component={NotFoundPage}/>
                {/* <Redirect to="/404"/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;