<template>
    <div class="head-nav just-between fs-14">
        <div class="nav-left align-center">
            <nuxt-link :to="{name:toUrl}">
            <img class="logo-img mr-30 img-s-40" :src="logoUrl" alt="">
            </nuxt-link>
            <span class="nav-left-text">
                <slot name="left-text"></slot>
            </span>
        </div>
        <div class="nav-right align-center">
            <span class="nav-right-text">
                <slot name="right-text">
                </slot>
            </span>
            <slot name="button"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['toUrl','logoUrl'],

}
</script>
<style scoped>
.head-nav {
    height: 70px;
    padding: 0 28px;
    border-bottom: 2px solid #EFEFEF;
    box-sizing: border-box;
    box-shadow: 0px 0.5px 5px #E9E9E9;
}

.nav-left {
    height: 100%;
}


.nav-right {
    height: 100%;
    color: #727f8f;
}

.logo-img {
    display: block;
}

.img-s-21 {
    height: 21px;
}

.img-s-40 {
    height: 40px;
}
@media screen and (max-width: 770px) {
    .nav-left-text {
        display: none;
    }
}

@media screen and (max-width: 480px) {
    .nav-right-text {
        display: none;
    }
}
</style>