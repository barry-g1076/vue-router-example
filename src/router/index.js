import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/car/:id",
      name: "car",
      component: () => import("../views/CarView.vue"),
      children: [
        {
          path: "dealer",
          component: () => import("../views/DealerView.vue"),
        },
        {
          path: "manufacture",
          component: () => import("../views/ManufactureView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router