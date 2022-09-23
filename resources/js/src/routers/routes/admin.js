import { lazy } from "react";
import { ROLES } from "../../utilities/constant/app.constant";
import { AuthGuard } from "../components/AuthGuard";

const adminRoutes = [
    // User Routes Start //
    {
        path: '/admin',
        component: lazy(() => import(`../../pages/admin/dashboard`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/user',
        component: lazy(() => import(`../../pages/admin/user/All`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/user/create',
        component: lazy(() => import(`../../pages/admin/user/Add`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/user/edit',
        component: lazy(() => import(`../../pages/admin/user/Edit`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/user/show',
        component: lazy(() => import(`../../pages/admin/user/Show`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    //-- User Routes End --//
    // Apprenant Routes Start //
    {
        path: '/admin/apprenant',
        component: lazy(() => import(`../../pages/admin/learner/All`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/apprenant/create',
        component: lazy(() => import(`../../pages/admin/learner/Add`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/apprenant/edit',
        component: lazy(() => import(`../../pages/admin/learner/Edit`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/apprenant/show',
        component: lazy(() => import(`../../pages/admin/learner/Show`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    //-- Apprenant Routes End --//
    // Formateur Routes Start //
    {
        path: '/admin/formateur',
        component: lazy(() => import(`../../pages/admin/teacher/All`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/formateur/create',
        component: lazy(() => import(`../../pages/admin/teacher/Add`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/formateur/edit',
        component: lazy(() => import(`../../pages/admin/teacher/Edit`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/formateur/show',
        component: lazy(() => import(`../../pages/admin/teacher/Show`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    //-- Formateur Routes End --//
    // training Routes Start //
    {
        path: '/admin/training',
        component: lazy(() => import(`../../pages/admin/training/All`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/training/create',
        component: lazy(() => import(`../../pages/admin/training/Add`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/training/edit',
        component: lazy(() => import(`../../pages/admin/training/Edit`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/training/show',
        component: lazy(() => import(`../../pages/admin/training/Show`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    //-- training Routes End --//
    // Session Routes Start //
    {
        path: '/admin/session',
        component: lazy(() => import(`../../pages/admin/session/All`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/session/create',
        component: lazy(() => import(`../../pages/admin/session/Add`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/session/edit',
        component: lazy(() => import(`../../pages/admin/session/Edit`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/session/show',
        component: lazy(() => import(`../../pages/admin/session/Show`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    //-- Session Routes End --//
    
   // -- Programme Routes Start --//
    {
        path: '/admin/programme',
        component: lazy(() => import(`../../pages/admin/program/All`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/programme/create',
        component: lazy(() => import(`../../pages/admin/program/Add`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    {
        path: '/admin/programme/edit',
        component: lazy(() => import(`../../pages/admin/program/Edit`)),
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.ADMIN],
    },
    



    
];
export default adminRoutes;