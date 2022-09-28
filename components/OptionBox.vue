<template>
    <div class="box" @click="select">
        <div class="box-con">
            <div class="con-headport"><img :src="headUrl" alt=""></div>
            <div class="con-text">
                <div class="title"><slot name="title"></slot></div>
                <div class="text"><slot name="text"></slot></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['headUrl','status'],
    methods:{
        select(){
            console.log(this.status);
            this.$emit('clickOption',this.status);
        }
    }
}
</script>

<style scoped>
img{
    width: 64px;
    height: 64px;
    display: block;
}
.box{
    width: 322px;
    box-sizing: border-box;
    padding: 25px 30px;
    background: #fff;
    border: 1px solid #dde3eb;
    border-radius: 4px;
    display: block;
}
.box:hover{
    border: 1px solid #4289dc;
    box-shadow:0px 1px 1px 1px #dde3eb;
}
.box-con{
    display: table;
}
.con-headport{
    display:table-cell;
    vertical-align: middle;
}
.con-text{
    display:table-cell;
    vertical-align: middle;
    padding-left: 5px;
}
.title{
        font-size: 21px;
    /* line-height: 1.8rem; */
    color: #4289dc;
    margin-bottom: 8px;
}
.text{
    font-size: 14px;
        color: #727f8f;
}
</style>