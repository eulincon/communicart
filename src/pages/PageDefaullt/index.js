import React from 'react';

import CardVaga from '../../components/CardVaga';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';

import './styles.css';

const PageDefault = ({children}) => {
    return (
        <>
            {/* <Menu /> */}
            <Sidebar/>
            <Main>
                {/* {children} */}
                <CardVaga />
            </Main>
        </>
    );
};

export default PageDefault;