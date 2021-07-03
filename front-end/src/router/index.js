import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectList from '../views/ProjectList.vue';
import ProjectDetail from '../views/ProjectDetail.vue';
import Resume from '../views/Resume.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/projects',
    name: 'project-list',
    component: ProjectList,
  },
  {
    path: '/project/:slug',
    name: 'project-detail',
    component: ProjectDetail,
    props: true,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
