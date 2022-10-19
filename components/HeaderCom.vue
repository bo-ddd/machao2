<template>
    <header class="fs-14 header-max">
        <div class="header-l">
            <nuxt-link to="/">
                <img class="logo" :src="logo" alt="logo">
            </nuxt-link>
            <div class="nav-list">
                <div class="nav-item">
                    <a>找项目</a>
                </div>
                <div class="nav-item">
                    <a href="/square/SquareIndex"> 模板广场</a>
                    <svg class="new-tip" xmlns="http://www.w3.org/2000/svg" width="36" height="14" viewBox="0 0 36 14">
                        <g fill="none">
                            <rect width="36" height="14" fill="#F75288" rx="2"></rect>
                            <path fill="#FFFFFF"
                                d="M5.77,3.146 L5.77,11 L6.969,11 L6.969,5.093 L7.013,5.093 L11.072,11 L12.238,11 L12.238,3.146 L11.039,3.146 L11.039,8.987 L10.995,8.987 L6.98,3.146 L5.77,3.146 Z M13.789,3.146 L13.789,11 L19.619,11 L19.619,9.977 L14.988,9.977 L14.988,7.48 L19.168,7.48 L19.168,6.457 L14.988,6.457 L14.988,4.169 L19.432,4.169 L19.432,3.146 L13.789,3.146 Z M20.125,3.146 L22.38,11 L23.667,11 L25.262,4.939 L25.306,4.939 L26.901,11 L28.177,11 L30.443,3.146 L29.09,3.146 L27.561,9.262 L27.517,9.262 L25.911,3.146 L24.657,3.146 L23.051,9.262 L23.007,9.262 L21.478,3.146 L20.125,3.146 Z">
                            </path>
                        </g>
                    </svg>
                </div>
                <div class="nav-item">
                    <a>帮助中心</a>
                </div>
            </div>
        </div>
        <div class="header-r">
            <div class="btns">
                <div class="btn"><a href="/login/LoginPage">登录</a></div>
                <div class="btn"><a href="/register/RegisterPage">注册</a></div>
                <div class="btn btn-border">发布项目</div>
            </div>
        </div>
    </header>
</template>

<script>
export default{
    props:{
        background:{
            type:String,
            default:'#2b3a42',
        },
        fontColor:{
            type:String,
            default:'#fff',
        },
        logo:{
            type:String,
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: v-bind(background);
}

.header-max {
    color: v-bind(fontColor);
}

.header-min>img {
    width: 24px;
}

.header-min {
    padding: 15px 28px;
}

.logo {
    height: 50px;
    position: relative;
    top: 6px;
}


.header-l {
    display: flex;
    align-items: center;
}

.nav-list {
    display: flex;
    margin-left: 30px;
}

.nav-list .nav-item {
    width: 84px;
    position: relative;
    margin-right: 7px;
}

.nav-list .nav-item svg {
    position: absolute;
    top: -10px;
    right: -3px;
}

.btns .btn {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid transparent;
    margin: 0 5px;
}

a {
    color: v-bind(fontColor);
}

.btn-border {
    border: 1px solid #ccc;
}

.btns .btn:hover {
    border: 1px solid #ccc;
    cursor: pointer;
}
</style>