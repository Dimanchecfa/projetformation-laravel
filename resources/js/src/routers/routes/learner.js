import { ROLES } from "../../utilities/constant/app.constant";
import { AuthGuard } from "../components/AuthGuard";

const learnerRoutes = [
    {
        path: '/learner',
        component: lazy(() => import(`../../pages/learner/dashboard`)),
        layout: "Learner",
        guard: AuthGuard,
        permissions: [ROLES.LEARNER],
    },
 
];
export default learnerRoutes;