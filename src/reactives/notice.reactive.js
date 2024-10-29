import { reactive } from 'vue';

export const noticeService = reactive({
  noticeData: {
    title: null,
    description: null,
    type: null,
  },
  pushNotification(title, description, type) {
    this.noticeData= {
      title,
      description,
      type
    }
  },
  clearNotice() {
    this.noticeData = {
      title: null,
      description: null,
      type: null,
    };
  }
})