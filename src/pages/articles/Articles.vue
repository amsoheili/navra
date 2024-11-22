<template>
  <div class="articles">
    <ui-header :username="username"></ui-header>
    <div class="content">
      <div class="menu">
        <ui-menu title="Post" :items="menuItems"></ui-menu>
      </div>
      <div class="articles-list">
        <div class="title">All Posts</div>
        <div class="table" v-if="convertedArticlesList && convertedArticlesList.length > 0">
          <!--        <router-view />-->
          <ui-table :column-titles="columnTitles" :items-list="convertedArticlesList" :actions="actions" :per-page="9" @rowAction="onRowAction"></ui-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import UiHeader from '@/components/UiHeader.vue';
import UiMenu from '@/components/UiMenu.vue';
import { onMounted, ref } from 'vue';
import UiTable from '@/components/UiTable.vue';
import { UserService } from '@/services/user.service';

const menuItems = ref([
  {
    title: 'All Articles',
    link: '/articles',
  },
  {
    title: 'New Article',
    link: '/articles',
  },
])

const columnTitles = ref([
  {
    text: 'Title',
    key: 'title',
    flex: 1
  },
  {
    text: 'Author',
    key: 'author',
    flex: 1
  },
  {
    text: 'Tags',
    key: 'tag',
    flex: 1
  },
  {
    text: 'Excerpt',
    key: 'excerpt',
    flex: 2
  },
  {
    text: 'Created',
    key: 'created',
    flex: 1
  }
]);
const username = ref(null);
const articlesList = ref([]);
const convertedArticlesList = ref([]);
const actions = ref(['EDIT', 'DELETE']);

const apiService = UserService();

onMounted(()=>{
  loadUserData();
  loadArticles();
})

function loadUserData() {
  apiService.currentUser()
      .then(response => {
        username.value = response.data.user.username;
      });
}

function loadArticles() {
  apiService.getAllArticles().then(response => {
    articlesList.value = response.data.articles;
    convertedArticlesList.value = convertArticlesList(response.data.articles);
  })
}

function convertArticlesList(articles) {
  const convertedList = [];
  for (const article of articles) {
    convertedList.push({
      title: article.title,
      author: article.author.username,
      tag: article.tagList[0],
      excerpt: article.description,
      created: article.updatedAt,
    })
  }
  return convertedList;
}

function onRowAction(action, index) {
  // to do
}
</script>

<style scoped>
  .articles {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .content {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;

      .menu {
        width: 250px;
        height: 100%;
      }

      .articles-list {
        padding: 24px 32px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        overflow-y: scroll;

        .title {
          font-size: 40px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          color: var(--black);
        }
      }

      .table {
        width: 100%;
        height: 580px;
        margin-top: 27px;
      }
    }
  }

  @media(max-width: 1024px) {
    .articles .content .table{
      overflow-x: auto;
      overflow-y: hidden;
    }
  }

  @media(max-width: 744px) {
    .articles {
      .content {
        flex-direction: column;

        .menu {
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>