import { guestRoutes } from "./guest";
import websiteRoutes from "./website";

const routes = [...guestRoutes, ...websiteRoutes];

export default routes;
