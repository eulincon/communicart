import React from 'react';

const Container = ({children}) => {
    return (
        <main className="col-12 col-lg-9 d-flex justify-content-center px-1 px-lg-0">
            <div className="col-md-10 shadow mt-5 p-5 mt-5 bg-primary-darker">
                {children}
            </div>
        </main>
    );
};

export default Container;