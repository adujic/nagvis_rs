import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import ActivityView from '../views/ActivityView.vue'
import Contact from '../views/Contact.vue'
import Library from '../views/Library.vue'
import Projekti from '../views/Projekti.vue'
import Activity from '../views/Activity.vue'
import Resources from '../views/Resources.vue'
import Center from '../views/Center.vue'

import BoLogIn from '../views/BackOfficeLi.vue'
import BackOffice from '../views/BackOffice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news/:id',
    name: 'News',
    component: News
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/library',
    name: 'Library',
    component: Library
  },
  {
    path: '/projects',
    name: 'Projekti',
    component: Projekti
  }
  ,
  {
    path: '/activity/',
    name: 'Aktivnosti',
    component: Activity
  },
  {
    path: '/activity/:id',
    name: 'Activity',
    component: ActivityView
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/aboutgv',
    name: 'AboutGv',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutGv.vue')
  },
  {
    path: '/center/:id',
    name: 'Center',
    component: Center
  },
  {
    path: '/login',
    name: 'LogIn',
    component: BoLogIn
  },
  {
    path: '/backoffice',
    name: 'BackOffice',
    component: BackOffice
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
