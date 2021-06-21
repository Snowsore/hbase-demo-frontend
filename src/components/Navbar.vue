<template>
    <div class='box'>
        <div class='title'>
            <p>
                ¯\_(ツ)_/¯
            </p>
        </div>
        <div class='menu'>
            <a href='#'>
                <svg id="Layer_1" enable-background="new 0 0 512 512" height="32" viewBox="0 0 512 512" width="32"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/></svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>

.box {

    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.103);

    display: flex;
    align-content: space-evenly;
    align-items: center;

    padding: 10px;
}

.title {
    
    border-radius: 10px;

    display: grid;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    width: 100%;
    padding: 9px;

    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 5px;

}

.menu {
    margin-top: 5px;
    margin-right: 40px;
}

</style>