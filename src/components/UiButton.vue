<template>
  <div class="ui-button">
    <button>{{props.buttonText}}</button>
  </div>
</template>

<script setup>
const props = defineProps(['buttonText']);

</script>

<style scoped>
  .ui-button {
    width: 100%;
    height: 40px;

    button {
      height: 100%;
      width: 100%;
      background-color: var(--water-blue);
      padding: 11px 0 11px 0;
      color: var(--white);
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      cursor: pointer;
    }
  }
</style>