<template>
  <div class="ui-button">
    <button :class="buttonType">{{props.buttonText}}</button>
  </div>
</template>

<script setup>
const props = defineProps(['buttonText', 'buttonType']);

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
      cursor: pointer;

      &.b-black {
        border-radius: 4px;
        border: solid 1px var(--dark-sky-blue);
        color: var(--dark-sky-blue);
        background-color: var(--charcoal-grey);
      }

      &.b-red {

      }

      &.b-white {

      }
    }
  }
</style>