// routes.js

import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_PATHS } from "../constants";
import Home from "../views/Home.vue";
import Intro from "../views/Intro.vue";
import NotFound from "../views/NotFound.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.INTRO,
      name: ROUTES_PATHS.INTRO,
      component: Intro
    },
    {
      path: ROUTES_PATHS.HOME, 
      name: ROUTES_PATHS.HOME,
      component: Home
           
    },
    {
      path: ROUTES_PATHS.NOT_FOUND,
      name: ROUTES_PATHS.NOT_FOUND,
      component: NotFound
    },
  ],
});

export default router;
