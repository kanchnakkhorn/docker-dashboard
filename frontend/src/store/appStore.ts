import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
  state: () => ({
    tabs: {
      home: {
        name: 'Home',
        route: '/',
        icon: 'home'
      },
      containers: {
        name: 'Containers',
        route: '/containers',
        icon: 'containers'
      },
      users: {
        name: 'Users',
        route: '/users',
        icon: 'users'
      }
    }
  })
})