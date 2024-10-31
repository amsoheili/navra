<template>
  <router-view></router-view>
  <UiNotice class="notice-component"></UiNotice>
</template>

<script setup>
import UiNotice from '@/components/UiNotice.vue';

</script>

<style>
:root {
  --silver: #eceeef;
  --warm-grey: #707070;
  --charcoal-grey: #373a3c;
  --water-blue: #1c7cd5;
  --white: #fff;
  --black: #000;
  --pinkish-grey: #e7cecd;
  --dark-sky-blue: #5bc0de;
  --gunmetal: #55595c;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

html, body {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Avenir, Helvetica, Arial,HelveticaNeue,serif;
  position: relative;
  overflow-x: hidden;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

.notice-component {
  position: absolute;
  top: 30px;
  right: 30px;
}
</style>
