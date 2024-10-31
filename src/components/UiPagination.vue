<template>
  <div class="ui-pagination">
    <div class="prev index"><</div>
    <div v-if="indicesList.length > 0" class="indices">
      <div v-for="index of indicesList" class="index">{{index}}</div>
    </div>
    <div class="next index">></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

  const props = defineProps(['maxIndex','currentIndex'])

  const indicesList = ref([]);

  onMounted(() => {
    fillIndicesList();
  })

  function fillIndicesList() {
    for (let i = 1; i <= props.maxIndex; i++) {
      indicesList.value.push(i)
    }
  }
</script>

<style>
  .ui-pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    .index {
      min-width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: var(--charcoal-grey);
      border: solid 1px #ddd;
    }

    .indices {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>