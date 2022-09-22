import PageHeader from "../PageHeader";
import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

const ContainerBackOffice = ({ children , menuElements }) => {
    return (
        <div className="wrapper">
            <Sidebar  menuElements={ menuElements } />
            <div className="main">
                <Navbar />
               
                <main className="content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default ContainerBackOffice;

