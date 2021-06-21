<template>

    <div class='router'>
        <Index v-if='page == "index"'></Index>
        <DataTable v-if='page == "table"'></DataTable>
    </div>
    
</template>

<script>
import Index from './Router/Index'
import DataTable from './Router/DataTable'
export default {
    name: 'Router',
    props: [
        'page'
    ],
    components: {
        Index,
        DataTable
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