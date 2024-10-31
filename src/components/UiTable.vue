<template>
  <div class="ui-table">
    <div class="table-header">
      <div class="index-symbol">#</div>
      <div class="title" v-for="title in props.columnTitles" :style="{flex: title.flex}">{{title.text}}</div>
      <div class="action-placeholder"></div>
    </div>
    <div class="table-rows">
      <div class="table-row" v-for="(item,index) in props.itemsList">
        <div class="index">{{index + 1}}</div>
        <div class="single-data" v-for="(title,index) in Object.values(props.columnTitles)" :style="{flex: props.columnTitles[index].flex}">{{item[title.key]}}</div>
        <div class="actions"></div>
      </div>
    </div>
  </div>
</template>



<script setup>
  const props = defineProps(['columnTitles','itemsList']);

</script>

<style>
  .ui-table {
    width: 100%;
    height: 100%;
    overflow: auto;

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
        width: 36px;
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
          width: 36px;
        }
      }


    }
  }
</style>