<template>

    <div class='side-bar'>
        <div style='grid-row: span 2'>
            <p>
                ¯\_(ツ)_/¯
            </p>
        </div>
        <div>
            <p>
                选择菜单
            </p>
        </div>
        <div>
            <p>
                选项1
            </p>
        </div>
        <div>
            <p>
                选项2
            </p>
        </div>
        <div>
            <p>
                选项3
            </p>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Sidebar'
    
}
</script>

<style scoped>

* {
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 2px;
}

.side-bar {
    position: absolute;
    background-color: #102E4A;

    display: grid;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    grid-template-rows: repeat(15, 1fr);
    grid-gap: 20px;

    padding: 10px;
}

.side-bar > div {
    display: grid;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 100%;

    padding-bottom: 10px;

    border-bottom: 1px solid #0000003f;
}

</style>