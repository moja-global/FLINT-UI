<template>
    <div class="w-full h-full">
        <a-table :data-source="r" :columns="c" />
    </div>
</template>
<script>
    /* eslint-disable  no-alert, no-console */
    export default {
        name: "Table",
        props: ['rows', 'columns'],
        data() {
            return {
                c: this.columns,
                r: this.rows
            }
        },
    }
</script>

<style>
    thead.ant-table-thead tr th {
        color: white;
        background-color: #475447;
        border: 2px solid #EEEEF0;
        text-align: center
    }

    .ant-table-row td {
        border: 2px solid #EEEEF0;
        text-align: center
    }

    .ant-table-thead > tr:first-child > th:first-child, .ant-table-row-cell-last {
        border-radius: 0px !important;
    }

    .ant-table-thead > tr:first-child > th:first-child {
        border-left: 0px !important;
    }

    .ant-table-row-cell-last {
        border-right: 0px !important;
    }

    .ant-pagination-prev, .ant-pagination-item, .ant-pagination-next {
        color: #475447 !important
    }

    .md-theme-default a:not(.md-button) {
        color: var(--md-theme-default-primary-on-background, #475447) !important
    }

    .ant-pagination-item-active, .ant-pagination-item-active:focus, .ant-pagination-item-active:hover, .ant-pagination-item:hover, .ant-pagination-item:focus {
        border-color: #475447 !important;
    }

    .ant-pagination-next .ant-pagination-item-link, .ant-pagination-prev .ant-pagination-item-link {
        display: flex !important;
        align-items: center !important;
        justify-content: center
    }

    .ant-pagination.ant-table-pagination {
        margin: 16px 0;
        display: flex !important;
        justify-content: center !important;
        float: none !important;
    }
</style>