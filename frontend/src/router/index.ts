import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import HomePage from "../pages/HomePage.vue";
import UsersListingPage from "../pages/UsersListingPage.vue";
import SimpleLayout from "../layouts/SimpleLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import { containerRouter } from "./containerRouter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: '/users',
          name: 'users-page',
          component: UsersListingPage
        },
        ...containerRouter
      ]
    },
    {
      path: '/login',
      component: SimpleLayout,
      children: [
        {
          path: '',
          name: 'login-page',
          component: LoginPage
        }
      ]
    }
  ],
})

export default router;