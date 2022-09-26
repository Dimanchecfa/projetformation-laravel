import PageHeader from "../PageHeader";
import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import Header from "../header";
import useApp from "../../../utilities/hook/useApp";
import SideBar from "../sidebar";

const ContainerBackOffice = ({ children , menuElements }) => {
    const setting = useApp();
    return (
        <div className={`app sidebar-mini ${setting?.sidenavToggled ? 'sidenav-toggled' : ''} ${setting?.mode === 'dark' ? 'dark-mode' : ''}`}>
            <div className="page">
                <div className="page-main">
                    <SideBar menuElements={menuElements} />
                    <Header />
                    <div className="app-content">
                        <div className="side-app">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerBackOffice;

