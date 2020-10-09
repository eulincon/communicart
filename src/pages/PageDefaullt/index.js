import React from 'react';

import CardVaga from '../../components/CardVaga';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import MainComponents from "../../components/MainComponents";

const PageDefault = ({children}) => {
    return (
        <MainComponents>
            <CardVaga />
            <CardVaga />
            <CardVaga />
            <CardVaga />
            <CardVaga />
            <CardVaga />
        </MainComponents>
    );
};

export default PageDefault;