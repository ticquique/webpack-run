import { Route, createRouter, Options, State, errorCodes } from "router5";
import browserPlugin from "router5-plugin-browser";
import { comicMainLayout } from "app/comic-main/comic-main";
import { comicShopLayout } from "app/comic-shop/comic-shop";
import { comicAboutLayout } from "app/comic-about/comic-about";
import { error404Layout } from "app/404/404";
import { artCharactersLayout } from "./comic-art/characters/characters";
import { artSketchesLayout } from "./comic-art/sketches/sketches";
import { artStagesLayout } from "./comic-art/stages/stages";

const routes: Route[] = [
  { name: "comic", path: "/" },
  { name: "about", path: "/about" },
  { name: "characters", path: "/characters" },
  { name: "stages", path: "/stages" },
  { name: "sketches", path: "/sketches" },
  { name: "shop", path: "/shop" },
  { name: "404", path: "/404" }
];

const map: Map<string, any> = new Map();
map.set("comic", comicMainLayout);
map.set("characters", artCharactersLayout);
map.set("stages", artStagesLayout);
map.set("sketches", artSketchesLayout);
map.set("about", comicAboutLayout);
map.set("shop", comicShopLayout);
map.set("404", error404Layout);

const routerOptions: Partial<Options> = {
  trailingSlashMode: "default"
};
const router = createRouter(routes, routerOptions);
router.usePlugin(browserPlugin());
router.start();

export const navigate = (route: string) => {
  router.navigate(route, (err: { code: string }, state: State) => {
    if (err !== null && err.code === errorCodes.ROUTE_NOT_FOUND) {
      document.body.setAttribute("data-currentpage", "404");
      router.navigate("404");
    } else {
      document.body.setAttribute("data-currentpage", route);
      const container = document.getElementById("main");
      const firstChild = container.children.item(0);
      if (firstChild !== null) container.removeChild(firstChild);
      container.appendChild(map.get(route));
    }
  });
};
export default router;
