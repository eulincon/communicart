import React from 'react';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';

import VagaDetails from '../../components/VagaDetails';

const VagaPage = () => {
    return (
        <>
            <Sidebar />
            <Main>
                {/* {children} */}
                <h1 className="text-center text-white">Detalhes da vaga</h1>
                <VagaDetails />
            </Main>
        </>
    );
};

export default VagaPage;