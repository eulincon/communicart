import React from 'react';
import Main from './Main';

const SkeletonPage = ({children, sidebar = false, footer = false}) => {
    return (
        <Main sidebar={sidebar} footer={footer}>
            {children}
        </Main>
    )
};

export default SkeletonPage;