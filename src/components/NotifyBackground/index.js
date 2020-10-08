import React from 'react';

const NotifyBackground = ({children}) => {
    return (
        <div className="d-flex flex-column ml-auto mr-5 bg-light shadow col-md-8 container mt-5 p-5">
            {children}
        </div>
    );
};

export default NotifyBackground;