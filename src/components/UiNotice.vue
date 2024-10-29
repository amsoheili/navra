<template>
  <div class="ui-notices" v-if="noticeData.title && noticeData.description && noticeData.type">
    <div class="notice" :class="{ error: noticeData.type === 'error' }">
      <div class="texts">
        <span class="title">{{noticeData.title}}</span>
        <span class="description">{{noticeData.description}}</span>
      </div>

      <div class="close" @click="closeNotice">
        x
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { noticeService } from '@/reactives/notice.reactive';

  const noticeData = ref({
    title: null,
    description: null,
    type: null
  });

  watch(()=> noticeService.noticeData,(changedNoticeData)=>{
    noticeData.value = {
      title: changedNoticeData.title,
      description: changedNoticeData.description,
      type: changedNoticeData.type,
    }
  })

  function closeNotice() {
    noticeService.clearNotice();
  }
</script>

<style>
  .ui-notices {
    padding: 15px 23px;
    border-radius: 3px;
    border: solid 1px var(--pinkish-grey);
    background-color: #efdfdf;

    .notice {
      display: flex;
      align-content: center;
      justify-content: space-between;
      max-width: 456px;
      width: max-content;
      gap: 24px;
    }

    .texts {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }

    .title, .description {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: left;
      color: #9f4f48;
    }

    .title {
      font-weight: bold;
    }
  }

  .close {
    opacity: 0.2;
    text-shadow: 0 1px 0 #fff;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: var(--charcoal-grey);
    cursor: pointer;
  }

  @media(max-width: 456px){
    .ui-notices {
      .notice {
        width: 90vw;
      }
    }
  }
</style>