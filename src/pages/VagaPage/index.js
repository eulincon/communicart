import React from 'react';

import SkeletonPage from '../../components/SkeletonPage';
import VagaDetails from '../../components/VagaDetails';

const VagaPage = () => {
    return (
        <SkeletonPage sidebar={true} footer={true}>
            <h1 className="text-center text-white">Detalhes da vaga</h1>
            <VagaDetails />
        </SkeletonPage>
    );
};

export default VagaPage;