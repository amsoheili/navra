import { createRouter, createWebHistory } from 'vue-router';
import Articles from '@/pages/articles/Articles.vue';
import Enter from '@/pages/enter/Enter.vue';
import ArticlesPage from '@/pages/articles-page/ArticlesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/enter',
  },
  {
    path: '/articles',
    name: 'articles',
    component: Articles,
    children: [
      {
        path: 'page/:page',
        component: ArticlesPage,
      }
    ]
  },
  {
    path: '/enter',
    name: 'enter',
    component: Enter
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
