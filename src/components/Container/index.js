import React from 'react';

const Container = ({children}) => {
    return (
        <main className="col-12 col-lg-9 d-flex justify-content-center px-1 px-lg-5">
            <div className="col-md-10 shadow mt-5 p-5 ml-auto mr-5 bg-lighter_">
                {children}
            </div>
        </main>
    );
};

export default Container;