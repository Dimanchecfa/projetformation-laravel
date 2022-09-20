import PageHeader from "../PageHeader";
import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

const ContainerBackOffice = ({ children }) => {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main">
                <Navbar />
                <PageHeader title="Salut" user="Moussa"  liste1="gestions des cours" 
                liste2="gestions des utilisateurs" liste3="gestions des cours"
                route1="/gestion-des-cours" route2="/gestion-des-utilisateurs" route3="/gestion-des-cours" />
                
                <main className="content">
                    {children}
                    </main>
            </div>
        </div>
    );
};

export default ContainerBackOffice;

