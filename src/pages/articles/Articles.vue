<template>
  <div class="articles">
    <ui-header></ui-header>
    <div class="content">
      <div class="menu">
        <ui-menu title="Post" :items="menuItems"></ui-menu>
      </div>
      <div class="articles-list">
        <div class="title">All Posts</div>
        <div class="table">
          <!--        <router-view />-->
          <ui-table  :column-titles="columnTitles" :items-list="itemsList" :actions="actions" @rowAction="onRowAction"></ui-table>
        </div>
      <div class="pagination">
        <ui-pagination :max-index="5"></ui-pagination>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import UiHeader from '@/components/UiHeader.vue';
import UiMenu from '@/components/UiMenu.vue';
import { ref } from 'vue';
import UiTable from '@/components/UiTable.vue';
import { articlesList } from '@/pages/articles/articles';
import UiPagination from '@/components/UiPagination.vue';

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

const itemsList = ref(articlesList);

const actions = ref(['EDIT', 'DELETE']);

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
        overflow: hidden;

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

      .pagination {
        margin-top: 32px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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