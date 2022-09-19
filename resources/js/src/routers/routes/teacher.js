import { ROLES } from "../../utilities/constant/app.constant";
import { AuthGuard } from "../components/AuthGuard";

const teacherRoutes = [
    {
        path: '/teacher',
        component: lazy(() => import(`../../pages/teacher/dashboard`)),
        layout: "Teacher",
        guard: AuthGuard,
        permissions: [ROLES.TEACHER],
    },
];
export default teacherRoutes;