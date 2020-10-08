import React from 'react';

import './styles.css';

const Main = ({children}) => {
    return (
        <div className="col-md-9 shadow mt-4 mr-4 p-5 ml-auto main-style">
            {children}
        </div>
    );
};

export default Main;