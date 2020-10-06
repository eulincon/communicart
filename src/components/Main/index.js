import React from 'react';

import './styles.css';

const Main = ({children}) => {
    return (
        <div className="col-md-8 shadow mt-5 p-5 ml-auto mr-5 main-style">
            {children}
        </div>
    );
};

export default Main;