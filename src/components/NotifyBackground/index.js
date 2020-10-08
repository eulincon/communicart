import React from 'react';

const NotifyBackground = ({children}) => {
    return (
        <div className="container bg-light mt-5 p-3">
            {children}
        </div>
    );
};

export default NotifyBackground;