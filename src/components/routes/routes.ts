import { IRoute } from "../../common/interfaces/route.interface";
import About from "../../pages/about/about.page";
import Home from "../../pages/home/home.page";

export const routes: Array<IRoute> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "about-route",
    title: "About",
    path: "/about",
    enabled: true,
    component: About,
  },
];
