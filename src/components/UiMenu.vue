<template>
  <div class="ui-menu">
    <div class="title">{{props.title}}</div>
    <div class="items">
      <div class="item" v-for="(item,index) in props.items" :key="index" :class="{selected: selectedItem === index}" @click="itemClicked(index)">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['title', 'items']);

const selectedItem = ref(0);

function itemClicked(itemIndex) {
  selectedItem.value = itemIndex;
}

</script>

<style>
  .ui-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 13px 0;
    background-color: var(--water-blue);
    width: 100%;
    height: 100%;

    .title {
      padding-left: 20px;
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      color: var(--white);
    }

    .items {
      margin-top: 16px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .item {
        color: var(--white);
        padding: 11px 34px;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        width: 100%;
        text-align: left;
        cursor: pointer;

        &.selected {
          background-color: rgba(255, 255, 255, 0.15);
        }
      }
    }

  }
</style>