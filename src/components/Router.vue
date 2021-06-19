<template>

    <div class='router'>
        <Index v-if='isIndex'></Index>
    </div>
    
</template>

<script>
import Index from './Index'
export default {
    name: 'Router',
    props: [
        'page'
    ],
    components: {
        Index
    },
    computed: {
        isIndex() {
            return this.page == 'index'
        }
    }
}
</script>

<style scoped>

.router {
    position: absolute;
    overflow-y: scroll;
}

</style>