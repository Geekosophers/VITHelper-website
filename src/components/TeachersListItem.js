import React from 'react';

const TeachersListItem = ({ name,comments }) => (
    <div>
        <h3>{name}</h3>
        <p>{comments}</p>
    </div>
);

export default TeachersListItem;