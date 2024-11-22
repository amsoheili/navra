<template>
  <ui-dashboard>
    <div class="articles-list">
      <div class="title">All Posts</div>
      <div class="table" v-if="convertedArticlesList && convertedArticlesList.length > 0">
        <ui-table v-if="pageSlug" :key="pageSlug" :column-titles="columnTitles" :items-list="convertedArticlesList"
                  :actions="actions" :per-page="9" @rowAction="onRowAction" :current-page="pageSlug"></ui-table>
      </div>
    </div>
  </ui-dashboard>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import UiTable from '@/components/UiTable.vue';
import { UserService } from '@/services/user.service';
import UiDashboard from '@/components/UiDashboard.vue';
import { useRoute } from 'vue-router';

const router = useRoute();
const pageSlug = ref(router.params.page ? router.params.page : 1);
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
const articlesList = ref([]);
const convertedArticlesList = ref([]);
const actions = ref(['EDIT', 'DELETE']);

const userService = UserService();

watch(
    () => router.params.page, // Reactive dependency
    (newSlug) => {
      pageSlug.value = newSlug; // Update local state
    }
);

onMounted(()=>{
  loadArticles();
})

function loadArticles() {
  userService.getAllArticles().then(response => {
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

  @media(max-width: 1024px) {
    .articles-list .content .table{
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
</style>