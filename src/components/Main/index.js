import React from 'react';

const Main = ({children}) => {
    return (
        <div className="col-10 shadow mt-5 p-5 bg-primary_">
            {children}
        </div>
    );
};

export default Main;