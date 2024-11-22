<template>
  <div class="ui-pagination">
    <div class="prev index" @click="emit('onPrevPage')"><</div>
    <div v-if="indicesList.length > 0" class="indices">
      <div v-for="index of indicesList" class="index" @click="emit('onCertainPage',index-1)">{{index}}</div>
    </div>
    <div class="next index" @click="emit('onNextPage')">></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

  const props = defineProps(['maxIndex','currentIndex'])
  const emit = defineEmits(['onNextPage','onPrevPage','onCertainPage']);

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
      cursor: pointer;
    }

    .indices {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>