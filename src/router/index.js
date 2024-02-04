import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TechStackView from '../views/TechStackView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import PortfolioItemDetail from '../components/Portfolio/PortfolioItemDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/TechStack',
      name: 'techstack',
      component: TechStackView
    },
    {
      path: '/Portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/PortfolioItemDetail/:id',
      name: 'projectdetail',
      component: PortfolioItemDetail
    }
  ]
})

export default router
