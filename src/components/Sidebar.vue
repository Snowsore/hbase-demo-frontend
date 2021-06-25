<template>

    <div class='container'>

        <a href='#' @click='$emit("pop", "login")' class='logo'>
            (ツ)
        </a>

        <div class='side-bar'>
            <a href='#' @click='$emit("goto", "index")'>
                个人信息
            </a>
            <a href='#' @click='$emit("goto", "table")'>
                用户数据
            </a>
            <a href='#' @click='$emit("goto", "goods")'>
                商品数据
            </a>
            <a href='#' @click='$emit("goto", "orders")'>
                订单数据
            </a>
            <a href='#' @click='$emit("goto", "logs")'>
                日志
            </a>
        </div>

        <p class='footer'>
                此网页由Snowsore<br>
                借鉴及抄袭<br>
                如有疑问,请自己打飞机<br>
        </p>
    
    </div>
    
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style scoped>

.container {
    background-color: #102E4A;
    
    display: flex;
    flex-direction: column;
    align-content: space-evenly;
    align-items: center;

    padding: 0;
}

.side-bar {

    display: grid;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    width: 80%;

}

.side-bar > a {

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    font-size: 1.1rem;

    width: 100%;
    height: 100%;

    padding-bottom: 20px;

    border-bottom: 1px solid #FFFFFF10;

    color: #ffffffC0;
    letter-spacing: 2px;

    padding: 10px 0;

    text-decoration: none;

    transition: .3s all ease;

}

.side-bar > a:hover {
    color: #FFFFFF30;
}

.logo {
    display: grid;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    color: #102E4A;
    
    font-weight: bolder;
    font-size: 5rem;

    background-color: #FFFFFF80;
    border-radius: 50%;

    height: 150px;
    width: 150px;

    padding-bottom: 15px;

    margin: 50px;

    text-decoration: none;

}

.footer {

    font-size: 0.8rem;

    margin: 20px;
    color: #FFFFFFA0;

    width: 80%;
}

</style>