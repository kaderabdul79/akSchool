import React from 'react';

const Public = (props) => {
    const {name } = props.user
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Public;