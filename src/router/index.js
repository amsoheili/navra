import { createRouter, createWebHistory } from 'vue-router';
import Articles from '@/pages/articles/Articles.vue';
import Enter from '@/pages/enter/Enter.vue';
import SingleArticle from '@/pages/single-article/SingleArticle.vue';

const routes = [
  {
    path: '/articles',
    name: 'articles',
    component: Articles
  },
  {
    path: '/enter',
    name: 'enter',
    component: Enter
  },
  {
    path: '/single-article',
    name: 'singleArticle',
    component: SingleArticle
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
