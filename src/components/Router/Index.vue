<template>

    <div class='grid'>
        <div class='gender'><Gender></Gender></div>
        <div class='group'><Group></Group></div>
        <div class='orderGroup'><OrderGroup></OrderGroup></div>
    </div>
    
</template>

<script>
import Gender from './Index/Gender.vue'
import Group from './Index/Group.vue'
import OrderGroup from './Index/OrderGroup'

export default {
    name: 'Index',
    data() {
        return {
            msg: 1
        }
    },
    components: {
        Gender,
        Group,
        OrderGroup
    },
    
}
</script>

<style scoped>

.grid {
    display: grid;
    grid-template-rows: repeat(6, 200px);
    grid-template-columns: repeat(4, 1fr);

    gap: 40px;
    margin: 30px;
}

.grid > div {
    display: grid;
    width: 100%;
    height: 100%;

    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    overflow: hidden;

    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.226);

    border: 10px solid #2d74bb;
    border-radius: 20px;
    border-style: outset;
    background-color: white;
}

.gender {
    overflow: auto;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
}

.group {
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
}

.orderGroup {
    grid-row: 3 / span 2;
    grid-column: span 4;
}

</style>