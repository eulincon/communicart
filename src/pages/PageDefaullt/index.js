import React from 'react';

import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';

import './styles.css';

const PageDefault = ({children}) => {
    return (
        <>
            {/* <Menu /> */}
            <Sidebar/>
            <Main>
                {children}
            </Main>
        </>
    );
};

export default PageDefault;