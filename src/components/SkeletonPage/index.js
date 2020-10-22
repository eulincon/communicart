import React from 'react';
import Main from './Main';

const SkeletonPage = () => {
    return (
        <Main sidebar={true} footer={true}>
            <h1 className="txt-primary-lighter">This children in main</h1>    
        </Main>
    )
};

export default SkeletonPage;