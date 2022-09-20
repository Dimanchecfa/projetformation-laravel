import React from 'react';

const menuItem = ({ item }) => {
    return (
        <li className="sidebar-item">
            <a className="sidebar-link" href={item.link}>
                <i className="align-middle" data-feather={item.icon}></i>{' '}
                <span className="align-middle">{item.title}</span>
            </a>
        </li>
    );
};

export default menuItem;