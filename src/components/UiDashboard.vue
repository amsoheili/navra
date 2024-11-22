<template>
  <div class="dashboard-container">
    <ui-header :username="username"></ui-header>
    <div class="content">
      <div class="menu">
        <ui-menu title="Post" :items="menuItems"></ui-menu>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import UiMenu from '@/components/UiMenu.vue';
import UiHeader from '@/components/UiHeader.vue';
import { onMounted, ref } from 'vue';
import { UserService } from '@/services/user.service';
const username = ref(null);
const menuItems = ref([
  {
    title: 'All Articles',
    link: '/articles',
  },
  {
    title: 'New Article',
    link: '/articles',
  },
]);

const userService = UserService();

onMounted(()=>{
  loadUserData();
});

function loadUserData() {
  userService.currentUser()
      .then(response => {
        username.value = response.data.user.username;
      });
}
</script>


<style>
.dashboard-container {
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
  }
}

@media(max-width: 744px) {
  .dashboard-container {
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