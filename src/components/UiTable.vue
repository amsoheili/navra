<template>
  <div class="ui-table">
    <div class="table-header">
      <div class="index-symbol">#</div>
      <div class="title" v-for="title in props.columnTitles" :style="{flex: title.flex}">{{title.text}}</div>
      <div class="action-placeholder"></div>
    </div>
    <div class="table-rows">
      <div class="table-row" v-if="paginatedList.length > 0" v-for="(item,index) in paginatedList">
        <div class="index">{{index + 1}}</div>
        <div class="single-data" v-for="(title,index) in Object.values(props.columnTitles)" :style="{flex: props.columnTitles[index].flex}">{{item[title.key]}}</div>
        <div class="actions">
          <ui-action-select :options="actionOptions" @optionSelected="onRowAction($event,item.id)"></ui-action-select>
        </div>
      </div>
    </div>
    <div class="pagination">
      <ui-pagination :max-index="5"></ui-pagination>
    </div>
  </div>
</template>



<script setup>
  import UiActionSelect from '@/components/UiActionSelect.vue';
  import { onMounted, ref } from 'vue';
  import UiPagination from '@/components/UiPagination.vue';

  const props = defineProps(['columnTitles','itemsList', 'actions', 'perPage']);
  const emit = defineEmits(['rowAction']);

  const actionOptions = ref([]);
  const currentPage = ref(0);
  const paginatedList = ref([]);

  onMounted(() => {
      createActionOptions();
      initializePaginatedList();
    }
  )

  function initializePaginatedList() {
    paginateList(props.itemsList);
  }

  function paginateList(rawList) {
    const startIndex = currentPage.value*props.perPage;
    const endIndex = currentPage.value*props.perPage + props.perPage - 1;
    paginatedList.value = rawList.slice(startIndex, endIndex);
  }

  function createActionOptions() {
    for (let i = 0; i < props.actions.length; i++) {
      actionOptions.value.push({
        label: props.actions[i],
        value: props.actions[i],
      })
    }
  }

  function onRowAction($event, index) {
    emit('rowAction', $event, index);
  }

</script>

<style>
  .ui-table {
    width: 100%;
    height: 100%;
    overflow-y: visible;
    min-width: 755px;

    .table-header {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0 11px 0;
      background-color: var(--silver);

      .title {
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        text-align: left;
        letter-spacing: normal;
        color: var(--gunmetal);
      }

      .index-symbol {
        width: 40px;
      }

      .action-placeholder {
        width: 66px;
      }
    }

    .table-rows {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .table-row {
        width: 100%;
        height: 66px;
        padding: 19px 0 23px 0;
        display: flex;
        gap: 4px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #ddd;

        .single-data {
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: left;
          color: var(--charcoal-grey);
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        .index {
          width: 40px;
          opacity: 0.9;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.5;
          letter-spacing: normal;
          text-align: center;
          color: var(--charcoal-grey);
        }

        .actions {
          width: 66px;
        }
      }


    }

    .pagination {
      margin-top: 32px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

</style>