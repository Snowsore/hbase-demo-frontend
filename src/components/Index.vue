<template>

    <div class='grid'>
        <div class='gender'><Gender></Gender></div>
        <div class='group'><Group></Group></div>
        <div class='personal'><Personal></Personal></div>
    </div>
    
</template>

<script>
import Gender from './Gender.vue'
import Group from './Group.vue'
import Personal from './Personal.vue'

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
        Personal
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
}

.gender {
    overflow: auto;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
}

.group {
    grid-row: 3 / span 2;
    grid-column: span 2;
}

.personal {
    grid-row: 1 / span 7;
    grid-column: 3 / span 2;
}

</style>