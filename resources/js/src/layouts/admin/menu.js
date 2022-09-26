import React from "react";
import { ROLES } from "../../utilities/constant/app.constant";
import { IconGroupUser } from "../../components/icons";

export const menuAdmin = [
    {
        id: "dashboard",
        idon: () => <IconGroupUser />,
        title: "Dashboard",
        navLink: "/dashboard",
        permissions: [ROLES.ADMIN],

    },
    {
        header: "Gestion pedagogiques",
        permissions: [ROLES.ADMIN],
        navItems: [
            {
                id: "programme",
                icon: () => <IconGroupUser className="side-menu__icon" />,
                title: "Programme",
                navLink: "/admin/programme",
                exact: true,
            },
            ,{
                id: "formations" ,
                icon: () => <IconGroupUser className="side-menu__icon" />,
                title: "Formations",
                navLink: "/admin/training",
                exact: true,

            },
            {
                id:"seances",
                icon: () => <IconGroupUser className="side-menu__icon" />,
                title: "Seances",
                navLink: "/admin/session",
                exact: true,

            },
            {
                id:"examen",
                icon: () => <IconGroupUser className="side-menu__icon" />,
                title: "Examen",
                navLink: "/handlers/seances",
                exact: true,
            },



        ],
    },
    {
        header: "Gestion des utilisateurs",
        permissions: [ROLES.ADMIN],
        navItems: [
            {
                id: "utilisateurs",
                icon: () => <IconGroupUser className="side-menu__icon" />,
                title: "Utilisateurs",
                navLink: "/admin/user",
                exact: true,
            },
        ]
    },
    {
        header: "Gestions des formateurs",
        permissions: [ROLES.ADMIN , ROLES.FORMATEUR],
        navItems: [
            {
                id: "formateurs",
                icon: () => <IconGroupUser className="side-menu__icon" />,
                title: "Formateurs",
                navLink: "/admin/formateurs",
                exact: true,
            },

        ]
    }
];
