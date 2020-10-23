import React from 'react';
import Main from './Main';

const SkeletonPage = () => {
    return (
        <Main sidebar={true} footer={true}>
            <h1 className="text-light">This children in main</h1>
            sdfds
            <br /><br /><br /><br />sdfsdfasfdsadfbr
            <br />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>sadsad
        </Main>
    )
};

export default SkeletonPage;