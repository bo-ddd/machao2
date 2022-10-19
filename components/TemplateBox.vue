
<template>
    <div class="container">
        <img class="icon" :src="src" alt="">
        <div class="info">
            <p class="title fs-14">{{title}}</p>
            <div class=" align-center mt-10 ">
                <i class="fs-14 iconfont icon-yanjing c-8d9ea7"></i>
                <span class="fs-12 text c-8d9ea7">{{views}}</span>
                <i class="fs-14 iconfont icon-infofill c-8d9ea7"></i>
                <span class="fs-12 text c-8d9ea7 type">{{typeInfo}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    props: {
        title: {
            type: String,
            default: ''
        },
        views: {
            type: String,
            default: ''
        },
        typeInfo: {
            type: String,
            default: ''
        },
        src: {
            type: String,
            default: ''
        },
    },

    mounted() {

    },

}

</script>

<style scoped>
.container {
    display: inline-block;
    border-bottom: 1px solid #dcdcdc;
    font-size: 0;
    cursor: pointer;
    transition: all .3s ease-in-out;
    transform: translateY(2px);
}

.container:hover {
    transition: all .3s ease-in-out;
    box-shadow: 0px 10px 20px #c7c7c7;
    transform: translateY(-2px);
}

.align-center {
    gap: 5px;
}

.info {
    padding: 15px 10px;
}
.title{
    line-height: 12px;
}
.icon{
    --size:365px;
    width: var(--size);
    height: var(--size);
}
</style>