import React from 'react';

import CardVaga from '../../components/CardVaga';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';

const PageDefault = ({children}) => {
    return (
        // {/* <Menu /> */}
        <div>
            <Sidebar/>
            <Main>
                {/* {children} */}
                <CardVaga />
                <CardVaga />
                <CardVaga />
                <CardVaga />
                <CardVaga />
                <CardVaga />
            </Main>
        </div>
    );
};

export default PageDefault;