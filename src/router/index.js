import { createRouter, createWebHistory } from 'vue-router';
import Articles from '@/pages/articles/Articles.vue';
import Enter from '@/pages/enter/Enter.vue';
import SingleArticle from '@/pages/single-article/SingleArticle.vue';

const routes = [
  {
    path: '/',
    redirect: '/enter',
  },
  {
    path: '/articles',
    name: 'articles',
    children: [
      {
        path: '',
        component: Articles,
      },
      {
        path: 'page/:page',
        component: Articles,
      },
      {
        path: 'edit/:slug',
        component: SingleArticle
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
