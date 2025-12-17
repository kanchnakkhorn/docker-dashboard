import ContainerDetailPage from "../pages/containers/ContainerDetailPage.vue"
import ContainersListingPage from "../pages/containers/ContainersListingPage.vue"

export const containerRouter = [
  {
    path: '/containers',
    name: 'containers-listing-page',
    component: ContainersListingPage
  },
  {
    path: '/containers/:container_id',
    name: 'containers-detail-page',
    component: ContainerDetailPage
  }
]