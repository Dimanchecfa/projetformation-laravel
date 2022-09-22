import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApp from "../../../utilities/hook/useApp";
import useAuth from "../../../utilities/hook/useAuth";

const Sidebar = ({ menuElements }) => {
    const app = useApp();
    const auth = useAuth();
    const [userInfo, setUserInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        if (auth?.user) {
            const userRole = auth?.user?.role;
            setUserInfo(auth?.user);
            if (userRole) {
                let _menuItems = menuElements.filter(
                    (item) =>
                        item?.permissions?.includes(userRole) ||
                        item?.permissions?.includes(ROLES.ALL)
                );
                setMenuItems(_menuItems);
            }
        }
    }, [menuElements, auth?.user]);

    
    const link = document.querySelectorAll(".sidebar-item");

    link.forEach((el) => {
        el.addEventListener("click", () => {
            link.forEach((el) => el.classList.remove("active"));
            el.classList.add("active");
        });
    });
    const navigate = useNavigate();

    return (
        <>
            <nav
                class={`${
                    app?.sidenavToggled ? "sidebar-active" : "sidebar"
                }  bg-primary`}
            >
                <div class="sidebar-content js-simplebar">
                    <a class="sidebar-brand" href="index.html">
                        <span class="align-middle">AdminKit</span>
                    </a>

                    <ul class="sidebar-nav">
                        {menuElements.map((item, index) => {
                            const itemMenus = item?.navItems
                                ? item?.navItems
                                : [];
                            return (
                                <Fragment key={index}>
                                    {itemMenus?.length > 0 ? (
                                        <>
                                            <li class="sidebar-header">
                                                {item?.header}
                                            </li>
                                            {itemMenus.map(
                                                (itemMenu, index) => (
                                                  <>
                                                  
                                                  <li
                                                        class="sidebar-item"
                                                        key={index}
                                                        onClick={() =>
                                                            navigate(
                                                                itemMenu?.navLink
                                                            )
                                                        }
                                                    >
                                                        <a
                                                            class="sidebar-link"
                                                            href="#"
                                                        >
                                                            <i
                                                                class="align-middle"
                                                                data-feather="sliders"
                                                            ></i>{" "}
                                                            <span class="align-middle">
                                                                {itemMenu?.title}
                                                            </span>
                                                        </a>
                                                    </li>
                                                  </>
                                                ))
                                            }
                                        </>  
                                           ) : (
                                                <li
                                                class="sidebar-item"
                                                key={index}
                                                onClick={() =>
                                                    navigate(
                                                        item?.navLink
                                                    )
                                                }
                                            >
                                                <a
                                                    class="sidebar-link"
                                                    href="#"
                                                >
                                                    <i
                                                        class="align-middle"
                                                        data-feather="sliders"
                                                    ></i>{" "}
                                                    <span class="align-middle">
                                                        {item?.title}
                                                    </span>
                                                </a>
                                            </li>
                                            )
                                            
                                       
                                    }
                                </Fragment>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
