import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({
    title,
    user,
    liste1,
    liste2,
    liste3,
    route1,
    route2,
    route3,
}) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="page-header">
                <h1 className="text-title">
                   {title} {""}<span className="primary">{user}</span>
                </h1>

                <ul className="page-list">
                    <li
                        onClick={() => {
                            navigate(route1);
                        }}
                    >
                        {liste1}
                    </li>
                    <li
                        onClick={() => {
                            navigate(route2);
                        }}
                    >
                        {liste2}
                    </li>
                    <li
                        onClick={() => {
                            navigate(route3);
                        }}
                    >
                        {liste3}
                    </li>
                </ul>
            </div>
        </>
    );
};

export default PageHeader;
