<template>
  <div class="ui-input" :class="{ hasError: props.hasError }">
    <div class="label">{{label}}</div>
    <div class="input">
      <input :type="type" v-model="value" @change="$emit('changeValue', $event.target.value)">
    </div>
    <div class="messages">{{errorMessage}}</div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const props = defineProps(['label','hasError', 'errorMessage', 'type']);

const value = ref('');


</script>

<style>
  .ui-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    &.hasError {
     .label {
       color: #cb2e25;
     }

      .input {
        input {
          border-color: #cb2e25;
        }
      }

      .messages {
        color: #cb2e25;
      }
    }

    .label {
      font-size: 16px;
      line-height: 1.13;
      color: var(--charcoal-grey);
      margin-bottom: 9px;
      padding-left: 8px;
    }

    .input {
      height: 40px;
      width: 100%;

      input {
        height: 100%;
        padding: 4px 8px;
        width: 100%;
        border: 1px solid #ddd;
      }
    }

    .messages {
      margin-top: 10px;
      height: 18px;
    }
  }

</style>