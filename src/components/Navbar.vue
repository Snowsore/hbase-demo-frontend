<template>
    <div class='nav-bar'>
        <div style='grid-column: 1 / span 4;'>
            <p>
                人生又有什么东西那么值得去奋斗呢？
            </p>
        </div>
        <div style='grid-column: 5'>
            <p>
                自爆
            </p>
        </div>
        <div style='grid-column: 6'>
            <p>
                退出
            </p>
        </div>
        <div style='grid-column: 7'>
            <p>
                登录
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>

.nav-bar {
    position: absolute;

    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.103);

    display: grid;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 60px;

    padding: 10px;
}

.nav-bar > div:not(:first-child) {
    

    background-color: #102E4A;
    border-radius: 10px;

    display: grid;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    width: 100%;
    padding: 9px;

    
    color: white;
    font-size: 1.1rem;
    font-weight: bold;

}

.nav-bar > div:first-child {
    font-size: 1.1rem;
    letter-spacing: 10px;

}

</style>