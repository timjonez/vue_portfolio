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
    meta: { title: 'Home | Tim Jones' },
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
    meta: { title: 'Resume | Tim Jones' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { title: 'Contact | Tim Jones' },
  },
  {
    path: '/projects',
    name: 'project-list',
    component: ProjectList,
    meta: { title: 'Projects | Tim Jones' },
  },
  {
    path: '/project/:slug',
    name: 'project-detail',
    component: ProjectDetail,
    props: true,
    meta: { title: 'Project | Tim Jones' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let title = 'Tim Jones';
  const pageWithTitle = to.matched.find((r) => r.meta.title);
  if (pageWithTitle) {
    title = pageWithTitle.meta.title;
  }
  document.title = title;
  next();
});

export default router;
