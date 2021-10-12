import React from 'react';

export default function Guy(props){
    const { details } = props;

    if (!details) return <h3>finding guys for you now</h3>

    return(
        <div className="guy container">
            <h3>{details.name}</h3>
            <p>{details.email}</p>
            <p>{details.role}</p>
            <button>edit</button>
        </div>
    )
}