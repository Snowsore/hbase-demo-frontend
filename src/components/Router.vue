<template>

    <div class='router'>
        <Index v-if='page == "index"'></Index>
        <DataTable v-if='page == "table"'></DataTable>
        <GoodsTable v-if='page == "goods"'></GoodsTable>
    </div>
    
</template>

<script>
import Index from './Router/Index'
import DataTable from './Router/DataTable'
import GoodsTable from './Router/GoodsTable'
export default {
    name: 'Router',
    props: [
        'page'
    ],
    components: {
        Index,
        DataTable,
        GoodsTable
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