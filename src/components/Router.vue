<template>

    <div class='router'>
        <Index v-if='page == "index"'></Index>
        <DataTable v-if='page == "table"'></DataTable>
        <GoodsTable v-if='page == "goods"'></GoodsTable>
        <OrdersTable v-if='page == "orders"'></OrdersTable>
        <LogsTable v-if='page == "logs"'></LogsTable>
    </div>
    
</template>

<script>
import Index from './Router/Index'
import DataTable from './Router/DataTable'
import GoodsTable from './Router/GoodsTable'
import OrdersTable from './Router/OrdersTable'
import LogsTable from './Router/LogsTable'
export default {
    name: 'Router',
    props: [
        'page'
    ],
    components: {
        Index,
        DataTable,
        GoodsTable,
        OrdersTable,
        LogsTable
    },
}
</script>

<style scoped>

.router {
    position: absolute;
    overflow-y: scroll;

    background-color: #c7d0d8;
}

</style>