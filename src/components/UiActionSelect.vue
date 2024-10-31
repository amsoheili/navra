<template>
  <div class="ui-action-select">
    <div class="button" @click="toggleOpen($event)">
      <div class="dots">...</div>
      <div>
        <img width="16" height="16" src="../assets/arrow-down-white.svg" alt="arrow-down" />
      </div>
    </div>
    <div class="options" v-if="isOpen">
      <div class="option" v-for="option in props.options" @click="optionClicked($event, option)">{{option.label}}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

  const props = defineProps(['options']);
  const emit = defineEmits(['optionSelected']);

  const isOpen = ref(false);

  onMounted(()=>{
    window.addEventListener('click', ()=>{
      isOpen.value = false;
    });
  })

  function toggleOpen($event) {
    $event.stopPropagation();
    isOpen.value = !isOpen.value;
  }

  function optionClicked($event,option) {
    $event.stopPropagation();
    isOpen.value = false;
    emit('optionSelected', option.value);
  }

</script>

<style scoped>
  .ui-action-select {
    position: relative;

    .button {
      border-radius: 4px;
      background-color: var(--dark-sky-blue);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 66px;
      height: 40px;
      cursor: pointer;

      .dots {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
      }
    }

    .options {
      position: absolute;
      display: flex;
      border-radius: 4px;
      border: solid 1px #ddd;
      background-color: #fff;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 175px;
      right: 0;
      z-index: 99;

      .option {
        width: 100%;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: left;
        color: var(--charcoal-grey);
        padding: 12px 15px;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
      }
    }
  }
</style>