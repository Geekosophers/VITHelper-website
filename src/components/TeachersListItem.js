import React from 'react';

const TeachersListItem = ({ name,comments }) => (
    <div className="list-item">
        <h3 className="list-item__title">{name}</h3>
        <p className="list-item__title">{comments}</p>
    </div>
);

export default TeachersListItem;