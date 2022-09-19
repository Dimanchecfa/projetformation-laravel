import adminRoutes from "./admin";
import { guestRoutes } from "./guest";
import websiteRoutes from "./website";

const routes = [...guestRoutes, ...adminRoutes];

export default routes;
