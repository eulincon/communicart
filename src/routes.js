import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';

import Home from './pages/Home';
import Feed from './pages/Feed';
import NotFound from './pages/NotFound';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/feed" component={Feed} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;